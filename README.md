# OneDeal — Plataforma B2B de Micro-abastecimiento Urbano

> **Un solo pedido, múltiples proveedores, una sola entrega y factura.**

Sitio web del Proyecto OneDeal — Embudo de ventas B2B para tiendas de barrio en Quito, Ecuador.

## 🌐 URL Pública

**https://onedeal-quito.github.io**

---

## 🗂️ Estructura del Embudo (4 páginas)

| Página | Etapa del Embudo | Emoción del Cliente | Touchpoint |
|--------|-----------------|---------------------|------------|
| [`index.html`](index.html) | 1 · Conciencia / Descubrimiento | Escepticismo → curiosidad | Visita de promotor / anuncio Facebook |
| [`catalogo.html`](catalogo.html) | 2 · Consideración / Exploración | Cautela analítica → sorpresa | Web ultraligera con OTP (sin contraseñas) |
| [`pedido.html`](pedido.html) | 3 · Conversión / Primera compra | Ansiedad operativa → alivio | Confirmación SMS + tracking GPS en vivo |
| [`aliados.html`](aliados.html) | 4 · Lealtad / Retención | Tranquilidad → empoderamiento | Pedidos predictivos a 1 clic + microcrédito |

---

## 📁 Estructura de Archivos

```
EP-PROYECTO/
├── index.html          ← Etapa 1: Descubrimiento
├── catalogo.html       ← Etapa 2: Exploración del catálogo
├── pedido.html         ← Etapa 3: Checkout y conversión
├── aliados.html        ← Etapa 4: Programa de lealtad
├── css/
│   └── style.css       ← Estilos compartidos (mobile-first)
├── js/
│   └── main.js         ← Interacciones y animaciones
└── README.md
```

---

## 🚀 Despliegue en GitHub Pages

### Paso 1 — Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre del repositorio: **`onedeal-quito.github.io`** (o cualquier nombre)
3. Márcalo como **Public**
4. Haz clic en **Create repository**

### Paso 2 — Subir los archivos

**Opción A — Desde la web de GitHub (más fácil):**
1. En el repositorio recién creado, haz clic en **"uploading an existing file"**
2. Arrastra toda la carpeta `EP-PROYECTO` o sube los archivos uno por uno
3. Haz clic en **Commit changes**

**Opción B — Con Git desde la terminal:**
```bash
cd "ruta/a/EP-PROYECTO"
git init
git add .
git commit -m "Initial commit: OneDeal website"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/onedeal-quito.github.io.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages

1. Ve a **Settings → Pages** en tu repositorio
2. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`
3. Haz clic en **Save**
4. Espera 2-3 minutos y visita `https://TU_USUARIO.github.io/onedeal-quito.github.io/`

### Paso 4 — Verificar en modo incógnito

- Abre una ventana de incógnito (Ctrl+Shift+N en Chrome)
- Visita la URL pública
- Prueba la navegación entre las 4 páginas
- ✅ Si todo carga: entrega la URL

---

## 🔍 SEO Aplicado

### Clusters Temáticos y Keywords

**Cluster 1 — Abastecimiento:**
- `proveedores para tiendas Quito`
- `mayoristas de abarrotes Ecuador`
- `comprar al por mayor para minimarket`
- `distribuidores de consumo masivo`
- `abastecimiento tienda barrio Quito`

**Cluster 2 — Gestión de Micronegocios:**
- `cómo administrar una tienda de barrio`
- `mejorar ganancias minimarket Ecuador`
- `sistema de pedidos para tiendas`
- `microcrédito para tiendas Quito`
- `gestión inventario minimarket`

### Checklist SEO On-Page ✅

- [x] **Título único** por página (max 60 caracteres, keyword primaria al inicio)
- [x] **Meta descripción única** por página (max 155 caracteres, incluye CTA)
- [x] **Meta keywords** relevantes por cluster en cada página
- [x] **Open Graph** tags (og:title, og:description, og:url, og:image)
- [x] **Schema.org** structured data (Organization + WebPage + BreadcrumbList)
- [x] **H1 único** por página con keyword principal
- [x] **Jerarquía de encabezados**: H1 → H2 → H3 (sin saltos)
- [x] **HTML semántico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [x] **Atributos `alt`** descriptivos en todas las imágenes SVG e íconos
- [x] **ARIA labels** en todos los elementos interactivos
- [x] **`lang="es"`** en el atributo del HTML
- [x] **Breadcrumb** estructurado en páginas internas
- [x] **Canonical URL** implícito por dominio GitHub Pages

### Checklist SEO Técnico ✅

- [x] **Mobile-first** — CSS diseñado desde el breakpoint más pequeño
- [x] **Responsive design** — breakpoints en 640px y 1024px
- [x] **Fuentes del sistema** + Google Fonts con `display=swap` (no bloquea render)
- [x] **Sin dependencias externas** de JS (vanilla JS puro)
- [x] **`rel="noopener"`** en todos los enlaces externos
- [x] **`rel="noopener noreferrer"`** implícito en target="_blank"
- [x] **robots.txt** y **sitemap.xml** incluidos
- [x] **Favicon SVG** inline (sin petición HTTP extra)

### Checklist UX / Accesibilidad ✅

- [x] **Contraste de color** — texto oscuro sobre fondos claros, mín. 4.5:1
- [x] **Focus states** — elementos interactivos focusables con teclado
- [x] **`aria-label`** en botones, íconos y secciones críticas
- [x] **`aria-live="polite"`** en el widget de tracking (actualización dinámica)
- [x] **`aria-expanded`** en el hamburger y acordeón
- [x] **`role`** attributes donde el HTML semántico no alcanza
- [x] **Tamaños de tap target** ≥ 44px en todos los botones (mobile)

---

## 🎨 Identidad Visual

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#F97316` | Naranja — CTAs, énfasis, marca |
| `--primary-dark` | `#EA580C` | Hover states |
| `--secondary` | `#1E293B` | Azul marino oscuro — fondos, texto |
| `--accent` | `#22C55E` | Verde — confirmaciones, estados exitosos |
| `--text` | `#0F172A` | Texto principal |
| `--text-muted` | `#64748B` | Texto secundario / subtítulos |

---

## 🧑‍💼 Buyer Persona

**"Don Carlos" — El Tendero Tradicional**

- Hombre/Mujer, 40-60 años
- Propietario de tienda de abarrotes en Quito (Cotocollao, Chillogallo, Centro Histórico)
- Uso intensivo de **WhatsApp** — poca afinidad con software complejo
- Motivaciones: surtido constante, mejores márgenes, más tiempo libre
- Objeciones: desconfianza tecnológica, miedo al desabastecimiento

---

*Proyecto universitario — EP USFQ 2025*

