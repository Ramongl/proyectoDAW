<template>
  <div class="min-h-screen bg-gray-50 flex">
    <div class="h-full max-h-full bg-gray-900">
      <div :class="!menuMovil ? 'flex bg-gray-50' : 'flex bg-gray-90'">
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
              crearProd = false;
              admonPed = false;
              admonUsers = false;
              admonProd = true;
            "
          >
            Administración de productos
          </button>
          <button
            class="py-3 uppercase font-bold hover:text-rose-300"
            @click="
              crearProd = false;
              admonPed = false;
              admonUsers = true;
              admonProd = false;
            "
          >
            Administración de usuarios
          </button>
          <button
            class="py-3 uppercase font-bold hover:text-rose-300"
            @click="
              crearProd = false;
              admonPed = true;
              admonUsers = false;
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
            >Ir a la tienda</NuxtLink
          >
        </div>
        <div class="p-6 border-t border-zinc-800">
          <NuxtLink
            @click="borrarCookie"
            to="/"
            class="text-xl text-gray-400 hover:text-rose-300 font-semibold"
            >Salir</NuxtLink
          >
        </div>
      </aside>
    </div>
    <AdmonProd
      v-if="admonProd"
      @IrACrear="prepararNuevo"
      @editarProducto="prepararEdicion"
      
    ></AdmonProd>
    <AdmonUsers v-if="admonUsers"></AdmonUsers>
    <AdmonPed v-if="admonPed"></AdmonPed>
    <CrearProductos v-if="crearProd" :productoAEditar="productoSeleccionado" @actualizado="admonProd = true; crearProd = false" ></CrearProductos>
  </div>
</template>

<script setup>
import { ref } from "vue";
const authCookie = useCookie("auth_user");
const productoSeleccionado = ref(null);
const prepararEdicion = (prod) => {
  productoSeleccionado.value = prod;
  admonProd.value = false;
  crearProd.value = true;
};

const prepararNuevo = () => {
  productoSeleccionado.value = null;
  admonProd.value = false;
  crearProd.value = true;
};

const mirarCookie = () => {
  if (authCookie.value) {
    const rol = authCookie.value.rol;
    if (rol === "admon") {
    } else if (rol === "user") {
      navigateTo("/");
    }
  } else {
    navigateTo("/");
  }
};
const borrarCookie = () => {
  authCookie.value = null;
  mirarCookie();
};
mirarCookie();

const menuMovil = ref(true);
const admonProd = ref(false);
const admonUsers = ref(false);
const admonPed = ref(false);
const crearProd = ref(false);
</script>
