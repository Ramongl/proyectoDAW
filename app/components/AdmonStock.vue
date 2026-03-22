<template>
  <div class="flex justify-center container items-center">
    <div
      class="p-4"
    >
      <div class="w-full max-w-5xl">
        <div class="flex  container items-center">
          <div>
            <h3 class="text-2xl text-black">Gestión del inventario</h3>
            <p class="text-xs text-black uppercase tracking-widest mt-1">
              Mira y añade stock
            </p>
          </div>
        </div>
        <div class="my-4">
          <div
            class="flex justify-items-start container items-center pb-5 gap-10"
          >
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
          </div>
        </div>

        <div class="flex items-center justify-between border-t pt-4">
          <div>
            <h3 class="text-sm font-bold text-gray-700 uppercase">
              Actualizar Stock
            </h3>
            <p class="text-xs text-gray-500">
              Producto: <span class="font-semibold text-gray-800"></span>
            </p>
            <p class="text-[10px] text-gray-400 italic">Stock actual: uds.</p>
          </div>

          <div class="flex items-center space-x-2">
            <input
              type="number"
              class="w-20 px-2 py-1 text-center border border-gray-300 rounded focus:ring-1 focus:ring-pink-500 outline-none"
              placeholder="0"
            />

            <button
              class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              + Añadir Stock
            </button>
          </div>
        </div>

        <p class="mt-2 text-xs text-green-600 font-medium italic"></p>
      </div>
    </div>
  </div>
</template>
