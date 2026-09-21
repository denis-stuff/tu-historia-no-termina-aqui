# 🌅 Tu historia no termina aquí

> Campaña web de prevención del suicidio y promoción de la salud mental en Guatemala — construida con Webpack, HTML5 y SCSS

![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?style=flat-square&logo=webpack&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/SCSS-Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/Licencia-MIT-purple?style=flat-square)

---

## 📖 Descripción

**Tu historia no termina aquí** es un sitio web informativo que busca sensibilizar sobre la salud mental y prevenir el suicidio. Ofrece información clara sobre las señales de alerta, orienta sobre cómo acompañar a alguien en crisis, desmiente mitos comunes y reúne líneas de ayuda disponibles en Guatemala.

El proyecto fue elaborado por estudiantes de 6º semestre de Psicología Industrial, en el curso de Introducción a la Psicología Clínica, y desarrollado con **Webpack** como herramienta de empaquetado, **HTML5** semántico y estilos en **SCSS**.

> ⚠️ **Aviso:** este sitio es informativo y no sustituye la atención de profesionales de la salud. Si tú o alguien cercano está en peligro inmediato, llama al **110** (PNC) o al **911**, o acude a la emergencia más cercana.

---

## ✨ Características

- 🆘 **Ayuda siempre a la vista** — Franja superior con la Línea 1582 y botón "Necesito ayuda" en la navegación
- 🔎 **Señales de alerta** — Cómo reconocerlas a tiempo y por qué preguntar con cariño no provoca el problema
- 🤝 **Cómo acompañar** — Guía sencilla para apoyar a alguien sin necesidad de ser experto
- 💡 **Mitos y realidades** — Lo que creemos frente a lo que sabemos
- 🌬️ **Pausa de respiración guiada** — Ejercicio interactivo de un minuto con un círculo animado
- 📞 **Dónde pedir ayuda** — Directorio de líneas y servicios en Guatemala, más un plan de seguridad para los momentos difíciles
- 📋 **Mensajes para compartir** — Frases de esperanza con botón para copiarlas
- 📱 **Diseño responsive** — Compatible con móviles, tablets y escritorio, con menú móvil desplegable
- ♿ **Accesibilidad** — Etiquetas ARIA, navegación por teclado y anuncios para lectores de pantalla en el ejercicio de respiración
- 🎨 **Estilos modulares en SCSS** — Paleta y tipografías (Figtree y Young Serif) definidas de forma centralizada

---

## 🧭 Secciones del sitio

| Sección | Ancla | Contenido |
|---------|-------|-----------|
| Inicio | `#inicio` | Mensaje principal y accesos rápidos a ayuda |
| Señales | `#senales` | Señales de alerta a las que prestar atención |
| Acompañar | `#acompanar` | Cómo apoyar a alguien cercano |
| Mitos | `#mitos` | Mitos y realidades sobre el suicidio |
| Cuidarnos | `#cuidarnos` | Autocuidado y ejercicio de respiración |
| Ayuda | `#ayuda` | Líneas de ayuda en Guatemala y plan de seguridad |
| Mensajes | `#mensajes` | Frases para compartir en redes y con personas cercanas |

---

## 🛠️ Tecnologías

### Core
- Webpack 5
- HTML5
- SCSS / Sass
- JavaScript ES6+

### Loaders & Plugins
- `babel-loader` — Transpilación de JavaScript moderno
- `css-loader` + `sass-loader` — Procesamiento de estilos SCSS
- `HtmlWebpackPlugin` — Generación del HTML final
- `MiniCssExtractPlugin` — Extracción de CSS a archivo separado
- `webpack-dev-server` — Servidor de desarrollo con hot reload

### Recursos externos
- [Google Fonts](https://fonts.google.com/) — Figtree y Young Serif

---

## 📁 Estructura del proyecto

```
tu-historia-no-termina-aqui/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── styles/          # Archivos SCSS
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
git clone https://github.com/usuario/tu-historia-no-termina-aqui.git
cd tu-historia-no-termina-aqui

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
- **Compilación de SCSS** a CSS y extracción a un archivo separado en producción
- **Optimización** con TerserPlugin en producción

---

## 📞 Actualizar los datos de contacto

Los números y horarios de las líneas de ayuda se encuentran en la sección `#ayuda` de `src/index.html`. Estos servicios pueden cambiar, por lo que conviene **verificarlos antes de cada publicación**.

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

<p align="center">Hecho con ❤️ para que nadie tenga que atravesar los días difíciles en soledad 🌅</p>
