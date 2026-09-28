# Estudio de fondos: app instalable (PWA) para GitHub Pages

## Contenido del paquete

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa (incluye el motor de recorte, fondos y logos) |
| `manifest.webmanifest` | Nombre, ícono y colores de la app instalada |
| `sw.js` | Permite abrir la app sin internet y detectar actualizaciones |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Íconos para Android e iPhone |
| `.nojekyll` | Opcional; evita que GitHub procese los archivos |

## 1. Subir los archivos

1. Descomprime el ZIP en tu computadora.
2. Abre tu repositorio en github.com y toca **Add file → Upload files**.
3. Arrastra **todos los archivos** de la carpeta descomprimida (son archivos sueltos, sin subcarpetas).
   Deben quedar en la raíz del repositorio, no dentro de otra carpeta.
4. Toca **Commit changes**.

> Si `.nojekyll` no se sube porque es un archivo oculto, no pasa nada: la app funciona igual.

## 2. Activar GitHub Pages

1. En el repositorio ve a **Settings → Pages**.
2. En **Build and deployment → Source** elige **Deploy from a branch**.
3. En **Branch** elige `main` y la carpeta `/ (root)`. Toca **Save**.
4. Espera uno o dos minutos. Arriba aparecerá la dirección de tu app, con esta forma:
   `https://kurtbrinze.github.io/FF_Photo_Edit/`

> En cuentas gratuitas, GitHub Pages solo funciona si el repositorio es **público**.

## 3. Instalar en el celular

**Android (Chrome):** abre el enlace. Toca **Instalar app** (arriba a la derecha dentro de la app)
o usa el menú ⋮ → **Instalar app** / **Agregar a pantalla principal**.

**iPhone (Safari):** abre el enlace, toca **Compartir** → **Agregar a inicio**.

Después de abrirla una vez con internet, la app funciona sin conexión.

## 4. Compartir la app

Envía el enlace por WhatsApp. Al tocarlo se abre en el navegador y desde ahí se puede instalar.

## 5. Publicar una versión nueva

1. Sube el `index.html` nuevo, reemplazando el anterior.
2. Edita `sw.js` y cambia el número de versión, por ejemplo al siguiente número, por ejemplo de `"v2"` a `"v3"`:
   `const VERSION = "v3";`
3. Guarda los cambios (**Commit changes**).

Los celulares que ya tienen la app verán el aviso **"Hay una versión nueva de la app"** con el botón
**Actualizar**. Si no cambias la versión en `sw.js`, los celulares seguirán usando la versión anterior.
