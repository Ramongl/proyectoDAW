<template>
  <div class="min-h-screen bg-gray-50 flex">
    <aside class="w-64 bg-gray-900 text-white md:flex flex-col">
      <div class="p-6 border-b border-gray-800">
        <h2 class="text-xl uppercase">Barra de acciones</h2>
        <p class="text-[15px] text-zinc-500 uppercase tracking-widest mt-1">Proyecto DAW e-shop</p>
      </div>
      <nav class="flex-grow p-6 flex flex-col space-y-5">
        <button class="py-3 uppercase font-bold hover:text-rose-300">
          Administración de productos
        </button>
        <button class="py-3 uppercase font-bold hover:text-rose-300">
          Añadir y ver inventario
        </button>
        <button class="py-3 uppercase font-bold hover:text-rose-300">
          Administración de pedidos
        </button>
        
      </nav>
      <div class="p-6 border-t border-zinc-800">
        <NuxtLink to="/" class="text-xl text-gray-400 hover:text-rose-300 font-semibold">Salir</NuxtLink>
      </div>
    </aside>
    </div>
</template>