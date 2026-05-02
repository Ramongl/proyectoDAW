<template>
  <Cabecera></Cabecera>
  <div
    class="max-w-4xl mx-auto p-10 mt-10 sm:mb-90 bg-white shadow-sm border border-gray-100"
  >
    <h1 class="text-2xl font-bold mb-6 uppercase">Mi Cuenta</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <form @submit.prevent="login">
        <div class="space-y-4">
          <h2 class="font-bold uppercase text-xs tracking-widest text-gray-500">
            Iniciar Sesión
          </h2>
          <input
            v-model="formulario.email"
            type="email"
            placeholder="Email"
            class="w-full border p-2 focus:ring-1 focus:ring-pink-300 outline-none"
          />
          <input
            v-model="formulario.password"
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
      </form>
      <div class="bg-gray-50 p-6 flex flex-col justify-center">
        <p class="text-sm text-gray-600 mb-4 italic">¿Aún no eres miembro?</p>
        <button
          class="text-xs font-bold uppercase border-b border-black self-start hover:text-rose-300 hover:border-rose-500"
        >
          <NuxtLink to="/registro">Crear una cuenta</NuxtLink>
        </button>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>

const authCookie = useCookie("auth_user");


const mirarCookie = () => {
  
  if (authCookie.value) {
    const rol = authCookie.value.rol;
    if (rol === "admon") {
      navigateTo("/administracion");
    } else if (rol === "user") {
      navigateTo("/");
    }
  }
};
mirarCookie ();

const formulario = ref({
  email: "",
  password: "",
});



const login = async () => {
  try {
    const usuarioLogueado = await $fetch("/api/loguear-usuario", {
      method: "POST",
      body: formulario.value,
    });

    const authCookie = useCookie("auth_user");
    authCookie.value = usuarioLogueado;
    if (authCookie.value.rol=="admon") {
      navigateTo('/administracion')
      }
      else if(authCookie.value.rol=="user") 
      {
      navigateTo('/')
      }
  } catch (error) {
    console.error("Error en el registro:", error);
    alert(error.data?.message || "Error al registrarse");
  }
};
</script>
