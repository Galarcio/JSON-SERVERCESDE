Archivo README.md
markdown
Copy
# Aplicación de Gestión de Cursos y Docentes - Cesde

Esta es una aplicación web desarrollada para gestionar cursos y docentes en el programa Técnico Laboral como Asistente en Desarrollo de Software de Cesde. La aplicación permite a los administradores agregar, editar, eliminar y listar cursos, así como asignar docentes a cada curso.

---

## Requisitos Previos

1. **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Firebase**: Necesitas una cuenta de Firebase y un proyecto configurado en la [Firebase Console](https://console.firebase.google.com/).
3. **Git** (opcional): Para clonar el repositorio.

---

## Instalación

Sigue estos pasos para configurar y ejecutar la aplicación:

1. **Clona el repositorio** (o descarga los archivos):
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
Instala las dependencias:

bash
Copy
npm install
## Configura Firebase: ##

Crea un archivo .env en la raíz del proyecto.

Agrega la configuración de Firebase que obtuviste de la consola:

env
Copy
PORT=3000
FIREBASE_API_KEY=TU_API_KEY
FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
FIREBASE_PROJECT_ID=TU_PROJECT_ID
FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
FIREBASE_APP_ID=TU_APP_ID
Inicia la aplicación:

bash
Copy
npm start
Abre tu navegador y visita:

Copy
http://localhost:3000
### Funcionamiento de la Aplicación ###

### Gestión de Cursos ###
  Agregar un curso: Completa el formulario en la página principal y haz clic en "Agregar Curso".
  
  Listar cursos: La lista de cursos se muestra automáticamente en la página principal.
  
  Editar un curso: (Implementación pendiente en el frontend).
  
  Eliminar un curso: (Implementación pendiente en el frontend).

### Gestión de Docentes ###
  Agregar un docente: (Implementación pendiente en el frontend).
  
  Listar docentes: (Implementación pendiente en el frontend).
  
  Asignar docente a un curso: El campo "ID del docente" en el formulario de cursos permite asignar un docente existente.

#### Estructura del Proyecto ###
Copy
cesde-cursos/
├── src/
│   ├── firebase.js          # Configuración de Firebase
│   ├── server.js            # Servidor Express
│   ├── routes/              # Rutas de la API
│   │   ├── cursos.js        # Rutas para cursos
│   │   └── docentes.js      # Rutas para docentes
│   ├── controllers/         # Lógica de negocio
│   │   ├── cursosController.js
│   │   └── docentesController.js
│   ├── models/              # Modelos de datos
│   │   ├── curso.js
│   │   └── docente.js
│   ├── public/              # Archivos estáticos (HTML, CSS, JS)
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── scripts.js
├── .env                     # Variables de entorno
├── package.json             # Dependencias y scripts
└── README.md                # Documentación del proyecto
Tecnologías Utilizadas
Backend:

## Node.js

     Express
                
    Firebase Firestore (base de datos)

## Frontend:

    HTML
    
    CSS
    
    JavaScript

#####  Contribución #### 
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu feature: git checkout -b mi-feature.

Haz commit de tus cambios: git commit -m 'Agregar mi feature'.

Haz push a la rama: git push origin mi-feature.

Abre un Pull Request.
