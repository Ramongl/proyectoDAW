<template>
  <Cabecera></Cabecera>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-serif italic mb-4">Perfumes</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
        Descubre esencias creadas por maestros perfumistas, 
        desde extractos florales del sur de Francia hasta maderas preciosas de Oriente.
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
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Perfumes de mujer
                <p class="text-[10px] text-gray-400"></p>
              </li>
              <li
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Perfumes de hombre
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
                  alt="Perfume"
                  class="w-full h-full object-contain p-6"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <BotonCompra></BotonCompra>
              </div>
            </div>

            
            <h3 class="text-xs font-bold uppercase tracking-tighter hover:text-pink-500">Eau de Parfum para Mujer v.{{i}}</h3>
            <p class="text-gray-500 text-[15px] mb-2">Eau de Parfum para Mujer</p>
            <span class="text-sm font-semibold">60,00 €</span>
          </div>
        </div>
      </section>>
    </div>
  </div>
  <Footer></Footer>
</template>