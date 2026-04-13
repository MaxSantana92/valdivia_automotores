---
name: github-actions-publish
description: >-
  Configures GitHub Actions to build and deploy static Astro sites to GitHub Pages:
  workflow YAML, permissions, dist artifact, github-pages environment, and astro.config site/base alignment. Use when the user asks for CI/CD, automated
  deploy, GitHub Pages, or when reviewing .github/workflows.
---

# Publicar con GitHub Actions (Astro → GitHub Pages)

## Objetivo

Entregar un pipeline reproducible: **push a `main`** (o ejecución manual) → **install** → **build** → **subir `dist`** → **deploy-pages**.

## Requisitos en el repositorio (GitHub)

1. **Settings → Pages → Build and deployment**
   - **Source**: *GitHub Actions* (no “Deploy from a branch” con `gh-pages` salvo que el proyecto use ese flujo explícitamente).
2. La primera ejecución puede pedir **aprobar** el entorno `github-pages` (Settings → Environments).
3. **Dominio personalizado** (opcional): Settings → Pages → *Custom domain* + archivo `public/CNAME` si aplica; los certificados los gestiona GitHub.

## Alineación Astro (`astro.config.mjs`)

- **`site`**: URL canónica pública final (con `https://`, sin barra final). Afecta sitemap, URLs absolutas y metadatos SEO.
- **`base`**: usar **`'/'`** para sitio en la raíz del dominio. Si el sitio vive en `https://usuario.github.io/repo/`, entonces `base: '/repo/'` y rutas de assets deben respetarlo.

Sin `site` correcto, los enlaces absolutos y el RSS pueden apuntar a un host equivocado.

## Workflow estándar (GitHub Pages oficial)

Crear o mantener `.github/workflows/deploy.yml` con este patrón (Node 20 LTS, caché npm, artefacto = carpeta de salida de Astro, normalmente `dist`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Notas de implementación

| Elección | Motivo |
|----------|--------|
| `npm ci` | Instalación reproducible en CI (requiere `package-lock.json` committed). Si el repo no tiene lockfile, usar `npm install` hasta generarlo. |
| `actions/upload-pages-artifact@v3` + `deploy-pages@v4` | Flujo soportado oficialmente para Pages con OIDC (`id-token: write`). |
| Job `deploy` separado | Requisito del flujo *upload artifact → deploy* de Pages. |

## Variantes útiles

### Fijar versión de Node desde el repo

Añadir `.nvmrc` con una línea (ej. `20`) y en el workflow:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version-file: .nvmrc
    cache: npm
```

### Despliegue solo en tags (releases)

```yaml
on:
  push:
    tags: ['v*']
```

### Build en PR sin publicar

Job adicional con `npm run build` en `pull_request` **sin** `upload-pages-artifact` ni job `deploy`, para validar que compila.

## Comprobaciones rápidas ante fallos

- **403 / permisos**: faltan `pages: write` e `id-token: write` en `permissions`.
- **404 o assets rotos**: revisar `base` en Astro vs URL real del sitio (`/repo/` vs raíz).
- **URL incorrecta en meta tags**: revisar `site` en `astro.config`.
- **Cache corrupta**: en Actions, “Re-run failed jobs” tras limpiar caché o bump de dependencias.

## Referencia adicional

Plantillas y matriz de destinos (Pages vs otros hosts) en [reference.md](reference.md).
