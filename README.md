# 🍮 Miguitas

> Página web de postres artesanales — construida con Webpack

![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?style=flat-square&logo=webpack&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/Licencia-MIT-purple?style=flat-square)

---

## 📖 Descripción

**Miguitas** es una página web dedicada a la venta y exhibición de postres artesanales. El proyecto fue desarrollado con **Webpack** como herramienta de empaquetado, optimizando los assets para una experiencia rápida y fluida.

---

## ✨ Características

- 🎂 **Catálogo de postres** — Galería de productos con imágenes y descripciones
- 📱 **Diseño responsive** — Compatible con móviles, tablets y escritorio
- ⚡ **Webpack optimizado** — Bundle minificado con lazy loading de imágenes
- 🎨 **Assets optimizados** — CSS y JS minificados para carga rápida

---

## 🛠️ Tecnologías

### Core
- Webpack 5
- HTML5
- CSS3 / SASS
- JavaScript ES6+

### Loaders & Plugins
- `babel-loader` — Transpilación de JavaScript moderno
- `css-loader` + `sass-loader` — Procesamiento de estilos
- `HtmlWebpackPlugin` — Generación del HTML final
- `MiniCssExtractPlugin` — Extracción de CSS a archivo separado
- `webpack-dev-server` — Servidor de desarrollo con hot reload

---

## 📁 Estructura del proyecto

```
miguitas/
├── src/
│   ├── assets/          # Imágenes y fuentes
│   ├── styles/          # Archivos SASS/CSS
│   │   ├── main.scss
│   │   └── components/
│   ├── js/              # Módulos JavaScript
│   │   ├── index.js
│   │   └── modules/
│   └── index.html       # Template principal
├── dist/                # Build generado por Webpack
├── webpack.config.js    # Configuración de Webpack
├── .babelrc             # Configuración de Babel
├── package.json
└── README.md
```

---

## 🚀 Instalación y uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) v16 o superior
- npm v8 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/usuario/miguitas.git
cd miguitas

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Generar build para producción
npm run build
```

---

## 📜 Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia webpack-dev-server con hot reload en `localhost:3000` |
| `npm run build` | Genera el bundle optimizado en la carpeta `/dist` |
| `npm run watch` | Observa cambios y recompila automáticamente |

---

## ⚙️ Configuración de Webpack

El archivo `webpack.config.js` incluye:

- **Entry point**: `src/js/index.js`
- **Output**: `dist/bundle.js`
- **Modo desarrollo/producción** según la variable `NODE_ENV`
- **Source maps** habilitados en desarrollo
- **Optimización** con TerserPlugin en producción

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un **fork** del repositorio
2. Crea una nueva rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: agrega nueva funcionalidad'`
4. Sube los cambios: `git push origin feature/nueva-funcionalidad`
5. Abre un **Pull Request**

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">Hecho con ❤️ y mucha azúcar 🍬</p>
