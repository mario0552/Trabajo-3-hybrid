# Hybrid Parts Argentina

**Tienda online de repuestos para vehículos híbridos y eléctricos.**
Catálogo de 50 productos, cuentas de usuario, carrito, lista de deseos y un panel de administración para gestionar stock y usuarios.

🔗 **Sitio en vivo:** https://trabajo-3-hybrid-wkf4.vercel.app
📋 **Tablero del proyecto (Trello):** https://trello.com/b/7k8J9Jpl/404team
🎨 **Diseño (Figma):** https://www.figma.com/design/hs13J7cUfCmPHHXcjtRGx0/Hybrid?node-id=0-1&m=dev&t=QTXKPrUwS39rNqpx-1
💻 **Repositorio:** https://github.com/mario0552/Trabajo-3-hybrid

---

## El problema

Quien tiene un auto híbrido y necesita una batería de alto voltaje, un inversor o un sistema de refrigeración no encuentra un lugar claro donde ver qué hay disponible, a qué precio y para qué marca. Y quien vende estos repuestos necesita una forma simple de mantener su catálogo y su stock al día.

## La solución

Hybrid Parts es una tienda web con dos caras:

- **Para el comprador:** un catálogo fácil de recorrer, con búsqueda y filtros, ficha detallada de cada repuesto, carrito y lista de deseos.
- **Para el administrador:** un panel para dar de alta, editar y eliminar productos, controlar el stock y gestionar las cuentas de usuario.

---

## Qué incluye

### Tienda (para compradores)

