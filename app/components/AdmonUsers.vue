<template>
  <section class="flex justify-center container items-center">
    <div class="w-full max-w-5xl">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h3 class="text-2xl text-black">Gestión de usuarios</h3>
          <p class="text-xs text-black uppercase tracking-widest mt-1">
            Elimina usuarios registrados
          </p>
        </div>
      </div>

      <div class="bg-white border border-black-100 overflow-hidden">
        <div class="overflow-x-auto w-full border border-gray-200 shadow-sm">
          <table class="w-full text-left">
            <thead class="bg-black border-b border-black-100">
              <tr>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Nombre
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Email
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Dni
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Domicilio
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Zipcode
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Provincia
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Rol
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest text-right"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-black-100">
              <tr
                v-for="user in usuarios"
                :key="user.id"
                class="hover:bg-black-50 transition-colors"
              >
                <td class="p-4">
                  <p
                    class="text-sm font-bold uppercase tracking-tight text-black"
                  >
                    {{ user.nombre }}
                  </p>
                </td>
                <td class="p-4">
                  <p
                    class="text-sm font-bold uppercase tracking-tight text-black"
                  >
                    {{ user.email }}
                  </p>
                </td>
                <td class="p-4">
                  <p
                    class="text-sm font-bold uppercase tracking-tight text-black"
                  >
                    {{ user.dni }}
                  </p>
                </td>
                <td
                  class="text-sm font-bold uppercase tracking-tight text-black"
                >
                  {{ user.domicilio }}
                </td>
                <td
                  class="text-sm font-bold uppercase tracking-tight text-black"
                >
                  {{ user.zipcode }}
                </td>
                <td class="text-sm font-bold uppercase tracking-tight text-black">
                  {{ user.nombre_provincia }}
                </td>
                <td class="text-sm font-bold uppercase tracking-tight text-black">{{ user.rol }}</td>
                <td class="p-4 text-right">
                  <button
                    @click="eliminarUser(user)"
                    class="bg-red-500 text-white px-3 py-1.5 text-[9px] font-bold uppercase hover:bg-black"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const usuarios = ref([]);


// Se define la funcion para obtener los usuarios
const obtenerUsuarios = async () => {
  try {
    const data = await $fetch("/api/buscar-todos-usuarios", {
      method: "GET",
    });

    usuarios.value = data;
  } catch (error) {
    alert("No se pudieron cargar los usuarios");
  } finally {
  }
};
obtenerUsuarios();

// Se define la función para dar la orden de eliminar un usuario

const eliminarUser = async (user) => {
  if (user.rol === 'admon') {
    alert("Error: No se pueden eliminar usuarios con el rol de Administrador.");

  }

  else {
  try {
    await $fetch("/api/eliminar-usuario", {
      method: "DELETE",
      query: { id: user.id },
    });

    alert("Usuario eliminado correctamente");

    obtenerUsuarios();
  } catch (error) {
    console.error("Error al eliminar:", error);
    alert(error.data?.message || "No se pudo eliminar el usuario");
  }
  }

};
</script>
