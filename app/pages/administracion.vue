<template>
  <div class="min-h-screen bg-gray-50 flex">
    <div class="h-full max-h-full bg-gray-900">
      <div  :class="!menuMovil ? 'flex bg-gray-50': 'flex bg-gray-90'">
        <button
          class="md:hidden bg-gray-900 m-5 text-white w-10 h-10 justify-center items-center border border-gray-700 rounded hover:bg-gray-800"
          @click="menuMovil = !menuMovil"
        >
          ☰
        </button>
      </div>

      <aside
        v-if="menuMovil"
        class="w-64 bg-gray-900 text-white flex flex-col sticky top-0 h-screen"
      >
        <div class="p-6 border-b border-gray-800">
          <h2 class="text-xl uppercase">Barra de acciones</h2>
          <p class="text-[15px] text-zinc-500 uppercase tracking-widest mt-1">
            Proyecto DAW e-shop
          </p>
        </div>
        <nav class="flex-grow p-6 flex flex-col space-y-5">
          <button
            class="py-3 uppercase font-bold hover:text-rose-300"
            @click="
              admonProd = true;
              admonStock = false;
              admonPed = false;
            "
          >
            Administración de productos
          </button>
          <button
            class="py-3 uppercase font-bold hover:text-rose-300"
            @click="
              admonStock = true;
              admonProd = false;
              admonPed = false;
            "
          >
            Añadir y ver inventario
          </button>
          <button
            class="py-3 uppercase font-bold hover:text-rose-300"
            @click="
              admonPed = true;
              admonStock = false;
              admonProd = false;
            "
          >
            Administración de pedidos
          </button>
        </nav>
        <div class="p-6 border-t border-zinc-800">
          <NuxtLink
            to="/"
            class="text-xl text-gray-400 hover:text-rose-300 font-semibold"
            >Salir</NuxtLink
          >
        </div>
      </aside>
    </div>
    <AdmonProd v-if="admonProd"></AdmonProd>
    <AdmonStock v-if="admonStock"></AdmonStock>
    <AdmonPed v-if="admonPed"></AdmonPed>
  </div>
</template>

<script setup>
import { ref } from "vue";
const menuMovil = ref(true);
const admonProd = ref(false);
const admonStock = ref(false);
const admonPed = ref(false);
</script>
