<template>
  <section class="flex justify-center container items-center">
    <div class="w-full max-w-5xl">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h3 class="text-2xl text-black">Gestión de Productos</h3>
          <p class="text-xs text-black uppercase tracking-widest mt-1">
            Añade o edita artículos del catálogo
          </p>
        </div>
      </div>
      <div class="flex justify-items-start container items-center pb-5 gap-10">
        <button
          class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
          @click="$emit('irACrear')"
        >
          + Nuevo Producto
        </button>
      </div>
      <div class="bg-white border border-black-100 overflow-hidden">
        <div class="overflow-x-auto w-full border border-gray-200 shadow-sm">
          <table class="w-full text-left">
            <thead class="bg-black border-b border-black-100">
              <tr>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Imagen
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Producto
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Marca
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Categoría
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Sub-categoría
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Precio
                </th>
                <th
                  class="p-4 text-[10px] uppercase font-bold text-white tracking-widest"
                >
                  Stock
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
                v-for="prod in productos"
                :key="prod.id"
                class="hover:bg-black-50 transition-colors"
              >
                <td class="p-4">
                  <div
                    class="w-10 h-14 bg-black-100 border border-black-200 flex items-center justify-center text-[8px] text-black uppercase"
                  >
                    Foto
                  </div>
                </td>
                <td class="p-4">
                  <p
                    class="text-sm font-bold uppercase tracking-tight text-black"
                  >
                    {{ prod.nombre }}
                  </p>
                </td>
                <td class="p-4">
                  <p
                    class="text-sm font-bold uppercase tracking-tight text-black"
                  >
                    {{ prod.marca }}
                  </p>
                </td>
                <td class="text-sm font-bold uppercase tracking-tight text-black">
                  {{ prod.categoria }}
                </td>
                <td class="text-sm font-bold uppercase tracking-tight text-black">
                  {{ prod.subcategoria }}
                </td>
                <td class="p-4 text-sm font-medium">
                  {{ prod.precio.toString().replace(".", ",") }} €
                </td>
                <td class="p-4 text-sm font-medium">{{ prod.stock }}</td>
                <td class="p-4 text-right">
                  <div class="flex justify-end gap-2">
                    <button
                      @click="irAEditar(prod)"
                      class="bg-amber-500 text-white px-3 py-1.5 text-[9px] font-bold uppercase hover:bg-black"
                    >
                      Editar
                    </button>
                  </div>
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
const emit = defineEmits(["irACrear", "editarProducto"]);

const productos = ref([]);

const irAEditar = (prod) => {
  emit("editarProducto", prod);
};

const obtenerProductos = async () => {
  try {
    const data = await $fetch("/api/buscar-todos-productos", {
      method: "GET",
    });

    productos.value = data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    alert("No se pudieron cargar los productos");
  } finally {
  }
};
obtenerProductos();
</script>
