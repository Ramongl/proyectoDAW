import { reactive, computed } from "vue";

export const carrito = reactive({
  productos: [],


  agregar(nuevoProducto) {
    const encontrado = this.productos.find((p) => p.id === nuevoProducto.id);
    if (encontrado) {
      encontrado.cantidad++;
    } else {
      this.productos.push({ ...nuevoProducto, cantidad: 1 });
    }
    
  },

  quitar(id) {
    this.productos = this.productos.filter((p) => p.id !== id);
  },
  anadir(id) {
    const producto = this.productos.find((p) => p.id === id);
    if (producto) {
      producto.cantidad++;
    }
  },
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

export const totalPrecio = computed(() => {
  return carrito.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
});

export const totalCantidades = computed(() => {
  return carrito.productos.reduce((acc, p) => acc + p.cantidad, 0);
});
