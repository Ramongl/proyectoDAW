

<template>
  <Cabecera></Cabecera>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-serif italic mb-4">Cosmética</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
        Descubre nuestra selección de alta gama para el cuidado de la piel. 
        Desde serums revitalizantes hasta cremas hidratantes con extractos naturales.
      </p>
    </header>

    <div class="flex flex-col lg:flex-row gap-10">
            <aside class="w-full lg:w-60 flex-shrink-0">
        <div class="sticky top-28 space-y-8">
          <div>
            <h3
              class="font-bold uppercase text-[11px] tracking-[2px] mb-5 border-b pb-2"
            >
              Subcategorías
            </h3>
            <ul class="text-sm text-gray-600 space-y-3">
              <li
                class="flex justify-between items-center hover:text-pink-500"
              >
                Serums
                <p class="text-[10px] text-gray-400"></p>
              </li>
              <li
                class="flex justify-between items-center hover:text-pink-500"
              >
                Cremas hidratantes
                <p class="text-[10px] text-gray-400"></p>
              </li>

            </ul>
          </div>
        </div>
      </aside>

      <section class="flex-grow">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="group">
            <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img 
                src="" 
                  alt="Producto de cosmética"
                  class="w-full h-full object-contain p-6"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <button class="w-full py-2 bg-rose-300 text-white text-[10px] uppercase tracking-widest">
                  Comprar
                </button>
              </div>
            </div>
            <h3 class="text-xs font-bold uppercase tracking-tighter hover:text-pink-500">Radiance Serum v.{{i}}</h3>
            <p class="text-gray-500 text-[15px] mb-2">Cuidado Facial Intensivo</p>
            <span class="text-sm font-semibold">45,00 €</span>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer></Footer>
</template>

