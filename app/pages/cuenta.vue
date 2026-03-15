<template>
  <Cabecera></Cabecera>
  <div
    class="max-w-4xl mx-auto p-10 mt-10 sm:mb-90 bg-white shadow-sm border border-gray-100"
  >
    <h1 class="text-2xl font-bold mb-6 uppercase">Mi Cuenta</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="space-y-4">
        <h2 class="font-bold uppercase text-xs tracking-widest text-gray-500">
          Iniciar Sesión
        </h2>
        <input
          type="email"
          placeholder="Email"
          class="w-full border p-2 focus:ring-1 focus:ring-pink-300 outline-none"
        />
        <input
          type="password"
          placeholder="Contraseña"
          class="w-full border p-2 focus:ring-1 focus:ring-pink-300 outline-none"
        />
        <button
          class="w-full bg-black text-white py-2 uppercase text-xs tracking-widest hover:bg-rose-300"
        >
          Entrar
        </button>
      </div>

      <div class="bg-gray-50 p-6 flex flex-col justify-center">
        <p class="text-sm text-gray-600 mb-4 italic">¿Aún no eres miembro?</p>
        <button
          class="text-xs font-bold uppercase border-b border-black self-start hover:text-rose-300 hover:border-rose-500"
        >
          Crear una cuenta
        </button>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
</script>
