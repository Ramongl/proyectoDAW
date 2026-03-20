<template>
  <div>
    <Cabecera></Cabecera>
    <div
      class="min-h-screen bg-gray-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-md w-full space-y-8 bg-white p-10 shadow-sm border border-zinc-100"
      >
        <h3 class="text-[25px] uppercase text-black-400 font-bold mb-1">
          Formulario de registro
        </h3>
        <form class="mt-8 space-y-6">
          <div>
            <label
              for="nombre"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Nombre Completo</label
            >
            <input
              id="nombre"
              type="text"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm"
              placeholder="Escriba su nombre completo"
            />
          </div>
          <div>
            <label
              for="email"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Dirección de email</label
            >
            <input
              id="email"
              type="email"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su dirección de email"
            />
          </div>
          <div>
            <label
              for="dni"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Documento identificativo (opcional)</label
            >
            <input
              id="dni"
              type="text"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su documento identificativo"
            />
          </div>
          <div>
            <label
              for="domicilio"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Domicilio</label
            >
            <input
              id="domicilio"
              type="text"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba la dirección de su domicilio"
            />
          </div>
          <div>
            <label
              for="zipcode"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Código postal</label
            >
            <input
              id="zipcode"
              type="number"
              maxlength="5"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su código postal"
            />
          </div>
          <div>
            <label
              for="poblacion"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Poblacion</label
            >
            <input
              id="poblacion"
              type="text"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su población"
            />
          </div>
          <div>
            <label
              for="ccaa"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Provincia</label
            >
            <input
              id="ccaa"
              type="text"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su provincia"
            />
          </div>
          <div>
            <label
              for="password"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Contraseña</label
            >
            <input
              id="password"
              type="password"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su contraseña"
            />
            <ul>
              <li
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 8 caracteres
              </li>
              <li
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 letra mayúscula
              </li>
              <li
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 letra minúscula
              </li>
              <li
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 dígito
              </li>
            </ul>
          </div>

          <div>
            <label
              for="password2"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Repita su contraseña</label
            >
            <input
              id="password2"
              type="password"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Vuelva a escribir su contraseña"
            />

            <span
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
            />
          </div>
          <div class="flex items-center">
            <input
              id="terms"
              type="checkbox"
              required
              class="h-4 w-4 text-gray-900 border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-xs text-gray-500">
              Acepto la política de privacidad y los términos de uso.
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="relative w-full flex justify-center py-4 px-4 border border-transparent text-xs font-bold uppercase tracking-[2px] text-white bg-black hover:bg-rose-300 focus:outline-none transition-all"
            >
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
