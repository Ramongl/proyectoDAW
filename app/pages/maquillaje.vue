<template>
  <Cabecera></Cabecera>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-serif italic mb-4">Maquillaje</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
        Encuentra tu tono perfecto. Desde bases con acabado seda hasta labiales
        mate de larga duración diseñados para realzar tu belleza natural.
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
                v-if="valorSub"
                @click="cambiadorOjos"
                :class="
                  valorSub === 'ojos'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Ojos
              </li>
              <li
                v-if="valorSub"
                @click="cambiadorLabios"
                :class="
                  valorSub === 'labios'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Labios
              </li>
              <li
                v-if="valorSub"
                @click="cambiadorRostro"
                :class="
                  valorSub === 'rostro'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Rostro
              </li>
              <li
                @click="cambiadorUnas"
                :class="
                  valorSub === 'unas'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Uñas
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <section class="flex-grow">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div v-for="prod in productos" :key="prod.id" class="group">
            <div class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
              <img
                src=""
                alt="Producto de maquillaje"
                class="w-full h-full object-contain p-6"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4">
                <BotonCompra :producto="prod"></BotonCompra>
              </div>
            </div>
            <h3 class="text-xs font-bold uppercase tracking-tighter">
              {{ prod.marca }}
            </h3>
            <p class="text-gray-500 text-[15px] mb-2">{{ prod.nombre }}</p>
            <span class="text-sm font-semibold"
              >{{ prod.precio.toString().replace(".", ",") }} €</span
            >
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref } from "vue";
const valorCat = ref("maquillaje");
const valorSub = ref("0");
const productos = ref([]);

const cambiadorOjos = () => {
  if (valorSub.value != "ojos") {
    valorSub.value = "ojos";
  } else if (valorSub.value == "ojos") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

const cambiadorLabios = () => {
  if (valorSub.value != "labios") {
    valorSub.value = "labios";
  } else if (valorSub.value == "labios") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

const cambiadorRostro = () => {
  if (valorSub.value != "rostro") {
    valorSub.value = "rostro";
  } else if (valorSub.value == "rostro") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

const cambiadorUnas = () => {
  if (valorSub.value != "unas") {
    valorSub.value = "unas";
  } else if (valorSub.value == "unas") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

const obtenerProductos = async () => {
  try {
    const data = await $fetch("/api/buscar-prod-cateysub", {
      method: "GET",
      params: {
        categoria: valorCat.value,
        sub: valorSub.value,
      },
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
