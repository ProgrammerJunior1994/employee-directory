# Employee Directory

Aplicación sencilla desarrollada con React y Vite para mostrar una lista de usuarios obtenidos desde la API Random User.

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

Abre en el navegador la dirección que indique Vite, normalmente `http://localhost:5173`.

## Compilar

```bash
npm run build
```

## Funcionalidades

- Consulta de 10 usuarios desde Random User API.
- Estado de carga.
- Mensaje cuando la lista está vacía.
- Tarjetas con nombre, correo, teléfono y país.
- Avatar generado con las iniciales del usuario.
- Diseño responsive.

## Estructura

```text
employee-directory/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── Usuarios.jsx
    └── main.jsx
```

**Nota:** Random User no proporciona información de empresas. Para completar el campo solicitado, se muestra el país del usuario bajo la etiqueta “Empresa”.
