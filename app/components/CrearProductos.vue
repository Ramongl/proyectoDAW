<template>
  <div class="flex justify-center container items-center">
    <div>
      <h1 class="text-2xl text-black" v-if="!productoAEditar">
        Añadir Producto
      </h1>
      <h1 class="text-2xl text-black" v-if="productoAEditar">
        Editar Producto
      </h1>
      <form v-if="!productoAEditar" @submit.prevent="enviarProducto">
        <div class="md:col-span-2 space-y-6">
          <h2 class="text-xs text-black uppercase tracking-widest mt-1">
            Información del Artículo
          </h2>

          <div class="space-y-4">
            <label
              for="marca"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
            >
              Marca del producto</label
            >
            <input
              @input="validarLogitudesMarca"
              v-model="formulario.marca"
              type="text"
              placeholder="Marca del producto"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            />
            <p
              v-if="errores.marca"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="errores.marca == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El campo marca excede los 255 carácteres
            </p>

            <label
              for="nombre"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
            >
              Nombre del producto</label
            >
            <input
              v-model="formulario.nombre"
              type="text"
              placeholder="Nombre del producto"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            />
            <p
              v-if="errores.nombre"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="errores.nombre == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El campo nombre excede los 255 carácteres
            </p>

            <div class="grid grid-cols-2 grid-rows-1 gap-4">
              <div class="flex flex-col space-y-1">
                <label
                  for="precio"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                >
                  Precio del producto</label
                >
                <input
                  @input="validarLogitudesPrecio"
                  v-model="formulario.precio"
                  type="text"
                  placeholder="Precio (€)"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
                />
                <p
                  v-if="errores.precio"
                  class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
                  :class="
                    errores.precio == 1 ? 'text-red-400' : 'text-black-400'
                  "
                >
                  El campo precio no cumple con el formato XXX,XX
                </p>
              </div>
              <div class="flex flex-col space-y-1">
                <label
                  for="stock"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                >
                  Stock del producto</label
                >
                <input
                  @input="validarLogitudesStock"
                  v-model="formulario.stock"
                  type="text"
                  placeholder="Cantidad de articulos en stock"
                  class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
                />
                <p
                  v-if="errores.stock"
                  class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
                  :class="
                    errores.stock == 1 ? 'text-red-400' : 'text-black-400'
                  "
                >
                  El campo stock no es un número entero
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col space-y-1">
                <label
                  for="categoria"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                  >Categoría del producto</label
                >
                <select
                  @change="eliminarSubategoria"
                  v-model="formulario.categoria"
                  placeholder="Seleccionar Categoría"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none bg-white text-gray-500"
                >
                  <option v-if="!formulario.categoria" value="">
                    Seleccionar Categoría
                  </option>
                  <option value="cosmetica">Cosmética</option>
                  <option value="maquillaje">Maquillaje</option>
                  <option value="perfumes">Perfumes</option>
                  <option value="cabello">Cabello</option>
                  <option value="higiene">Higiene</option>
                </select>
              </div>
              <div class="flex flex-col space-y-1">
                <label
                  for="subcategoria"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                  >Subcategoría del producto</label
                >
                <select
                  placeholder="Seleccionar Subcategoría"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none bg-white text-gray-500"
                  :disabled="!formulario.categoria"
                  v-model="formulario.subcategoria"
                >
                  <option v-if="!formulario.subcategoria" value="">
                    Seleccionar Sub-categoría
                  </option>
                  <option
                    v-if="formulario.categoria == 'cosmetica'"
                    value="serum"
                  >
                    Serums
                  </option>
                  <option
                    v-if="formulario.categoria == 'cosmetica'"
                    value="hidratante"
                  >
                    Cremas hidratantes
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="ojos"
                  >
                    Ojos
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="labios"
                  >
                    Labios
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="rostro"
                  >
                    Rostro
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="unas"
                  >
                    Uñas
                  </option>
                  <option
                    v-if="formulario.categoria == 'perfumes'"
                    value="mujer"
                  >
                    Perfumes de mujer
                  </option>
                  <option
                    v-if="formulario.categoria == 'perfumes'"
                    value="hombre"
                  >
                    Perfumes de hombre
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="champu"
                  >
                    Champú
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="acondicionador"
                  >
                    Acondicionador
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="tinte"
                  >
                    Tinte
                  </option>
                  <option v-if="formulario.categoria == 'higiene'" value="gel">
                    Geles y Jabones
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="corporal"
                  >
                    Cuidado Corporal
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="desodorante"
                  >
                    Desodorantes
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="manos"
                  >
                    Cuidado de Manos
                  </option>
                </select>
              </div>
            </div>
            <div class="flex flex-col space-y-1">
              <label
                for="imagen"
                class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
              >
                Imagen del producto</label
              >
              <input
                v-model="formulario.imagen"
                type="text"
                placeholder="URL de la imagen (ej: /imagenes/producto1.jpg)"
                class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
              />
            </div>
            <label
              for="descripcion"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
              >Subcategoría del producto</label
            >
            <textarea
              @input="validarLogitudesDesc"
              v-model="formulario.descripcion"
              placeholder="Descripción detallada..."
              rows="5"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            ></textarea>
            <p
              v-if="errores.descripcion"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="
                errores.descripcion == 1 ? 'text-red-400 ' : 'text-black-400'
              "
            >
              El descripcion no está comprendido entre 10 - 255 carácteres
            </p>

            <button
              class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Guardar Producto en Inventario
            </button>
          </div>
        </div>
      </form>
      <form v-if="productoAEditar" @submit.prevent="editarProducto">
        <div class="md:col-span-2 space-y-6">
          <h2 class="text-xs text-black uppercase tracking-widest mt-1">
            Información del Artículo
          </h2>

          <div class="space-y-4">
            <label
              for="marca"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
            >
              Marca del producto</label
            >
            <input
              @input="validarLogitudesMarca"
              v-model="formulario.marca"
              type="text"
              placeholder="Marca del producto"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            />
            <p
              v-if="errores.marca"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="errores.marca == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El campo marca excede los 255 carácteres
            </p>

            <label
              for="nombre"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
            >
              Nombre del producto</label
            >
            <input
              v-model="formulario.nombre"
              type="text"
              placeholder="Nombre del producto"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            />
            <p
              v-if="errores.nombre"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="errores.nombre == 1 ? 'text-red-400' : 'text-black-400'"
            >
              El campo nombre excede los 255 carácteres
            </p>

            <div class="grid grid-cols-2 grid-rows-1 gap-4">
              <div class="flex flex-col space-y-1">
                <label
                  for="precio"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                >
                  Precio del producto</label
                >
                <input
                  @input="validarLogitudesPrecio"
                  v-model="formulario.precio"
                  type="text"
                  placeholder="Precio (€)"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
                />
                <p
                  v-if="errores.precio"
                  class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
                  :class="
                    errores.precio == 1 ? 'text-red-400' : 'text-black-400'
                  "
                >
                  El campo precio no cumple con el formato XXX,XX
                </p>
              </div>
              <div class="flex flex-col space-y-1">
                <label
                  for="stock"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                >
                  Stock del producto</label
                >
                <input
                  @input="validarLogitudesStock"
                  v-model="formulario.stock"
                  type="text"
                  placeholder="Cantidad de articulos en stock"
                  class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
                />
                <p
                  v-if="errores.stock"
                  class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
                  :class="
                    errores.stock == 1 ? 'text-red-400' : 'text-black-400'
                  "
                >
                  El campo stock no es un número entero
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex flex-col space-y-1">
                <label
                  for="categoria"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                  >Categoría del producto</label
                >
                <select
                  @change="eliminarSubategoria"
                  v-model="formulario.categoria"
                  placeholder="Seleccionar Categoría"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none bg-white text-gray-500"
                >
                  <option v-if="!formulario.categoria" value="">
                    Seleccionar Categoría
                  </option>
                  <option value="cosmetica">Cosmética</option>
                  <option value="maquillaje">Maquillaje</option>
                  <option value="perfumes">Perfumes</option>
                  <option value="cabello">Cabello</option>
                  <option value="higiene">Higiene</option>
                </select>
              </div>
              <div class="flex flex-col space-y-1">
                <label
                  for="subcategoria"
                  class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
                  >Subcategoría del producto</label
                >
                <select
                  placeholder="Seleccionar Subcategoría"
                  class="border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none bg-white text-gray-500"
                  :disabled="!formulario.categoria"
                  v-model="formulario.subcategoria"
                >
                  <option v-if="!formulario.subcategoria" value="">
                    Seleccionar Sub-categoría
                  </option>
                  <option
                    v-if="formulario.categoria == 'cosmetica'"
                    value="serum"
                  >
                    Serums
                  </option>
                  <option
                    v-if="formulario.categoria == 'cosmetica'"
                    value="hidratante"
                  >
                    Cremas hidratantes
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="ojos"
                  >
                    Ojos
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="labios"
                  >
                    Labios
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="rostro"
                  >
                    Rostro
                  </option>
                  <option
                    v-if="formulario.categoria == 'maquillaje'"
                    value="unas"
                  >
                    Uñas
                  </option>
                  <option
                    v-if="formulario.categoria == 'perfumes'"
                    value="mujer"
                  >
                    Perfumes de mujer
                  </option>
                  <option
                    v-if="formulario.categoria == 'perfumes'"
                    value="hombre"
                  >
                    Perfumes de hombre
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="champu"
                  >
                    Champú
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="acondicionador"
                  >
                    Acondicionador
                  </option>
                  <option
                    v-if="formulario.categoria == 'cabello'"
                    value="tinte"
                  >
                    Tinte
                  </option>
                  <option v-if="formulario.categoria == 'higiene'" value="gel">
                    Geles y Jabones
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="corporal"
                  >
                    Cuidado Corporal
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="desodorante"
                  >
                    Desodorantes
                  </option>
                  <option
                    v-if="formulario.categoria == 'higiene'"
                    value="manos"
                  >
                    Cuidado de Manos
                  </option>
                </select>
              </div>
            </div>
            <div class="flex flex-col space-y-1">
              <label
                for="imagen"
                class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
              >
                Imagen del producto</label
              >
              <input
                v-model="formulario.imagen"
                type="text"
                placeholder="URL de la imagen (ej: /imagenes/producto1.jpg)"
                class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
              />
            </div>
            <label
              for="descripcion"
              class="text-[10px] font-bold uppercase tracking-widest leading-none text-gray-400 mb-3"
              >Subcategoría del producto</label
            >
            <textarea
              @input="validarLogitudesDesc"
              v-model="formulario.descripcion"
              placeholder="Descripción detallada..."
              rows="5"
              class="w-full border border-gray-200 p-3 focus:ring-1 focus:ring-pink-300 outline-none placeholder:text-gray-300 bg-white"
            ></textarea>

            <p
              v-if="errores.descripcion"
              class="text-[10px] uppercase tracking-widest text-black-400 font-semibol leading-none"
              :class="
                errores.descripcion == 1 ? 'text-red-400 ' : 'text-black-400'
              "
            >
              El descripcion no está comprendido entre 10 - 255 carácteres
            </p>
            <input type="hidden" v-model="formulario.id" />

            <button
              class="bg-rose-400 text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-black"
            >
              Guardar Producto en Inventario
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['actualizado'])
const props = defineProps({
  productoAEditar: {
    type: Object,
    default: null,
  },
});

