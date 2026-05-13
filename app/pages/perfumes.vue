<template>
  <Cabecera></Cabecera>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-serif italic mb-4">Perfumes</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm tracking-wide">
        Descubre esencias creadas por maestros perfumistas, desde extractos
        florales del sur de Francia hasta maderas preciosas de Oriente.
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
                @click="cambiadorMujer"
                :class="
                  valorSub === 'mujer'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
              >
                Perfumes de mujer
              </li>
              <li
                class="flex justify-between items-center hover:text-pink-500 cursor-pointer"
                @click="cambiadorHombre"
                :class="
                  valorSub === 'hombre'
                    ? 'text-rose-500 font-bold'
                    : 'text-gray-600'
                "
              >
                Perfumes de hombre
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
                alt="Producto de perfumería"
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

// Se pasan los valores por defecto para realizar la consulta a la bbdd


const valorCat = ref("perfumes");
const valorSub = ref("0");
const productos = ref([]);

// Se definen los cambiadores de subcategorias

const cambiadorMujer = () => {
  if (valorSub.value != "mujer") {
    valorSub.value = "mujer";
  } else if (valorSub.value == "mujer") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

const cambiadorHombre = () => {
  if (valorSub.value != "hombre") {
    valorSub.value = "hombre";
  } else if (valorSub.value == "hombre") {
    valorSub.value = "0";
  }
  obtenerProductos();
};

// Se define y se lanza la petición a la BBDD

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
