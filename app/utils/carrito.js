import { reactive, computed } from "vue";


// Se utiliza la libreria reactive para almacenar la lógica del carrito y que el navegador 
// esté al tanto de los cambios y los ejecute instantaneamente
export const carrito = reactive({
  productos: [],

    // Agrega productos si no lo encuenta, de lo contrario le sube uno a la cantidad

  agregar(nuevoProducto) {
    const encontrado = this.productos.find((p) => p.id === nuevoProducto.id);
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.productos.push({ ...nuevoProducto, cantidad: 1 });
    }
    
  },

  // Quita el articulo

  quitar(id) {
    this.productos = this.productos.filter((p) => p.id !== id);
  },

  // Suma una unidad a la cantidad del articulo
  anadir(id) {
    const producto = this.productos.find((p) => p.id === id);
    if (producto) {
      producto.cantidad++;
    }
  },

  // Reduce una unidad a la cantidad del articulo, si la cantidad llega a 0, se quita
  reducir(id) {
    const producto = this.productos.find((p) => p.id === id);
    if (producto) {
      producto.cantidad--;
      if (producto.cantidad <= 0) {
        this.quitar(id); //
      }
    }
  },
});

// Se utiliza la libreria computed para calcular mediante un reduce el importe total del pedido

export const totalPrecio = computed(() => {
  return carrito.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
});

// Se utiliza la libreria computed para calcular mediante un reduce la cantidad total del pedido

export const totalCantidades = computed(() => {
  return carrito.productos.reduce((acc, p) => acc + p.cantidad, 0);
});
