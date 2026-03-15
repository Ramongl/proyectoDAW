<template>
  <div class="p-6 md:p-10 bg-gray-50">
    <h2 class="text-3xl mb-10 text-center text-gray-800 font-bold">
      Productos Destacados
    </h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="n in 4"
        :key="n"
        class="bg-white border border-gray-200 flex flex-col items-center p-4 shadow-sm"
      >
        
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
            <img
              src=""
              alt="Producto de cosmética"
              class="w-full h-full object-contain p-15"
            />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <BotonCompra></BotonCompra>
                
            
            </div>
          </div>
          <h3
            class="text-xs font-bold uppercase tracking-tighter hover:text-pink-500"
          >
            Destacado n.{{ n }}
          </h3>
          <p class="text-gray-500 text-[15px] mb-2">Cuidado Facial Intensivo</p>
          <span class="text-s font-semibold">45,00 €</span>
        </div>
      </div>
    
  </div>
</template>
