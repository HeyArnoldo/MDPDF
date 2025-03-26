# Proyecto de Generación de PDFs con React, Tailwind CSS y html2pdf.js

Este proyecto es un ejemplo de cómo crear una aplicación en React para **editar contenido en Markdown** (con soporte para LaTeX), **visualizar** dicho contenido en tiempo real y **exportarlo a PDF** usando la librería [html2pdf.js](https://github.com/eKoopmans/html2pdf.js). Además, se utilizan **Tailwind CSS** y componentes de [shadcn/ui](https://ui.shadcn.com) para los estilos.

## Características

- **Editor de Markdown** con soporte para LaTeX (usando `remark-math` y `rehype-katex`).
- **Vista previa** (Preview) del contenido en tiempo real.
- **Exportación a PDF** del contenido renderizado (Markdown + LaTeX).
- Estilos integrados con **Tailwind CSS** y componentes de **shadcn/ui**.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- [remark-math](https://github.com/remarkjs/remark-math)
- [rehype-katex](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight)

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. **Clona** este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/MDPDF-2.git
   cd MDPDF-2
   ```

2. **Instala** las dependencias:

   ```bash
   npm install
   ```
   o
   ```bash
   yarn
   ```

3. **Configura Tailwind CSS** si es necesario. En este proyecto ya se incluye un archivo `tailwind.config.js` y la importación en `index.css`.

## Uso

1. **Inicia** la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```
   o
   ```bash
   yarn dev
   ```

2. **Abre** [http://localhost:5173](http://localhost:5173) (o el puerto que indique la consola) en tu navegador para ver la aplicación.

3. **Escribe** tu contenido en el editor:
   - Soporta **Markdown** (con GFM).
   - Soporta **LaTeX** con la sintaxis `$...$` y `$$...$$` (o usando `\(...\)` y `\[...\]`, que son transformados automáticamente).

4. **Previsualiza** el contenido en la sección de **Preview** a la derecha.

5. **Descarga** el PDF haciendo clic en el botón “Descargar PDF”. Se generará y descargará un archivo `documento.pdf` con el contenido del preview.

## Estructura del proyecto

```bash
MDPDF-2
├── node_modules
├── public
│   ├── logo.svg
│   └── vite.svg
├── src
│   ├── components
│   │   ├── ui
│   │   │   └── button.jsx       # Componente de botón (shadcn/ui)
│   │   ├── Editor.jsx           # Editor de texto (Markdown + LaTeX)
│   │   ├── ExportPDF.jsx        # Componente para exportar a PDF
│   │   └── Preview.jsx          # Vista previa del contenido
│   ├── lib                      # (Opcional) Carpeta para utilidades o librerías
│   ├── App.jsx                  # Componente principal de la aplicación
│   ├── index.css                # Estilos globales (importación de Tailwind)
│   ├── main.jsx                 # Punto de entrada principal
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── ...
```

## Despliegue

Para crear una versión de producción:

```bash
npm run build
```
o
```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción. Luego puedes desplegar esa carpeta en tu servicio de hosting preferido.

## Personalización

- **Estilos**: Modifica las clases de Tailwind o añade tus propias clases para ajustar la apariencia de la aplicación.
- **PDF**: En el archivo `ExportPDF.jsx`, puedes modificar las opciones de [html2pdf.js](https://github.com/eKoopmans/html2pdf.js#options) (márgenes, nombre del archivo, calidad de imagen, etc.).
- **Editor**: Si deseas agregar atajos de teclado o funcionalidades avanzadas, considera librerías como [react-codemirror](https://github.com/uiwjs/react-codemirror) u otras.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras errores o deseas agregar nuevas características, abre un [issue](https://github.com/tu-usuario/MDPDF-2/issues) o envía un pull request.

## Licencia

Este proyecto se distribuye bajo la [MIT License](LICENSE). Puedes usarlo libremente para proyectos personales y comerciales.

---

¡Gracias por usar esta plantilla! Si tienes preguntas o sugerencias, no dudes en abrir un [issue](https://github.com/tu-usuario/MDPDF-2/issues).