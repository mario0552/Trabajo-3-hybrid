import { useState } from "react";
import { getUsers, deleteUser } from "../utils/auth";
import UserTable from "../components/Admin/UserTable";

function AdminUsers() {
  const [users, setUsers] = useState(getUsers);

  const handleDeleteUser = (user) => {
    const shouldDelete = window.confirm(
      `¿Querés eliminar al usuario "${user.nombre}"? Esta acción no se puede deshacer.`,
    );

    if (shouldDelete) {
      deleteUser(user.id);
      setUsers(getUsers());
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-bold">Gestión de usuarios</h1>
      <p className="mb-6 mt-2 text-sm text-suave">
        {users.length}{" "}
        {users.length === 1 ? "usuario registrado" : "usuarios registrados"}
      </p>

      <UserTable users={users} onDelete={handleDeleteUser} />
    </section>
  );
}

export default AdminUsers;
