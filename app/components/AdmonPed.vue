<template>
  <section class="flex justify-center container items-center">
    <div>
      <div class="mb-8">
        <h3 class="text-2xl text-black">Gestión de Pedidos</h3>
        <p class="text-xs text-black uppercase tracking-widest mt-1">
          Acepta o rechaza los pedidos entrantes
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="ped in pedidos"
          :key="ped.id"
          class="group bg-white border border-black-100 p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div class="flex gap-6 items-center">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-[10px] font-bold text-rose-400"
                  >#PEDIDO {{ ped.id }}</span
                >
                <span
                  v-if="ped.estado"
                  :class="{
                    'bg-green-100 text-green-800 border-green-200':
                      ped.estado == 'Procesado',
                    'bg-red-100 text-red-800 border-red-200':
                      ped.estado == 'Cancelado',
                  }"
                  class="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-bold uppercase"
                  >{{ ped.estado }}</span
                >
              </div>
            </div>
          </div>

          <div class="flex flex-col lg:items-end gap-1">
            <p class="text-lg font-medium text-black-900">{{ ped.total }} €</p>
            <p class="text-[10px] text-black-400 uppercase">{{ ped.fecha }}</p>
          </div>

          <div class="flex gap-2">
            <button
              v-if="ped.estado === 'Pendiente'"
              @click="actualizarEstadoPedido(ped.id, 'Procesado')"
              class="flex-1 lg:flex-none bg-green-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Aceptar
            </button>
            <button
              v-if="ped.estado === 'Pendiente'"
              @click="actualizarEstadoPedido(ped.id, 'Cancelado')"
              class="flex-1 lg:flex-none bg-red-500 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const pedidos = ref([]);

const obtenerPedidos = async () => {
  try {
    const data = await $fetch("/api/buscar-todos-pedidos", {
      method: "GET",
    });

    pedidos.value = data;
  } catch (error) {
    console.error("Error al obtener pedidos:", error);
    alert("No se pudieron cargar los pedidos");
  } finally {
  }
};
obtenerPedidos();

const actualizarEstadoPedido = async (id, nuevoEstado) => {
  try {
    await $fetch("/api/actualizar-estado", {
      method: "PATCH",
      body: {
        pedido_id: id,
        nuevo_estado: nuevoEstado,
      },
    });

    obtenerPedidos();
  } catch (error) {
    console.error("Error al cambiar estado:", error);
    alert("No se pudo cambiar el estado del pedido");
  }
};
</script>
