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
        <form @submit.prevent="enviarRegistro" class="mt-8 space-y-6">
          <div>
            <label
              for="nombre"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Nombre Completo</label
            >
            <input
              v-model="formulario.nombre"
              @input="validarNombre"
              id="nombre"
              type="text"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm"
              placeholder="Escriba su nombre completo"
              :class="
                errores.nombre ? 'border-red-500 bg-red-300' : 'border-rose-200'
              "
            />
            <span
              v-if="errores.nombre"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="errores.nombre == 1 ? 'text-red-400' : 'text-black-400'"
            >
              Nombre con caracteres incorrectos
            </span>
          </div>
          <div>
            <label
              for="email"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Dirección de email</label
            >
            <input
              v-model="formulario.email"
              id="email"
              type="text"
              @input="validarEmail"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su dirección de email"
              :class="
                errores.email ? 'border-red-500 bg-red-300' : 'border-rose-200'
              "
            />
            <span
              v-if="errores.email"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="errores.email == 1 ? 'text-red-400' : 'text-black-400'"
            >
              Email con caracteres incorrectos
            </span>
          </div>
          <div>
            <label
              for="dni"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Documento identificativo</label
            >
            <input
              v-model="formulario.dni"
              @input="validarDNI"
              id="dni"
              type="text"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su documento identificativo"
              :class="
                errores.dni ? 'border-red-500 bg-red-300' : 'border-rose-200'
              "
            />
            <span
              v-if="errores.dni"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="errores.dni == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El DNi/NIE debe cumplir el siguiente patron: <br />
              DNI: 12345678X <br />
              NIE: X1234567X
            </span>
          </div>
          <div>
            <label
              for="domicilio"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Domicilio</label
            >
            <input
              v-model="formulario.domicilio"
              @input="validarDomicilio"
              id="domicilio"
              type="text"
              required
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba la dirección de su domicilio"
              :class="
                errores.domicilio
                  ? 'border-red-500 bg-red-300'
                  : 'border-rose-200'
              "
            />
            <span
              v-if="errores.domicilio"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="
                errores.domicilio == 1 ? 'text-red-400' : 'text-black-400'
              "
            >
              El domicilio tiene una longitud incorrecta
            </span>
          </div>
          <div>
            <label
              for="zipcode"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Código postal</label
            >
            <input
              v-model="formulario.zipcode"
              id="zipcode"
              @input="validarZipCode"
              type="text"
              required
              maxlength="5"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su código postal"
              :class="
                errores.zipcode
                  ? 'border-red-500 bg-red-300'
                  : 'border-rose-200'
              "
            />
            <span
              v-if="errores.zipcode"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="errores.zipcode == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El código postal debe contener 5 dígitos comprendidos entre
              01000-52999
            </span>
          </div>
          <div>
            <label
              for="password"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Contraseña</label
            >
            <input
              v-model="formulario.password"
              id="password"
              @input="validarPassword"
              type="password"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Escriba su contraseña"
              :class="
                errores.password
                  ? 'border-red-500 bg-red-300'
                  : 'border-rose-200'
              "
            />
            <ul>
              <li
                :class="
                  formulario.password.length >= 8 ? 'hidden' : 'text-red-400'
                "
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 8 caracteres
              </li>
              <li
                :class="
                  /[A-Z]/.test(formulario.password) ? 'hidden' : 'text-red-400'
                "
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 letra mayúscula
              </li>
              <li
                :class="
                  /[a-z]/.test(formulario.password) ? 'hidden' : 'text-red-400'
                "
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 letra minúscula
              </li>
              <li
                :class="
                  /[0-9]/.test(formulario.password) ? 'hidden' : 'text-red-400'
                "
                class="text-[10px] uppercase tracking-widest text-red-400 font-semibold m-2"
              >
                Mínimo 1 dígito
              </li>
            </ul>
            <span
              v-if="errores.password"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="errores.password == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El formato de la contraseña no es correcto
            </span>
          </div>

          <div>
            <label
              for="password2"
              class="text-[15px] uppercase tracking-widest text-black-400 font-bold mb-1"
              >Repita su contraseña</label
            >
            <input
              v-model="formulario.password2"
              id="password2"
              type="password"
              class="relative w-full px-3 py-3 border-b border-rose-200 placeholder-gray-300 hover:border-rose-500 sm:text-sm focus:border-rose-500"
              placeholder="Vuelva a escribir su contraseña"
            />

            <span
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibold m-2"
              :class="
                formulario.password == formulario.password2
                  ? 'hidden'
                  : 'text-red-400'
              "
            >
              Las contraseñas no coinciden
            </span>
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
<script setup>
// Se definen los valores del formulario que pasaran a la bbdd
const formulario = ref({
  nombre: "",
  email: "",
  dni: "",
  password: "",
  password2: "",
  domicilio: "",
  zipcode: "",
  zipId: "",
  rol: "user",
});