onMounted(() => {
  if (props.productoAEditar) {
    formulario.value = { ...props.productoAEditar };
  }
});

const eliminarSubategoria = () => {
  formulario.value.subcategoria = "";
};

const formulario = ref({
  marca: "",
  nombre: "",
  precio: "",
  imagen: "",
  categoria: "",
  subcategoria: "",
  descripcion: "",
});

const errores = ref({
  marca: "",
  nombre: "",
  precio: "",
  imagen: "",
  categoria: "",
  subcategoria: "",
  descripcion: "",
});

const limpiarFormulario = () => {
  formulario.value = {
    marca: "",
    nombre: "",
    precio: "",
    imagen: "",
    stock: "",
    categoria: "",
    subcategoria: "",
    descripcion: "",
  };
  errores.value = {
    marca: "",
    nombre: "",
    precio: "",
    imagen: "",
    stock: "",
    categoria: "",
    subcategoria: "",
    descripcion: "",
  };
};

const validarLogitudesMarca = () => {
  const valor = formulario.value.marca.trim();

  const regexLongitud = /^.{1,255}$/;

  if (!valor) {
    errores.value.marca = "";
    errores.value.marca = 1;
  } else if (regexLongitud.test(valor)) {
    errores.value.marca = 0;
  } else {
    errores.value.marca = 1;
  }
};

