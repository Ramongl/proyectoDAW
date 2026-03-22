<template>
  <section class="flex justify-center container items-center">
    <div class="w-full max-w-5xl">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h3 class="text-2xl text-black">Gestión de Productos</h3>
          <p class="text-xs text-black uppercase tracking-widest mt-1">
            Añade, edita o elimina artículos del catálogo
          </p>
        </div>
      </div>
      <div class="flex justify-items-start container items-center pb-5 gap-10">
        <div class="grid justify-items-center w-full">
          <div class="flex-1 max-w-2xl mx-10">
            <input
              type="text"
              placeholder="Buscar..."
              class="md:w-[500px] sm:flex-grow sm:max-w-2xl border border-gray-300 p-3 rounded-full text-sm focus:outline-none focus:border-rose-400"
            />
          </div>
        </div>
        <button
          class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
        >
          Buscar
        </button>
        <button
          class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
        >
          + Nuevo Producto
        </button>
      </div>
      <div class="bg-white border border-black-100 overflow-hidden">
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
                Precio
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
              v-for="i in 10"
              :key="i"
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
                  Serum Radiance
                </p>
              </td>
              <td class="p-4">
                <p
                  class="text-sm font-bold uppercase tracking-tight text-black"
                >
                  Marca
                </p>
              </td>
              <td class="p-4 text-[11px] text-black-500 uppercase">
                Cosmética
              </td>
              <td class="p-4 text-sm font-medium">45,00 €</td>
              <td class="p-4 text-right">
                <div class="flex justify-end gap-2">
                  <button
                    class="bg-amber-500 text-white px-3 py-1.5 text-[9px] font-bold uppercase hover:bg-black"
                  >
                    Editar
                  </button>
                  <button
                    class="bg-red-500 text-white px-3 py-1.5 text-[9px] font-bold uppercase hover:bg-black"
                  >
                    Borrar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
