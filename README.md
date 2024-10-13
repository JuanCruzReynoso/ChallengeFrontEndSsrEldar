```markdown
# Eldar Frontend SSR Challenge

Bienvenidos a mi solución del challenge, este proyecto es una aplicación web que implementa autenticación de usuarios y gestión de roles utilizando React, Material UI, y TypeScript.

## Tecnologías Utilizadas

- **React + Vite**
- **Material UI**
- **TypeScript**
- **Axios**
- **jsonplaceholder**
- **crypto-js**
- **js-cookie**

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia la aplicación**:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
src/
|-- assets/              # Archivos estáticos (favicon, imágenes, logos)
|-- components/          # Componentes reutilizables (botones, listas, formularios, alerts, popups)
|-- contexts/            # Contextos para manejo de autenticación y roles
|-- hooks/               # Hooks personalizados
|-- pages/               # Páginas de la aplicación (Login, Dashboard, Feed)
|-- providers/           # Proveedores de contexto y autenticación
|-- routes/              # Configuración de las rutas
|-- services/            # Servicios para la comunicación con APIs
|-- styles/              # Estilos globales y tema de Material UI
|-- types/               # Tipos TypeScript para datos y usuarios
|-- utils/               # Funciones utilitarias (métodos de encriptación y manejo de cookies)
|-- App.tsx              # Componente principal
|-- index.tsx            # Punto de entrada de la aplicación
```

## Funcionalidades

- **Inicio de sesión**: Los usuarios pueden ingresar sus credenciales para autenticarse.
- **Roles de usuario**: Hay dos roles: 'admin' y 'user'.
  - **User**: Puede visualizar datos.
  - **Admin**: Puede crear, editar y eliminar datos.
- **Validación de formularios**: Los campos se validan para asegurar que no estén vacíos y que las contraseñas tengan al menos 6 caracteres.
- **Protección de rutas**: Las rutas se protegen según el rol del usuario.
- **Notificaciones**: Se muestran notificaciones para operaciones exitosas o fallidas.
- **Responsividad**: La aplicación es completamente responsiva y se adapta a diferentes tamaños de pantalla.

## Credenciales de Acceso

- **Usuario Admin**:
  - **Username**: `admin`
  - **Contraseña**: `admin123`
  
- **Usuario Regular (User)**:
  - **Username**: `user`
  - **Contraseña**: `user123`

## Ejecución de Pruebas

1. Inicia la aplicación.
2. Accede a la página de inicio de sesión utilizando las credenciales proporcionadas.
3. Según el rol:
   - **Admin** podrá crear, editar y eliminar datos.
   - **User** solo podrá visualizar los datos obtenidos de la API.

## Notas

- La autenticación se maneja mediante un token JWT simulado.
- Los datos se obtienen de la API pública de [jsonplaceholder](https://jsonplaceholder.typicode.com/guide/).
- La estructura del proyecto está organizada para facilitar la escalabilidad y la reutilización de componentes.
```