const validarCategoria = () => {
  const valor = formulario.value.categoria;

  if (!valor || valor == "") {
    errores.value.categoria = 1;
  } else {
    errores.value.categoria = 0;
  }
};

const validarSubCategoria = () => {
  const valor = formulario.value.subcategoria;

  if (!valor || valor == "") {
    errores.value.subcategoria = 1;
  } else {
    errores.value.subcategoria = 0;
  }
};

const validarLogitudesNombre = () => {
  const valor = formulario.value.nombre.trim();

  const regexLongitud = /^.{1,255}$/;

  if (!valor) {
    errores.value.nombre = "";
    errores.value.nombre = 1;
  } else if (regexLongitud.test(valor)) {
    errores.value.nombre = 0;
  } else {
    errores.value.nombre = 1;
  }
};

const validarLogitudesPrecio = () => {
  const valor = formulario.value.precio;

  const regexLongitud = /^[0-9]{1,3}([.,][0-9]{1,2})?$/;

  if (parseFloat(valor) == 0) {
    errores.value.precio = "";
    errores.value.precio = 1;
  } else if (regexLongitud.test(valor)) {
    errores.value.precio = 0;
  } else {
    errores.value.precio = 1;
  }
};

const validarLogitudesStock = () => {
  const valor = formulario.value.stock;

  const regexLongitud = /^[0-9]{1,3}$/;

  if (valor == 0) {
    errores.value.stock = "";
    errores.value.stock = 1;
  } else if (regexLongitud.test(valor)) {
    errores.value.stock = 0;
  } else {
    errores.value.stock = 1;
  }
};
const validarLogitudesDesc = () => {
  const valor = formulario.value.descripcion.trim();

  const regexLongitud = /^.{10,255}$/;

  if (!valor) {
    errores.value.descripcion = "";
    errores.value.descripcion = 1;
  } else if (regexLongitud.test(valor)) {
    errores.value.descripcion = 0;
  } else {
    errores.value.descripcion = 1;
  }
};
const enviarProducto = async () => {
  const precioLimpio = formulario.value.precio.toString().replace(",", ".");
  formulario.value.precio = parseFloat(precioLimpio);
  errores.value = {
    precio: "",
    descripcion: "",
  };

  validarLogitudesMarca();
  validarLogitudesNombre();
  validarLogitudesDesc();
  validarCategoria();
  validarSubCategoria();
  validarLogitudesPrecio();
  validarLogitudesStock();

  const tieneErrores = Object.values(errores.value).some(
    (error) => error === 1,
  );

  if (tieneErrores) {
    alert("Por favor, revisa los errores en el formulario antes de enviarlo.");
  } else {
    try {
      await $fetch("/api/registrar-producto", {
        method: "POST",
        body: formulario.value,
      });

      limpiarFormulario();
    } catch (error) {
      console.error("Error en el registro:", error);
      alert(error.data?.message || "Error al registrarse");
    }
  }
};

const editarProducto = async () => {
  validarLogitudesMarca();
  validarLogitudesNombre();
  validarLogitudesDesc();
  validarCategoria();
  validarSubCategoria();
  validarLogitudesPrecio();
  validarLogitudesStock();

  const tieneErrores = Object.values(errores.value).some(
    (error) => error === 1,
  );

  if (tieneErrores) {
    alert("Revisa los campos marcados en rojo.");
    return;
  }

  try {
    await $fetch("/api/actualizar-producto", {
      method: "PUT",
      body: formulario.value,
    });

    alert("¡Producto actualizado!");
    emit('actualizado');
    
  } catch (error) {
    console.error("Error en la petición:", error);
    alert(error.data?.message || "Error al procesar la solicitud");
  }
};
</script>
