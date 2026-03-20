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
          class="bg-black text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-rose-400"
        >
          Buscar
        </button>
        <button
          class="bg-black text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-rose-400"
        >
          + Nuevo Producto
        </button>
      </div>


    </div>
  </section>
</template>
