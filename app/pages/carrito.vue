<template>
  <Cabecera></Cabecera>
  <div class="min-h-[65vh] bg-gray-50 p-4 md:p-8 font-sans text-black">
    <header
      class="mb-8 p-6 bg-white border border-gray-200 rounded-lg flex items-center justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold uppercase text-black">
          Tu Carrito
        </h1>
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
          <h3 class="text-xs font-bold uppercase tracking-widest">
            Artículos
          </h3>

        </div>

        <div
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
                Sérum Facial
              </p>
              <p class="text-sm font-bold text-black">
                Sérum Facial 
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end"
          >
            <div
              class="flex items-center space-x-1 bg-gray-50 p-1.5 rounded-lg border border-gray-200"
            >
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                -
              </button>
              <input
                type="number"
                value="1"
                class="w-10 text-center border-none bg-transparent text-sm font-bold focus:ring-0"
                readonly
              />
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                +
              </button>
            </div>
            <p class="text-sm font-bold text-black w-20 text-right">
              XX.XX €
            </p>
            <button class="text-black hover:text-rose-500 text-sm p-1">
              X
            </button>
          </div>
        </div>

        <div
          class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4 hover:border-rose-100 transition-colors"
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
                Crema Hidratante
              </p>
              <p class="text-sm font-bold text-black">
                Crema Hidratante 50ml
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end"
          >
            <div
              class="flex items-center space-x-1 bg-gray-50 p-1.5 rounded-lg border border-gray-200"
            >
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                -
              </button>
              <input
                type="number"
                value="1"
                class="w-10 text-center border-none bg-transparent text-sm font-bold focus:ring-0"
                readonly
              />
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                +
              </button>
            </div>
            <p class="text-sm font-bold text-black w-20 text-right">
              XX.XX €
            </p>
            <button class="text-black hover:text-rose-500 text-sm p-1">
              X
            </button>
          </div>
        </div>
        <div
          class="bg-white p-5 border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row items-center gap-4 hover:border-rose-100 transition-colors"
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
                Crema Hidratante
              </p>
              <p class="text-sm font-bold text-black">
                Crema Hidratante 50ml
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end"
          >
            <div
              class="flex items-center space-x-1 bg-gray-50 p-1.5 rounded-lg border border-gray-200"
            >
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                -
              </button>
              <input
                type="number"
                value="1"
                class="w-10 text-center border-none bg-transparent text-sm font-bold focus:ring-0"
                readonly
              />
              <button
                class="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded text-black hover:bg-gray-100 font-bold text-sm"
              >
                +
              </button>
            </div>
            <p class="text-sm font-bold text-black w-20 text-right">
              XX.XX €
            </p>
            <button class="text-black hover:text-rose-500 text-sm p-1">
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
            <h3
              class="text-xs font-bold text-black uppercase tracking-wider"
            >
              Resumen de Compra
            </h3>
          </div>

          <div class="p-6 space-y-4">
            <div class="flex justify-between text-sm text-black">
              <span>Subtotal</span>
              <span class="font-medium text-black">XX.XX €</span>
            </div>

            <div
              class="flex justify-between text-sm text-black border-b border-gray-100 pb-4"
            >
              <span>Impuestos (IVA 21%)</span>
              <span class="font-medium text-black">XX.XX €</span>
            </div>

            <div class="flex justify-between pt-2">
              <p
                class="text-sm font-bold text-black uppercase tracking-tighter"
              >
                Total del pedido
              </p>
              <p class="text-3xl font-extrabold text-black tracking-tight">
                XX.XX €
              </p>
            </div>

            <button
              class="w-full bg-black  text-white px-6 py-2.5 text-[10px] font-bold uppercase hover:bg-rose-400 flex items-center justify-center gap-2"
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