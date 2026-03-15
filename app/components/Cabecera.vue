
<template>
  <header
    class="w-full border-b border-gray-200 shadow-2xs bg-white sticky top-0 z-1"
  >
    
    
    <div class="max-w-3x2 mx-auto px-10">
      <div class="flex items-center justify-between h-20 font-bold">
        
        <div class="flex items-center gap-8">
          <button class="md:hidden" @click="mobileMenu = !mobileMenu">
            ☰
          </button>
        </div>
        <div class="flex-1 max-w-2xl mx-10">
          <input
            type="text"
            placeholder="Buscar..."
            class="w-full rounded-full border border-gray-300 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
       
        <div class="flex items-center gap-4 md md:gap-7 ">
          <NuxtLink to="/cuenta" class="relative hover:text-rose-300">👤</NuxtLink>
          <NuxtLink to="/carrito" class="relative hover:text-rose-300">
            🛒
            <span
              class="absolute -bottom-2 -left-2 bg-pink-500 text-white text-xs rounded-full px-1"
            >
              0
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenu"
      class="md:hidden bg-white border-t px-4 py-4 space-y-3 z-10"
    >
      <NuxtLink to="/cosmetica" class="block font-bold text-black-400 hover:text-rose-300 uppercase"
        >Cosmética</NuxtLink
      >
      <NuxtLink to="/maquillaje" class="block font-bold text-black-400 hover:text-rose-300 uppercase"
        >Maquillaje</NuxtLink
      >
      <NuxtLink to="/perfumes" class="block font-bold text-black-400 hover:text-rose-300 uppercase"
        >Perfumes</NuxtLink
      >
      <NuxtLink to="/cabello" class="block font-bold text-black-400 hover:text-rose-300 uppercase"
        >Cabello</NuxtLink
      >
      <NuxtLink to="/higiene" class="block font-bold text-black-400 hover:text-rose-300 uppercase"
        >Higiene</NuxtLink
      >
    </div>
  </header>
  <div class="w-full border-b border-gray-200 shadow-2xs bg-white sticky top-20 z-1">
    <nav
      class="hidden md:flex border-b border-gray-200 shadow-2xs py-5 "
    >
      <div class="text-xl md:flex font-bold gap-20 mx-auto justify-center">
        <NuxtLink to="/cosmetica" class="text-black-400 hover:text-rose-300 uppercase"
          >Cosmética</NuxtLink
        >
        <NuxtLink to="/maquillaje" class="text-black-400 hover:text-rose-300 uppercase"
          >Maquillaje</NuxtLink
        >
        <NuxtLink to="/perfumes" class="text-black-400 hover:text-rose-300 uppercase"
          >Perfumes</NuxtLink
        >
        <NuxtLink to="/cabello" class="text-black-400 hover:text-rose-300 uppercase"
          >Cabello</NuxtLink
        >
        <NuxtLink to="/higiene" class="text-black-400 hover:text-rose-300 uppercase"
          >Higiene</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const mobileMenu = ref(false);
</script>
