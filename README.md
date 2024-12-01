# Wallaclon
# Frontend Wallapop

## Descripción
Este proyecto consiste en desarrollar una aplicación web similar a Wallapop, centrada en el manejo de anuncios de compra y venta. **No está permitido usar librerías o frameworks de JavaScript**, pero puedes utilizar utilidades externas de CSS como Tailwind o Bootstrap para facilitar la maquetación.

El backend será simulado mediante un archivo `db.json` que contendrá datos de ejemplo para la corrección de la práctica.

---

## Requisitos Funcionales

### 1. Listado de Anuncios
- **Visualización**: Cada anuncio debe mostrar:
  - Imagen (si tiene).
  - Nombre.
  - Descripción.
  - Precio.
  - Tipo (compra o venta).
- **Estados de interfaz**:
  - Vacío: No hay anuncios disponibles.
  - Error: Fallo al cargar los anuncios.
  - Carga: Cargando anuncios desde el backend.
  - Éxito: Anuncios listos para mostrar.
- **Interacciones**:
  - Pulsar en un anuncio: Redirige al detalle del anuncio.
  - Usuario autenticado: Mostrar botón para crear un anuncio.

### 2. Detalle de Anuncio
- **Contenido**:
  - Foto (si tiene).
  - Nombre.
  - Descripción.
  - Precio.
  - Tipo (compra o venta).
- **Estados de interfaz**:
  - Vacío: Anuncio no existe.
  - Error: Fallo al cargar el anuncio.
  - Carga: Cargando datos del anuncio.
  - Éxito: Datos listos para mostrar.
- **Interacciones**:
  - Usuario autenticado y propietario: Mostrar botón para eliminar el anuncio (con confirmación previa).

### 3. Creación de Anuncio
- **Formulario**:
  - Foto (opcional).
  - Nombre (obligatorio).
  - Descripción (obligatoria).
  - Precio (obligatorio).
  - Compra/Venta (obligatorio).
- **Estados de interfaz**:
  - Error: Fallo al guardar el anuncio.
  - Carga: Guardando datos en el backend.
  - Éxito: Anuncio creado correctamente.
- **Restricción**:
  - Solo accesible para usuarios autenticados.
  - Usuarios no autenticados serán redirigidos al listado de anuncios.

### 4. Login
- **Formulario**:
  - Nombre de usuario.
  - Contraseña.
- **Función**:
  - Autenticar contra el backend para obtener un token JWT.
- **Estados de interfaz**:
  - Carga, Error y Éxito.

### 5. Registro
- Similar al login:
  - Registrar un usuario en el backend.
  - Estados de interfaz: Carga, Error y Éxito.

---

## Requisitos Opcionales
- Paginación de anuncios en el listado.
- Buscador de anuncios.
- Edición de anuncios (solo por el propietario).
- Filtrado de anuncios por tags:
  - Tags estáticos o dinámicos.

---

## Backend Simulado: API REST
Utiliza [sparrest.js](https://github.com/kasappeal/sparrest.js) basado en `json-server`.

### Configuración
1. Clona el repositorio de `sparrest.js`.
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Arranca el servidor
   ```bash
   npm start
   ```

## Endpoints Principales

### Autenticación
- POST /auth/register: Registro de usuarios (requiere username y password).
- POST /auth/login: Inicio de sesión (devuelve token JWT).

### Gestión de archivos
- POST /upload: Subida de archivos (multipart/form-data).

### Anuncios (vía JSON server)
- CRUD completo en /api/ (requiere token JWT para POST, PUT y DELETE).

Para más detalles sobre los endpoints, consulta la documentación de [json-server](https://github.com/typicode/json-server).