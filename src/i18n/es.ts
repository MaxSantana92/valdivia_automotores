export const es = {
  meta: {
    title: 'Valdivia Automotores | Especialistas en Flotas para Minería',
    description:
      'Ingeniería de precisión y logística de alto desempeño para los entornos más exigentes del mundo. Lideramos la movilidad minera en la región.',
  },
  nav: {
    vehicles: 'Vehículos',
    vehicles_0km: '0 KM',
    vehicles_used: 'Usados',
    aftersales: 'Postventa',
    aftersales_items: [
      'Mecánica Integral',
      'Repuestos y Accesorios',
      'Mantenimiento Express',
      'Pickup & Delivery Puerta a Puerta',
      'Equipamiento Minero',
      'Auxilio Mecánico',
      'Cotización para Aseguradoras',
      'Lavadero',
    ],
    services: 'Servicios',
    services_items: ['Financiación', 'Seguros', 'Gestoría'],
    about: 'Nosotros',
    cta: 'Contáctenos',
  },
  hero: {
    title2: 'Soluciones Automotrices',
    title3: 'y Flotas para la Industria Minera',
    subtitle:
      'Ingeniería de precisión y logística de alto desempeño para los entornos más exigentes del mundo. Lideramos la movilidad minera en la región.',
    cta1: 'Cotizar Flota Minera',
    cta2: 'Ver Catálogo',
  },
  specialty: {
    badge: 'Logística de Precisión',
    title1: 'Diseñados para el',
    title2: 'Impacto Extremo.',
    body: 'La minería no perdona. Sus vehículos deben resistir condiciones de altitud, corrosión y terreno hostil. En Valdivia Automotores, no solo entregamos flotas; configuramos activos estratégicos blindados con tecnología de monitoreo y seguridad activa de última generación.',
    feat1: 'Adaptación Custom Mining Spec',
    feat2: 'Telemetría en Tiempo Real',
  },
  catalog: {
    badge: 'Showroom Industrial',
    title: 'Catálogo de Alto Rango',
    see_all: 'Ver todos los modelos',
    cta: 'Detalles Técnicos',
    vehicles: [
      {
        brand: 'BAIC',
        model: 'BJ40 Plus Mining Spec',
        desc: 'Resistencia estructural reforzada y tracción total inteligente.',
        tags: ['4x4 High', 'Diesel Tech'],
        tag_style: ['default', 'default'],
      },
      {
        brand: 'BYD',
        model: 'BYD T3 Electric Fleet',
        desc: 'Eficiencia energética sustentable para operaciones de campamento.',
        tags: ['Zero Emission', '300KM Range'],
        tag_style: ['primary', 'primary'],
      },
      {
        brand: 'FOTON',
        model: 'Foton G7 Heavy Duty',
        desc: 'La bestia de carga para transporte de materiales críticos.',
        tags: ['1 Ton Payload', 'Anti-Roll Bar'],
        tag_style: ['default', 'default'],
      },
    ],
  },
  partners: {
    label: 'Authorized Mining Partner',
    brands: ['BAIC', 'BYD', 'FOTON', 'VOLKSWAGEN'],
    quote:
      '"Valdivia Automotores transformó nuestra logística operacional en los Andes. No solo por los vehículos, sino por el soporte técnico 24/7 que garantiza que nuestra producción nunca se detenga."',
    author_name: 'Ing. Ricardo Mendez',
    author_role: 'Director de Logística — Minera del Norte',
  },
  contact: {
    badge: 'Comenzar Actualización',
    title1: 'Hablemos de',
    title2: 'tu Próxima',
    title3: 'Flota.',
    body: 'Nuestro equipo de expertos en ingeniería automotriz minera está listo para diseñar una propuesta a la medida de sus KPIs operacionales.',
    phone: '+54 11 4932 2000',
    email: 'corporate@valdivia.com.ar',
    address: 'Distrito Tecnológico, Buenos Aires',
    fields: {
      name: 'Nombre Completo',
      email: 'Email Corporativo',
      company: 'Empresa Minera',
      message: 'Requerimientos Especiales',
    },
    placeholders: {
      name: 'Escriba su nombre',
      email: 'usuario@empresa.com',
      company: 'Nombre de la compañía',
      message: 'Descripción de la solicitud',
    },
    submit: 'Enviar Consulta',
  },
  footer: {
    copy: '© 2024 Valdivia Automotores. Precision Engineered.',
    links: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Contact', 'Locations'],
  },
} as const

export type Translations = typeof es
