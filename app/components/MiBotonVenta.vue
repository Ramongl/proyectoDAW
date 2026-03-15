<script setup>
// Solo un bloque de script y una definición de props
defineProps({
  precio: {
    type: String,
    default: '0€'
  }
})
</script>

<template>
  <button class="bg-pink-200 text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-800 m-2">
    Comprar por {{ precio }}
  </button>
</template>
