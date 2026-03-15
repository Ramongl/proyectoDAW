<template>
  <div class="p-6 md:p-10 bg-gray-50">
    <h2 class="text-3xl mb-10 text-center text-gray-800 font-bold">Productos Destacados</h2>
    
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      
      <div v-for="n in 4" :key="n" class="bg-white border border-gray-100 flex flex-col items-center p-4 shadow-sm hover:shadow-md transition-shadow group">
        
        <div class="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-gray-100 flex items-center justify-center text-gray-400">
          
          <img 
            
            alt="Producto de Cosmética"
            class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105"
          />
          
          
        </div>
        
        <h3 class="text-sm font-semibold uppercase text-gray-900 text-center mb-1">Nombre del Producto</h3>
        <p class="text-xs text-gray-500 mb-3 text-center">Pequeña descripción del artículo</p>
        
        <div class="w-full flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span class="text-lg font-bold text-gray-900">120€</span>
          <button class="bg-gray-300 text-black font-bold text-[10px] px-4 py-2 hover:bg-rose-300 transition-colors">
            Añadir
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>