| Funcionalidad           | Detalle                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Portada**             | Carrusel de promociones, beneficios de la tienda y accesos por categoría.                                                                                                 |
| **Catálogo**            | 50 productos en 5 categorías, con buscador por nombre y filtro por categoría. Los filtros quedan guardados en la URL, así que una búsqueda se puede compartir o recargar. |
| **Detalle de producto** | Imagen, código, marca, precio, descripción y stock disponible.                                                                                                            |
| **Cuenta de usuario**   | Registro e inicio de sesión con validación de campos.                                                                                                                     |
| **Carrito**             | Exclusivo para usuarios con sesión. Cada usuario tiene su propio carrito y no se puede pedir más cantidad que el stock disponible.                                        |
| **Compra**              | Confirmación de compra simulada (ver [Alcance y limitaciones](#alcance-y-limitaciones)).                                                                                  |
| **Lista de deseos**     | Marcá productos con el corazón y consultalos en `/wishlist`. Requiere sesión.                                                                                             |
| **Contacto**            | Formulario con validación.                                                                                                                                                |
| **Nosotros**            | Presentación del equipo.                                                                                                                                                  |
| **Páginas de error**    | Pantalla 404 personalizada y pantalla de "acceso no autorizado".                                                                                                          |

Los productos se dividen en: **Baterías**, **Cables y conectores de alto voltaje**, **Inversores y convertidores**, **Motores** y **Refrigeración de batería HV**.

### Panel de administración

Solo accesible con una cuenta de rol `admin`.

- **Gestión de stock** (`/admin`): crear, editar y eliminar productos. El código de producto (`HP-001`, `HP-002`, …) debe ser único. La categoría se elige de una lista para evitar duplicados por errores de tipeo.
- **Gestión de usuarios** (`/admin/usuarios`): ver y eliminar cuentas. Las cuentas de administrador están protegidas y no se pueden borrar.

### Permisos por tipo de visitante

| Visitante              | Puede                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Invitado**           | Ver portada, catálogo, detalle, nosotros y contacto. Registrarse o iniciar sesión. |
| **Usuario registrado** | Todo lo anterior + carrito, compra y lista de deseos.                              |
| **Administrador**      | Todo lo anterior + panel de stock y de usuarios.                                   |

Si alguien intenta entrar a una ruta protegida sin el permiso correspondiente, el sitio lo redirige automáticamente.

---

## Probalo en 1 minuto

Entrá a https://trabajo-3-hybrid-wkf4.vercel.app y:

1. **Como comprador:** hacé clic en _Crear cuenta_, registrate con cualquier email y una contraseña de al menos 8 caracteres, agregá productos al carrito y finalizá la compra.
2. **Como administrador:** iniciá sesión con la cuenta demo y entrá a _Gestión de stock_.

**Cuenta de administrador de prueba**

| Email                   | Contraseña  |
| ----------------------- | ----------- |
| `admin@hybridparts.com` | `Admin1234` |

---

## Cómo correr el proyecto en tu computadora

### Requisitos

- [Node.js](https://nodejs.org/) en una versión LTS reciente (20.19 o superior recomendado).
- npm (viene con Node.js).
- Git.

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/mario0552/Trabajo-3-hybrid.git

# 2. Entrar a la carpeta del proyecto
cd Trabajo-3-hybrid

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abrí en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

> Si el repositorio se descarga como `.zip`, descomprimilo, abrí una terminal dentro de la carpeta y seguí desde el paso 3.

### Comandos disponibles

| Comando           | Qué hace                                                 |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build`   | Genera la versión optimizada para producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción para probarla. |
| `npm run lint`    | Revisa el código con ESLint.                             |

### Solución de problemas

- **`npm install` falla o hay errores raros:** borrá la carpeta `node_modules` y el archivo `package-lock.json` y volvé a ejecutar `npm install`.
- **Quiero volver al estado inicial de los datos** (productos y usuarios de fábrica): abrí las herramientas de desarrollo del navegador → _Application_ → _Local Storage_ y borrá las claves `hp_products`, `hp_users` y `user`. Al recargar, la tienda se restablece.

---

## Tecnología

| Herramienta                                | Uso                                          |
| ------------------------------------------ | -------------------------------------------- |
| [React 19](https://react.dev/)             | Interfaz de usuario basada en componentes.   |
| [Vite](https://vite.dev/)                  | Servidor de desarrollo y empaquetado.        |
| [React Router 7](https://reactrouter.com/) | Navegación entre páginas y rutas protegidas. |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos y diseño responsive.                 |
| ESLint                                     | Control de calidad del código.               |
| Vercel                                     | Publicación del sitio.                       |

**Datos y estado:** la información vive en el navegador mediante `localStorage` y se comparte entre componentes con Context API (productos y carrito).

---

## Estructura del proyecto

```
src/
├── components/        Piezas reutilizables (Navbar, Footer, ProductCard,
│   │                  Button, Modal, ProtectedRoute, SearchBar, etc.)
│   └── Admin/         ProductTable, ProductForm, UserTable
├── context/           ProductsContext/Provider y CartContext/Provider
├── data/              products.json (catálogo inicial) y users.json (admin demo)
├── hooks/             useLocalStorage, useWishlist
├── pages/             Una por ruta: Home, Products, ProductDetail, Cart,
│                      Login, Register, Wishlist, Contact, AboutUs, Admin,
│                      AdminUsers, NotFound, Unauthorized
├── utils/             auth.js (sesión y usuarios), Validators.js, wishlist.js
├── assets/            Imágenes y logos
├── App.jsx            Definición de rutas
└── main.jsx           Punto de entrada y proveedores globales
```

### Mapa de rutas

| Ruta                   | Página                | Acceso             |
| ---------------------- | --------------------- | ------------------ |
| `/`                    | Portada               | Público            |
| `/productos`           | Catálogo              | Público            |
| `/product/:id`         | Detalle de producto   | Público            |
| `/login` · `/register` | Acceso y registro     | Público            |
| `/about` · `/contacto` | Nosotros y contacto   | Público            |
| `/carrito`             | Carrito               | Requiere sesión    |
| `/wishlist`            | Lista de deseos       | Requiere sesión    |
| `/admin`               | Gestión de stock      | Solo administrador |
| `/admin/usuarios`      | Gestión de usuarios   | Solo administrador |
| `/no-autorizado` · `*` | Acceso denegado y 404 | Público            |

---

## Despliegue

El sitio está publicado en **Vercel** y se actualiza automáticamente con cada cambio que se integra a la rama `main`.

Como es una aplicación de una sola página, el archivo `vercel.json` redirige todas las rutas a `index.html`; así, recargar o compartir un enlace como `/productos` no devuelve un error 404.

Para publicar tu propia copia: importá el repositorio en Vercel (detecta Vite automáticamente) y presioná _Deploy_.

---

## Alcance y limitaciones

Esta versión es un **MVP funcional**, pensado para validar la experiencia de compra y de administración. Es importante saber qué es real y qué está simulado:

- **Los datos se guardan en el navegador (`localStorage`).** No hay base de datos ni servidor: cada dispositivo ve su propia copia de los datos, y los cambios hechos por el administrador no llegan a otros usuarios.
- **La autenticación es simulada.** Sirve para demostrar los flujos de sesión y permisos, pero las contraseñas se guardan sin cifrar en el navegador. **No debe usarse con datos reales.**
- **La compra es una simulación.** Se confirma el pedido y se vacía el carrito, pero no hay pasarela de pago ni gestión de envíos, y la compra no descuenta el stock del catálogo.
- **El formulario de contacto no envía mensajes.** Valida los campos y muestra la confirmación, pero no hay servicio de correo detrás.
- **Las imágenes de productos** se cargan desde una fuente externa por URL.

## Próximos pasos

Para llevar el proyecto a producción real, la hoja de ruta natural es:

1. **Backend y base de datos** para centralizar productos, usuarios y pedidos.
2. **Autenticación real** con contraseñas cifradas y sesiones seguras.
3. **Checkout con medios de pago** y cálculo de envíos.
4. **Descuento automático de stock** al confirmar una compra y historial de pedidos.
5. **Carga de imágenes** desde el panel de administración.
6. **Envío real de mensajes** desde el formulario de contacto.

---

## Cómo contribuir

El equipo trabaja con dos ramas principales:

- `main`: versión publicada. Nadie trabaja directamente sobre ella.
- `dev`: integración del trabajo en curso.

Flujo para cada tarea:

```bash
git checkout dev
git pull
git checkout -b feature/nombre-de-la-tarea
# ... hacer cambios ...
git add .
git commit -m "feat: descripción breve del cambio"
git push -u origin feature/nombre-de-la-tarea
```

Luego se abre un _Pull Request_ hacia `dev`, se revisa y se integra. Cuando `dev` está estable, se integra a `main`.

---

## Equipo — 404TEAM

| Integrante           | Rol          |
| -------------------- | ------------ |
| Jonaiker Noriega     | Tech Leader  |
| Mario Fernando López | Scrum Master |
| William López        | Frontend     |
| Isaías Emanuel Soria | Frontend     |

El seguimiento de tareas, responsables y ramas está en el [tablero de Trello](https://trello.com/b/7k8J9Jpl/404team).

---
