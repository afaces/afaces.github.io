# 🎧 afaces.github.io – Página web de artista musical independiente

> Infraestructura para liberar tu música fuera de las distribuidoras, sin tarifas, sin censura, y 100% bajo tu control.

Este repositorio te permite crear tu propia página web de artista con radio, catálogo musical, botones de descarga, sistema de donaciones y contacto. Basado en GitHub Pages, Bootstrap 4 y herramientas automáticas para que cualquier artista pueda tener su espacio sin depender de plataformas privadas.

---

## 🚀 Instrucciones de instalación

### 1. Crear el repositorio de tu web

1. Crea o accede a tu cuenta de GitHub.
2. Crea un repositorio llamado:  
   `YOUR_ACCOUNT_NAME.github.io`

### 2. Clonar y copiar el proyecto base

```bash
git clone https://github.com/YOUR_ACCOUNT_NAME/YOUR_ACCOUNT_NAME.github.io
cd YOUR_ACCOUNT_NAME.github.io

git clone https://github.com/afaces/afaces.github.io
mv afaces.github.io/* .
rmdir afaces.github.io
````

---

## 🎛️ Personalización de tu sitio

### 3. Editar la información de tus álbumes

* Modifica los archivos de datos (ej: `albums.txt`) con tus álbumes y canciones.

### 4. Generar botones para cada canción

```bash
bash create_song_buttons.sh
```

* Sustituye el contenido generado de `buttons.md` dentro de tu `index.md`:

```bash
cat buttons.md >> index.md
```

### 5. Generar la barra de reproducción

```bash
bash create_navbar_player.sh
```

* Sustituye el `track_list` de `player.js` con el contenido de `albums.json` generado.

### 6. Convertir archivos a `.mp3` (opcional)

```bash
bash move_to_mp3.sh
```

---

## 🌐 Dominio personalizado (opcional)

1. Registra un dominio gratuito en [freenom.com](https://www.freenom.com) o [000webhost.com](https://www.000webhost.com).
2. Usa [redirect.pizza](https://redirect.pizza) para redireccionar `tudominio.tk` a `YOUR_ACCOUNT_NAME.github.io`.
3. En el repositorio de GitHub, ve a Settings > Pages y añade tu dominio personalizado (ej. `afaces.tk`).

---

## 💌 Contacto y donaciones

* Contacto: usa [Formspree.io](https://formspree.io) para activar tu formulario.
* Donaciones: activa integración `Client-only Checkout` desde [Stripe Dashboard](https://dashboard.stripe.com/).

---

## 📦 Características técnicas

* HTML5 + Bootstrap 4
* Scripts automatizados (`bash`)
* Integración con GitHub Pages
* 100% editable y autogestionado
* Repositorio sin bases de datos ni backend

---

## 🧠 Contribución

> ¡Este proyecto busca músicos, desarrolladores y artistas que quieran escapar del sistema de streaming!

Consulta la [guía de colaboración](./CONTRIBUTING.md) si deseas ayudar o forkear este sistema.

---

## 🎨 Tema visual

Este sitio usa un tema de [Bootswatch](https://bootswatch.com) para Bootstrap 4.

---

## 🖋 Autor

**Afaces**
[afaces.github.io](https://afaces.github.io)
Libre para que cualquiera lo use, lo modifique y lo propague.

---

> ✊ La música no necesita tarifas para existir.
> 🔥 Este es tu sitio. Tu radio. Tu catálogo. Tu arte.
> 🧨 Forkea, edita, difunde, resiste.

