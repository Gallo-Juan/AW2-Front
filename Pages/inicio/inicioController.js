// inicio/controller.js
import { cardComponents } from "../../Components/card.js";
import { API } from '../../Api/api.js';
import NavBar from "../../Components/NavBar.js";
import { getData, setData } from "../../Utils/localstorageController.js";
import { removeSessionItem } from "../../Utils/sessionStorageController.js"; 

let cardContainer=document.getElementById('card-container')
let pageName=document.getElementById('pageName').value
let navContainer = document.querySelector('header')

/************************************************* */
window.addEventListener('load',() => {
  navContainer.innerHTML=NavBar

    document.title=pageName
    
    fetch(`${API}/productos/traertodos`) 
  .then(res => res.json())
  .then(data => {
        const cards = data.map(e =>
                cardComponents(e._id,e.imagen, e.titulo, e.descripcion, e.precio)
        ).join('');
    cardContainer.innerHTML = cards;
  });

  const logoutButton = document.getElementById('cerrarSesion');
    
    if (logoutButton) {
        
        logoutButton.addEventListener('click', (event) => {
            
            event.preventDefault(); 
            
           removeSessionItem('usuario')
           removeSessionItem('token')  
                        
            window.location.href = '/';
        });
    }
})

cardContainer.addEventListener('click', (e) => {
 const boton = e.target.closest('.btn-comprar');
    if (!boton) return;

     const usuario = sessionStorage.getItem('usuario');
     const token=sessionStorage.getItem('token');

    if (!usuario || !token) {
       
        alert("Debes iniciar sesión para comprar.");
        window.location.href = '../login/login.html'; 
    }

    const _id=boton.dataset._id;
    const nombre = boton.dataset.nombre;
    const imagen = boton.dataset.imagen;
    const texto = boton.dataset.texto;
    const precio = parseFloat(boton.dataset.precio);

    const card = boton.closest('.bg-white'); 
    
    const inputCantidad = card.querySelector('input[type="number"]');
    
    if (!inputCantidad) {
        console.error('No se encontró el input de cantidad para esta tarjeta.');
        return;
    }

    const cantidad = parseInt(inputCantidad.value) || 1;

    const producto = { _id, nombre, imagen, texto, precio, cantidad };
    agregarAlCarrito(producto);
  }
)

function agregarAlCarrito(producto) { 
let carrito = getData('carrito') || []

  const index = carrito.findIndex(p => p._id === producto._id)
  if (index !== -1) {
    carrito[index].cantidad += producto.cantidad
  } else {
    carrito.push(producto)
  }

  setData('carrito', carrito) 
  alert('Se añadió tu compra al carrito')
}

