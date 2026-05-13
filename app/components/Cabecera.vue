<template>
  <header
    class="w-full border-b border-gray-200 shadow-2xs bg-white sticky top-0 z-1"
  >
    <div class="max-w-3x2 mx-auto px-10">
      <div class="flex items-center justify-between h-20 font-bold">
        <div class="flex items-center gap-8">
          <button class="md:hidden" @click="menuMovil = !menuMovil">☰</button>
        </div>
        <div class="flex justify-center">
          <NuxtLink to="/"><img src="/assets/imagenes/logo.png" /></NuxtLink>
        </div>

        <div class="flex items-center gap-4 md md:gap-7">
          <div>
            <NuxtLink
              v-if="estado == 0"
              to="/cuenta"
              class="relative hover:text-rose-500"
              >👤</NuxtLink
            >
            <span v-if="estado == 1"> {{ authCookie.nombre }}</span>
            <NuxtLink
              v-if="estado == 1"
              to="/"
              @click="borrarCookie"
              class="relative hover:text-rose-500"
            >
              (Salir)</NuxtLink
            >
            <NuxtLink
              v-if="admonCheck"
              to="/administracion"
              class="relative hover:text-rose-500"
            >
              (Panel Admin.)</NuxtLink
            >
          </div>
          <NuxtLink to="/carrito" class="relative hover:text-rose-500">
            🛒
            <span
              class="absolute -bottom-2 -left-2 bg-pink-500 text-white text-xs rounded-full px-1"
            >
              {{ totalCantidades }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      v-if="menuMovil"
      class="md:hidden bg-white border-t px-4 py-4 space-y-3 z-10"
    >
      <NuxtLink
        to="/cosmetica"
        class="block font-bold text-black-400 hover:text-rose-500 uppercase"
        >Cosmética</NuxtLink
      >
      <NuxtLink
        to="/maquillaje"
        class="block font-bold text-black-400 hover:text-rose-500 uppercase"
        >Maquillaje</NuxtLink
      >
      <NuxtLink
        to="/perfumes"
        class="block font-bold text-black-400 hover:text-rose-500 uppercase"
        >Perfumes</NuxtLink
      >
      <NuxtLink
        to="/cabello"
        class="block font-bold text-black-400 hover:text-rose-500 uppercase"
        >Cabello</NuxtLink
      >
      <NuxtLink
        to="/higiene"
        class="block font-bold text-black-400 hover:text-rose-500 uppercase"
        >Higiene</NuxtLink
      >
    </div>
  </header>
  <div
    class="w-full border-b border-gray-200 shadow-2xs bg-white sticky top-20 z-1"
  >
    <nav class="hidden md:flex border-b border-gray-200 shadow-2xs py-5">
      <div class="text-xl md:flex font-bold gap-20 mx-auto justify-center">
        <NuxtLink
          to="/cosmetica"
          class="text-black-400 hover:text-rose-500 uppercase"
          >Cosmética</NuxtLink
        >
        <NuxtLink
          to="/maquillaje"
          class="text-black-400 hover:text-rose-500 uppercase"
          >Maquillaje</NuxtLink
        >
        <NuxtLink
          to="/perfumes"
          class="text-black-400 hover:text-rose-500 uppercase"
          >Perfumes</NuxtLink
        >
        <NuxtLink
          to="/cabello"
          class="text-black-400 hover:text-rose-500 uppercase"
          >Cabello</NuxtLink
        >
        <NuxtLink
          to="/higiene"
          class="text-black-400 hover:text-rose-500 uppercase"
          >Higiene</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
// Se importa la variable creada en carrito.js para visualizar la cantidad de elementos que hay en
// el carrito
import { totalCantidades } from '../utils/carrito'


// Se define variable para desplegar el menu en la vista moviñ
const menuMovil = ref(false);

// Se define la cookie

const authCookie = useCookie("auth_user");

// Se declara variable para ver si el usuario logeado es admon o no
const admonCheck = ref(false);
var estado = 0;

// Se declara funcion para revisar la cookie y mirar si es admon o no
const mirarCookie = () => {
  if (authCookie.value) {
    estado = 1;
    if (authCookie.value.rol == "admon") {
      admonCheck.value= true;
    } else {
      admonCheck.value = false;
    }
  } else {
    estado = 0;
  }
};
// Funcion para borrar la cookie y desloguear
const borrarCookie = () => {
  authCookie.value = null;
  estado = 0;
  admonCheck.value = false;
  mirarCookie();
};

mirarCookie();
</script>
