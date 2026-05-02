<template>
  <Cabecera></Cabecera>
  <div class="min-h-[65vh] bg-gray-50 p-4 md:p-8 font-sans text-black">
    <header
      class="mb-8 p-6 bg-white border border-gray-200 rounded-lg flex items-center justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold uppercase text-black">Tu Carrito</h1>
      </div>
      <NuxtLink
        to="/"
        class="text-sm font-bold text-black hover:text-rose-500 uppercase"
      >
        Volver a la tienda
      </NuxtLink>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <div
          class="px-6 py-3 bg-gray-900 rounded-t-lg border-b border-gray-800 text-white flex justify-between items-center"
        >
          <h3 class="text-xs font-bold uppercase tracking-widest">Artículos</h3>
        </div>

        <div
          v-for="item in carrito.productos"
          :key="item.id"
          class="bg-white p-5 border border-gray-200 rounded-lg flex flex-col sm:flex-row items-center gap-4"
        >
          <div class="flex items-center gap-4 flex-1">
            <div
              class="h-16 w-16 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-black text-xs"
            >
              IMG
            </div>
            <div class="flex-1">
              <p
                class="text-xs text-rose-500 uppercase font-bold tracking-tighter"
              >
                {{ item.nombre }}
              </p>
              <p class="text-sm font-bold text-black">{{ item.marca }}</p>
            </div>
          </div>

          <div
            class="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end"
          >
            <div
              class="flex items-center space-x-1 bg-gray-50 p-1.5 rounded-lg border border-gray-200"
            >
              <button
                @click="carrito.reducir(item.id)"
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                -
              </button>
              <p>{{ item.cantidad }}</p>
              <button
                @click="carrito.anadir(item.id)"
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                +
              </button>
            </div>
            <p class="text-sm font-bold text-black w-20 text-right">
              {{ (item.precio * item.cantidad).toFixed(2).replace(".", ",") }} €
            </p>
            <button
              @click="carrito.quitar(item.id)"
              class="text-black hover:text-rose-500 text-sm p-1"
            >
              X
            </button>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <div
          class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden sticky top-8"
        >
          <div class="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <h3 class="text-xs font-bold text-black uppercase tracking-wider">
              Resumen de Compra
            </h3>
          </div>

          <div class="p-6 space-y-4">
            <div class="flex justify-between text-sm text-black">
              <span>Subtotal</span>
              <span class="font-medium text-black"
                >{{ (totalPrecio / 1.21).toFixed(2).replace(".", ",") }} €</span
              >
            </div>

            <div
              class="flex justify-between text-sm text-black border-b border-gray-100 pb-4"
            >
              <span>Impuestos (IVA 21%)</span>
              <span class="font-medium text-black"
                >{{
                  (totalPrecio.toFixed(2) - totalPrecio / 1.21)
                    .toFixed(2)
                    .replace(".", ",")
                }}
                €</span
              >
            </div>

            <div class="flex justify-between pt-2">
              <p
                class="text-sm font-bold text-black uppercase tracking-tighter"
              >
                Total del pedido
              </p>
              <p class="text-3xl font-extrabold text-black tracking-tight">
                {{ totalPrecio.toFixed(2).replace(".", ",") }} €
              </p>
            </div>

            <button
              class="w-full bg-black text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-rose-400 flex items-center justify-center gap-2"
              @click="finalizarCompra"
            >
              Tramitar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { carrito, totalPrecio } from "~/utils/carrito";

const authCookie = useCookie("auth_user");

const vaciarCarrito = () => {
  carrito.productos = [];
};


const finalizarCompra = async () => {
  if (!authCookie.value) {
    alert("Debes iniciar sesión para comprar");
    return navigateTo("/cuenta");
  }
  

  try {
    const respuesta = await $fetch("/api/confirmar-pedido", {
      method: "POST",
      body: {
        usuario_id: authCookie.value.id, 
        productos: carrito.productos,
        total: totalPrecio.value
      }
    });

    alert("¡Gracias por tu compra! Pedido nº: " + respuesta.pedidoId);

    
    navigateTo("/");
    vaciarCarrito();

  } catch (error) {
    alert("Hubo un error al procesar el pedido");
  }
};
</script>
