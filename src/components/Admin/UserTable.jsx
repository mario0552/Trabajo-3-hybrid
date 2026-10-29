import Button from "../Button";

function UserTable({ users, onDelete }) {
  const roleLabel = (user) =>
    user.role === "admin" ? "Administrador" : "Usuario";

  return (
    <>
      {/* Celular: una tarjeta por usuario */}
      <div className="space-y-3 md:hidden">
        {users.map((user) => (
          <article
            key={user.id}
            className="rounded-2xl border border-borde bg-superficie/80 p-4"
          >
            <p className="font-semibold">{user.nombre}</p>
            <p className="mt-1 break-all text-sm text-suave">{user.email}</p>
            <p className="mt-1 text-sm text-suave">{roleLabel(user)}</p>

            <div className="mt-4">
              {user.role === "admin" ? (
                <span className="text-sm text-suave">
                  Usuario Dios - Imposible Eliminar
                </span>
              ) : (
                <Button
                  variant="danger"
                  onClick={() => onDelete(user)}
                  aria-label={`Eliminar ${user.nombre}`}
                >
                  Eliminar
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Tablet y computadora: tabla */}
      <div className="hidden overflow-hidden rounded-2xl border border-borde bg-superficie/80 md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-130 divide-y divide-borde text-left">
            <thead className="bg-fondo/70">
              <tr className="text-sm text-suave">
                <th scope="col" className="px-5 py-4 font-semibold">
                  Nombre
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Email
                </th>
                <th scope="col" className="px-5 py-4 font-semibold">
                  Rol
                </th>
                <th scope="col" className="px-5 py-4 text-right font-semibold">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-borde">
              {users.map((user) => (
                <tr key={user.id} className="transition hover:bg-fondo/40">
                  <td className="px-5 py-4 font-semibold">{user.nombre}</td>
                  <td className="px-5 py-4 text-sm">{user.email}</td>
                  <td className="px-5 py-4 text-sm">{roleLabel(user)}</td>
                  <td className="px-5 py-4">
                    <div className="flex justify-end">
                      {user.role === "admin" ? (
                        <span className="text-sm text-suave">
                          Usuario Dios - Imposible Eliminar
                        </span>
                      ) : (
                        <Button
                          variant="danger"
                          onClick={() => onDelete(user)}
                          aria-label={`Eliminar ${user.nombre}`}
                        >
                          Eliminar
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;
