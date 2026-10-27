import Button from "../Button";

function ProductTable({ products, onEdit, onDelete }) {
  const emptyMessage = "Todavía no hay productos. Agregá uno para comenzar.";

  return (
    <>
      {/* Celular: una tarjeta por producto */}
      <div className="space-y-3 md:hidden">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-2xl border border-borde bg-superficie/80 p-4"
          >
            <p className="font-semibold">{product.nombre}</p>
            <p className="mt-1 text-sm text-suave">
              {product.codigo} · {product.marca || "Sin marca"}
            </p>
            <p className="mt-1 text-sm text-suave">{product.categoria}</p>

            <div className="mt-3 flex items-center justify-between">
              <p className="font-semibold">
                $ {Number(product.precio).toLocaleString("es-AR")}
              </p>
              <p className="text-sm text-suave">Stock: {product.stock ?? 0}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                onClick={() => onEdit(product)}
                aria-label={`Editar ${product.nombre}`}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(product)}
                aria-label={`Eliminar ${product.nombre}`}
              >
                Eliminar
              </Button>
            </div>
          </article>
        ))}
        {products.length === 0 && (
          <p className="rounded-2xl border border-borde bg-superficie/80 px-5 py-12 text-center text-sm text-suave">
            {emptyMessage}
          </p>
        )}
      </div>

      {/* Tablet y computadora: tabla */}
      <div className="hidden overflow-hidden rounded-2xl border border-borde bg-superficie/80 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-170 divide-y divide-borde text-left">
            <thead className="bg-fondo/70">
              <tr className="text-sm text-suave">
                <th scope="col" className="px-5 py-4 font-semibold">
                  Producto
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Categoría
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Precio
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Stock
                </th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borde">
              {products.map((product) => (
                <tr key={product.id} className="transition hover:bg-fondo/40">
                  <td className="px-5 py-4">
                    <p className="font-semibold">{product.nombre}</p>
                    <p className="mt-1 text-sm text-suave">
                      {product.codigo} · {product.marca || "Sin marca"}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-sm">{product.categoria}</td>
                  <td className="px-5 py-4 font-semibold">
                    $ {Number(product.precio).toLocaleString("es-AR")}
                  </td>
                  <td className="px-5 py-4 text-sm">{product.stock ?? 0}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => onEdit(product)}
                        aria-label={`Editar ${product.nombre}`}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => onDelete(product)}
                        aria-label={`Eliminar ${product.nombre}`}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-sm text-suave"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductTable;
