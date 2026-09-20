# Z&B — Landing Page

Landing page para Z&B (domótica, automatización de procesos industriales,
electricidad industrial, electricidad de motocicletas y cámaras IP).
Construida con React + Vite, Tailwind CSS y Framer Motion.

## Correr el proyecto

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Antes de publicarla — datos a completar

Buscá estos placeholders y reemplazalos por los datos reales de la empresa:

- **Teléfono / WhatsApp**: en [`src/components/Contact.jsx`](src/components/Contact.jsx)
  y [`src/components/FloatingWhatsApp.jsx`](src/components/FloatingWhatsApp.jsx),
  reemplazá `https://wa.me/549XXXXXXXXXX` por el número real
  (formato `549` + código de área + número, sin espacios ni signos).
- **Email de contacto**: `contacto@zybelectricidad.com` en `Contact.jsx`.
- **Zona de cobertura**: "A definir por la empresa" en `Contact.jsx`.
- **Estadísticas** (años de experiencia, instalaciones realizadas, % de
  clientes satisfechos) en [`src/components/About.jsx`](src/components/About.jsx)
  — están estimadas, ajustalas a los números reales de Z&B.

## El formulario de contacto

El formulario en `Contact.jsx` es solo de interfaz: al enviarlo, muestra un
mensaje de confirmación pero **no envía el mensaje a ningún lado todavía**.
Para que funcione de verdad, conectalo a un servicio como:

- [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com) (sin backend propio, rápido de integrar), o
- un endpoint propio / integración con WhatsApp Business API / email.

## Logo

El logo oficial está en `src/assets/images/`, en su versión de letras blancas
(la que corresponde porque todo el sitio es negro). Las tres piezas se
recortaron del mismo archivo original:

- `logo-zb.png` — solo el isologotipo Z&B. Se usa en el navbar.
- `logo-zb-full.png` — versión completa con el tagline
  ("SOLUCIONES ELÉCTRICAS INTELIGENTES"). Se usa en el footer.
- `public/favicon.png` — favicon armado con el "&" del rayo sobre un cuadro
  negro, para que se vea tanto en pestañas claras como oscuras.

Si el logo cambia, reemplazá las tres piezas juntas para que no queden
versiones distintas conviviendo en la página.

## Imágenes

Las fotos de `src/assets/images/` son fotografías de stock (Unsplash,
licencia de uso libre) elegidas para representar cada sección — no son fotos
de trabajos reales de Z&B ni imágenes generadas por IA. Antes de publicar,
lo ideal es reemplazarlas por fotos propias de instalaciones y obras reales
de la empresa, sobre todo las 4 del hero, que son lo primero que se ve.

Las imágenes ya están comprimidas (el bundle de producción pesa ~4.7MB en
total). Si sumás fotos propias, pasalas antes por
[squoosh.app](https://squoosh.app) o `vite-plugin-image-optimizer`.

## Estructura

- `src/App.jsx` — arma la página uniendo todas las secciones.
- `src/components/` — cada sección es un componente independiente:
  - `Hero` — slider fotográfico a pantalla completa, con 4 slides (industrial,
    domótica, cámaras IP y motos). Para editar los textos, las imágenes o el
    orden, tocá el array `SLIDES` al principio del archivo; la duración de
    cada slide se controla con la constante `SLIDE_MS`.
  - `Navbar`, `Marquee`, `Services` — cabecera y presentación general.
  - `SmartHome` — sección de domótica con hotspots interactivos sobre una
    imagen de casa (cámaras, cerraduras, portero, alarma, switches, portón;
    compatibilidad con Alexa / Google Assistant).
  - `IndustrialAutomation` — automatización industrial con PLC: banner con
    parallax, galería de imágenes, ventajas y experiencia.
  - `IndustrialShowcase` — obras de tendido eléctrico industrial: banner,
    galería de trabajos y mejoras/optimizaciones.
  - `About`, `Process`, `Contact`, `Footer`, `FloatingWhatsApp`.
  - `Tilt3D` — wrapper reutilizable que da el efecto de inclinación 3D al
    mouse (usado en tarjetas, imágenes y paneles en toda la página).
- `tailwind.config.js` — paleta de colores (`ink` = negros, `volt` = amarillo),
  fuentes y animaciones custom (marquesina, franjas industriales, grilla).
