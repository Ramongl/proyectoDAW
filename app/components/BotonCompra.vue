<template>
  <button 
    @click="carrito.agregar(props.producto)"
    class="w-full bg-black text-white py-2 text-[10px] uppercase tracking-widest hover:bg-gray-700 transition-all"
  >
    Comprar
  </button>
</template>
<script setup>
import { carrito } from '../utils/carrito'

const props = defineProps(['producto'])
</script>


