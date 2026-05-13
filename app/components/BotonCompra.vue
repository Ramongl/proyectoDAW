<template>
  <button 
    @click="carrito.agregar(props.producto)"
    class="w-full bg-black text-white py-2 text-[10px] uppercase tracking-widest hover:bg-gray-700 transition-all"
  >
    Comprar
  </button>
</template>
<script setup>
// Se importa la logica del carrito para poder agregar articulos al mismo
import { carrito } from '../utils/carrito'

// Se define el prop que va a recibir que se le pasa desde el articulo en el que se hace click
const props = defineProps(['producto'])
</script>