// Se crea una variable que acumule los errores
const errores = ref({
  zipcode: "",
  zipId: "",
  dni: "",
  nombre: "",
  email: "",
  domicilio: "",
  password: "",
});

// Validaciones
const validarZipCode = () => {
  const valor = formulario.value.zipcode;

  const regexZipCode =
    /^([1-9][0-9]{3}|0[1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3})$/;

  if (!valor) {
    errores.value.zipcode = ""; // Si está vacío, no hay error
  } else if (regexZipCode.test(valor)) {
    errores.value.zipcode = 0;
  } else {
    errores.value.zipcode = 1;
  }
};

const validarNombre = () => {
  const valor = formulario.value.nombre;

  const regexUsuario =
    /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{3,}(\s[A-Za-zÁÉÍÓÚáéíóúÑñ-]{2,})*$/;

  if (!valor) {
    errores.value.nombre = "";
  } else if (regexUsuario.test(valor)) {
    errores.value.nombre = 0;
  } else {
    errores.value.nombre = 1;
  }
};

const validarDNI = () => {
  const valor = formulario.value.dni.toUpperCase();

  const regexDni =
    /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}|[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]{1}$/;

  if (!valor) {
    errores.value.dni = "";
  } else if (regexDni.test(valor)) {
    errores.value.dni = 0;
  } else {
    errores.value.dni = 1;
  }
};

const validarEmail = () => {
  const valor = formulario.value.email;

  const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

  if (!valor) {
    errores.value.email = "";
  } else if (regexEmail.test(valor)) {
    errores.value.email = 0;
  } else {
    errores.value.email = 1;
  }
};

const validarDomicilio = () => {
  const valor = formulario.value.domicilio.trim();

  const regexDomicilio = /^.{5,255}$/;

  if (!valor) {
    errores.value.domicilio = "";
    errores.value.domicilio = 1;
  } else if (regexDomicilio.test(valor)) {
    errores.value.domicilio = 0;
  } else {
    errores.value.domicilio = 1;
  }
};

const validarPassword = () => {
  const valor = formulario.value.password.trim();

  const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])[^\s]{8,}$/;

  if (!valor) {
    errores.value.password = "";
    errores.value.password = 1;
  } else if (regexPassword.test(valor)) {
    errores.value.password = 0;
  } else {
    errores.value.password = 1;
  }
};

// Limpiar formulario
const limpiarFormulario = () => {
  formulario.value = {
    nombre: "",
    email: "",
    dni: "",
    password: "",
    password2: "",
    domicilio: "",
    zipId: "",
    zipcode: "",
  };
  errores.value = {
    zipcode: "",
    dni: "",
    nombre: "",
    email: "",
    domicilio: "",
    password: "",
  };
};

// Como se ha normalizado el codigo zip, debemos crear la variable que pasará a la BBDD y adaptarla
// ya que tienen que pasar con dos dígitos, asi que si la longitud es menor a 5, se le añade un 0 al inicio

const crearZipId = () => {
  if (formulario.value.zipcode.length == 5) {
    formulario.value.zipId = formulario.value.zipcode.slice(0, 2);
  } else if (formulario.value.zipcode.length == 4) {
    formulario.value.zipId = "0" + formulario.value.zipcode.slice(0, 1);
  }
};

// Se envia el registro a la BBDD
const enviarRegistro = async () => {
  errores.value = {
    nombre: "",
    email: "",
    domicilio: "",
    dni: "",
    zipcode: "",
    zipId: "",
    password: "",
  };
  crearZipId();
  validarNombre();
  validarEmail();
  validarDNI();
  validarDomicilio();
  validarZipCode();
  validarPassword();

  const tieneErrores = Object.values(errores.value).some(
    (error) => error === 1,
  );

  const passwordsCoinciden =
    formulario.value.password == formulario.value.password2;

  // Se revisa si hay algun error
  // Se revisa si la validacion de constraseña coincide con la contraseña original
  if (tieneErrores || !passwordsCoinciden) {
    alert("Por favor, revisa los errores en el formulario antes de enviarlo.");
  } else {
    try {
      await $fetch("/api/registrar-usuario", {
        method: "POST",
        body: formulario.value,
      });

      alert("Usuario registrado con éxito en la base de datos");
      limpiarFormulario();
    } catch (error) {
      console.error("Error en el registro:", error);
      alert(error.data?.message || "Error al registrarse");
    }
  }
};
</script>
