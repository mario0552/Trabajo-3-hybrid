## El problema

Conseguir una batería HV, un inversor o un motor eléctrico para un híbrido suele implicar recorrer foros, talleres y vendedores sin stock visible ni precios claros. Los talleres pierden tiempo y los dueños no saben si la pieza que necesitan existe.

## La solución

Hybrid Parts es una tienda online especializada: un catálogo claro de componentes para híbridos, con precio, categoría y stock a la vista, y un panel donde el equipo mantiene el inventario al día.

## Qué incluye este MVP

**Para quien compra**

- Catálogo de 50 productos en 5 categorías: baterías, motores, inversores y convertidores, cables y conectores de alto voltaje, y refrigeración de batería.
- Búsqueda por nombre y filtro por categoría, en tiempo real.
- Ficha de cada producto con precio, categoría, stock y descripción.
- Registro e inicio de sesión, con sesión que se mantiene al recargar.
- Carrito de compras.

**Para quien administra**

- Gestión de stock: alta, edición y baja de productos, con validación de datos y de código único por producto.
- Gestión de usuarios: lista de registrados y baja de cuentas.
- Acceso restringido por rol: solo los administradores entran al panel.

## Pruébalo

Para entrar al panel de administración con la demo:

|                |                         |
| -------------- | ----------------------- |
| **Email**      | `admin@hybridparts.com` |
| **Contraseña** | `Admin1234`             |

Cualquier persona puede, además, crear una cuenta desde "Crear cuenta" y navegar como usuario común.

## Empezar

```bash
git clone https://github.com/mario0552/Trabajo-3-hybrid.git
cd Trabajo-3-hybrid
npm install
npm run dev
```

Se abre en `http://localhost:5173`. Para la versión de producción: `npm run build`.

## Cómo está hecho

|                      |                                   |
| -------------------- | --------------------------------- |
| Interfaz             | React 19                          |
| Herramienta de build | Vite                              |
| Navegación           | React Router 7                    |
| Estilos              | Tailwind CSS 4, diseño responsive |
| Datos                | LocalStorage del navegador        |
| Publicación          | Vercel                            |

```
src/
├── components/   Piezas reutilizables (Navbar, ProductCard, Modal, Button...)
├── context/      Estado global de productos y carrito
├── data/         Catálogo y usuario administrador iniciales
├── pages/        Una pantalla por ruta
└── utils/        Autenticación y validaciones
```

## Alcance y limitaciones

Este es un MVP pensado para validar la experiencia de compra y de administración, sin servidor:

- Los datos viven en el `localStorage` de cada navegador: los cambios que hace un administrador no se ven en otros dispositivos.
- La autenticación es simulada y las contraseñas se guardan sin cifrar.
- El carrito no incluye pago ni confirmación de pedido.

Para volver al estado inicial, se pueden borrar las claves `hp_products`, `hp_users` y `user` desde las herramientas del navegador.

## Próximos pasos

- [ ] Backend con base de datos para compartir el inventario entre dispositivos.
- [ ] Autenticación real, con contraseñas cifradas.
- [ ] Checkout con medios de pago y gestión de pedidos.
- [ ] Subida de imágenes de producto, en lugar de URLs externas.
- [ ] Control de stock automático al concretar una compra.

## Contribuir

El trabajo se organiza con un tablero en Trello y ramas por tarea:

1. Crear una rama desde `dev`: `feature/nombre-de-la-tarea`.
2. Abrir un Pull Request a `dev` y pedir la revisión de otra persona.
3. `main` es la rama que se publica, y recibe solo versiones completas de `dev`.

## Equipo

COMPLETAR: nombre y rol de cada integrante.
