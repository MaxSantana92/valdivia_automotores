# Referencia: GitHub Actions y despliegue

## Archivos mínimos en el proyecto

| Archivo | Rol |
|---------|-----|
| `.github/workflows/deploy.yml` | Pipeline CI/CD |
| `package.json` | Scripts `build` (y lockfile para `npm ci`) |
| `astro.config.mjs` | `site`, `base`, adaptador si SSR |

## GitHub Pages: URLs típicas

- **Usuario/organización**: `https://<user>.github.io/<repo>/` → suele requerir `base: '/<repo>/'`.
- **Proyecto con dominio propio en raíz**: `base: '/'`, `site: 'https://tudominio.com'`.

## Otros destinos (no Pages)

Si el usuario pide Netlify o Vercel, el workflow cambia: en lugar de `upload-pages-artifact` / `deploy-pages`, suele usarse el CLI o la integración nativa del proveedor (a menudo sin workflow manual). Mantener esta skill centrada en **GitHub Actions + Pages** salvo petición explícita.

## Versiones de acciones

Preferir tags mayores estables (`@v4`, `@v3`) y revisar changelog en GitHub si el build falla tras meses sin tocar el workflow.
