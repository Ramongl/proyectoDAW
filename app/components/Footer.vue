<template>
  <footer class="bg-white border-t border-gray-200 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="hidden md:inline">

          
        </div>

        <div>
          <h3 class="font-bold uppercase text-xs mb-6">
            Categorías
          </h3>
          <ul class="flex flex-col gap-3 text-sm text-gray-600">
            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/cosmetica">Cosmética</NuxtLink>
            </li>
            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/maquillaje">Maquillaje</NuxtLink>
            </li>
            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/perfumes">Perfumes</NuxtLink>
            </li>
            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/cabello">Cabello</NuxtLink>
            </li>

            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/higiene">Higiene</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold uppercase text-xs mb-6">
            Asistencia
          </h3>
          <ul class="flex flex-col gap-3 text-sm text-gray-600">
            <li class="hover:text-pink-500 cursor-pointer transition-colors">
              <NuxtLink to="/contacto">Contacto</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold uppercase text-xs mb-6">
            Newsletter
          </h3>
          <p class="text-sm text-gray-500 mb-4">
            Suscríbete para recibir ofertas exclusivas.
          </p>
          <div class="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Tu email..."
              class="border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-pink-300"
            />
            <button
              class="w-full bg-black text-white py-2 uppercase text-xs tracking-widest hover:bg-rose-500"
            >
              Unirse
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase"
      >
        <p>Proyecto DAW - Ramón García López</p>
      </div>
    </div>
  </footer>
</template>
