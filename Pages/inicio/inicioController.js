// inicio/controller.js
import { cardComponents } from "../../Components/card.js";
import { API } from '../../Api/api.js';
import { NavBar } from "../../Components/NavBar.js";
import { getData, setData } from "../../Utils/localstorageController.js";

let cardContainer=document.getElementById('card-container')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')
let navContainer = document.querySelector('header')
/************************************************* */
window.addEventListener('load',() => {
  navContainer.innerHTML=NavBar

    //title.textContent=`Bienvenido a ${pageName}`
    document.title=pageName
    
    fetch(`${API}/productos`) // Pides los datos a tu backend
  .then(res => res.json())
  .then(data => {
        const cards = data.map(e =>
                cardComponents(e.id,e.imagen, e.titulo, e.descripcion, e.precio)
        ).join('');
    cardContainer.innerHTML = cards;
  });
})

cardContainer.addEventListener('click', (e) => {
 const boton = e.target.closest('.btn-comprar');
    if (!boton) return;

    // Los data-attributes siguen funcionando igual, ¡perfecto!
    const id = boton.dataset.id;
    const nombre = boton.dataset.nombre;
    const imagen = boton.dataset.imagen;
    const texto = boton.dataset.texto;
    const precio = parseFloat(boton.dataset.precio);

    // 2. ✨ AQUÍ ESTÁ EL CAMBIO CLAVE ✨
    // Primero, encontramos el contenedor principal de la tarjeta...
    const card = boton.closest('.bg-white'); 
    
    // ...y LUEGO, buscamos el input DENTRO de esa tarjeta.
    const inputCantidad = card.querySelector('input[type="number"]');
    
    // Si no se encuentra el input, evitamos un error
    if (!inputCantidad) {
        console.error('No se encontró el input de cantidad para esta tarjeta.');
        return;
    }

    const cantidad = parseInt(inputCantidad.value) || 1;

    // El resto de la lógica no cambia
    const producto = { id, nombre, imagen, texto, precio, cantidad };
    agregarAlCarrito(producto);
})

function agregarAlCarrito(producto) {
  let carrito = getData('carrito') || []

  const index = carrito.findIndex(p => p.id === producto.id)
  if (index !== -1) {
    carrito[index].cantidad += producto.cantidad
  } else {
    carrito.push(producto)
  }

  setData('carrito', carrito)
 
}

