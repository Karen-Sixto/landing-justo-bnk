# Jüsto · Landing Tarjeta de Crédito (prototipo)

Prototipo navegable de la landing de la tarjeta de crédito Jüsto, construido con
React + Vite a partir del archivo **Pantallas** (Desktop / Tablet / Mobile) y del
**Justo DS Web V.1.0**.

## Cómo levantarlo

Necesitas Node.js 18 o superior.

```bash
cd ~/Documents/justo-landing
npm install
npm run dev
```

Se abre solo en http://localhost:5173

## Estructura

```
src/
  styles/tokens.css      ← tokens del DS (colores, tipografía, spacing, radius, sombras)
  styles/global.css      ← reset, estilos de texto del DS, animaciones de entrada
  components/ds/         ← componentes del DS: Button, Navbar, ListCard, Accordion, CreditCardTile
  sections/              ← secciones de la landing (Hero, DeltaCards, Stepper, Requirements,
                           BentoGrid, Faq, Banner, Footer)
public/assets/           ← imágenes e íconos exportados de Figma
```

## Breakpoints

| Vista   | Ancho          | Frame Figma |
|---------|----------------|-------------|
| Desktop | ≥ 1180 px      | DESKTOP (1920) |
| Tablet  | 600 – 1179 px  | TABLET (744) |
| Mobile  | ≤ 599 px       | MOBILE (430) |

## Tipografía

El prototipo usa **JUST Sans** si está instalada en la computadora. Si no lo está,
se muestra **Figtree** como respaldo (por eso algunos textos pueden cortar línea
distinto a Figma). Para verlo idéntico, instala JUST Sans en el sistema.

## Despliegue en Cloudflare Pages

El sitio es estático: `npm run build` genera la carpeta `dist/`, que es lo que se sube.

| Dato | Valor |
|------|-------|
| Comando de build | `npm run build` |
| Carpeta de salida | `dist` |
| Versión de Node | 20 (ver `.nvmrc`) |
| Nombre del proyecto | `justo-landing` → `https://justo-landing.pages.dev` |

### Opción A · Subir desde el dashboard (sin terminal)

1. `npm run build`
2. En Cloudflare: **Workers & Pages → Create → Pages → Upload assets**.
3. Nombre del proyecto: `justo-landing`. Arrastra la carpeta `dist`.
4. Para actualizar: vuelve a correr `npm run build` y sube `dist` como nueva versión del mismo proyecto.

### Opción B · Desde la terminal (Wrangler)

```bash
npm run cf:login        # solo la primera vez: abre el navegador para iniciar sesión en Cloudflare
npm run deploy          # build + publica en producción
npm run deploy:preview  # build + publica una URL de prueba (preview.justo-landing.pages.dev)
```

### Opción C · Conectado a GitHub (despliegue automático)

1. Sube esta carpeta a un repositorio (el `.gitignore` ya excluye `node_modules` y `dist`).
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elige el repo.
3. Framework preset: **Vite** · Build command: `npm run build` · Output: `dist` · Variable `NODE_VERSION = 20`.
4. Cada push a `main` publica; cada rama genera una URL de preview.

### Archivos de configuración incluidos

- `public/_headers`: cabeceras de seguridad, caché larga para JS/CSS y `X-Robots-Tag: noindex`.
- `public/robots.txt`: bloquea buscadores mientras sea prototipo.
- `wrangler.toml`: nombre del proyecto y carpeta de salida para Wrangler.

**Antes de hacerlo público:** quita la línea `X-Robots-Tag` de `public/_headers`, cambia `robots.txt` a `Allow: /`, y si se quiere ver con JUST Sans en cualquier computadora, agrega los archivos `.woff2` de la fuente (con licencia web) y su `@font-face` en `src/styles/tokens.css`.
