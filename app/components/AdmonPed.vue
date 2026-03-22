<template>
  <section class="flex justify-center container items-center">
    <div>
      <div class="mb-8">
        <h3 class="text-2xl text-black">Gestión de Pedidos</h3>
        <p class="text-xs text-black uppercase tracking-widest mt-1">
          Acepta o rechaza los pedidos entrantes
        </p>
      </div>

      <div class="space-y-4">
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
        <div
          v-for="i in 50"
          :key="i"
          class="group bg-white border border-black-100 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div class="flex gap-6 items-center">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-bold text-rose-400"
                  >#PEDIDO-2026-00{{ i }}</span
                >
                <span
                  class="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-bold uppercase"
                  >Pendiente</span
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:items-end gap-1">
            <p class="text-lg font-medium text-black-900">Importe,00 €</p>
            <p class="text-[10px] text-black-400 uppercase">Fecha y hora</p>
          </div>

          <div class="flex gap-2">
            <button
              class="flex-1 lg:flex-none bg-green-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Aceptar
            </button>
            <button
              class="flex-1 lg:flex-none bg-red-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Rechazar
            </button>
            <div class="border"></div>
            <button
              class="flex-1 lg:flex-none bg-amber-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Ver detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
