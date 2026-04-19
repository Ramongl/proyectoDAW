<template>
  <div class="p-6 md:p-10 bg-gray-50">
    <h2 class="text-3xl mb-10 text-center text-gray-800 font-bold">
      Productos Destacados
    </h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="prod in productos"
        :key="prod.id"
        class="bg-white border border-gray-200 flex flex-col items-center p-4 shadow-sm"
      >
        
          <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
            <img
              src=""
              alt="Producto de cosmética"
              class="w-full h-full object-contain p-15"
            />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <BotonCompra :producto="prod"></BotonCompra>
                
            
            </div>
          </div>
          <h3
            class="text-xs font-bold uppercase tracking-tighter hover:text-pink-500"
          >
            {{ prod.marca }}
          </h3>
          <p class="text-gray-500 text-[15px] mb-2"> {{ prod.nombre }} </p>
          <span class="text-s font-semibold"> {{ String(prod.precio).replace('.', ',') }} €</span>
        </div>
      </div>
    
  </div>
</template>
<script setup>
import { ref } from "vue";
const productos = ref([]);



const obtenerProductos = async () => {
  try {
    const data = await $fetch("/api/productos-destacados", {
      method: "GET",
      
    });

    productos.value = data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    alert("No se pudieron cargar los productos");
  } finally {
  }
};
obtenerProductos();
</script>