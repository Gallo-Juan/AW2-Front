import NavBar  from "/components/NavBar.js"
import { removeSessionItem } from "/utils/sessionstorageController.js"
import { cardCarrito } from "/components/cardCarrito.js"
import { setData, getData, deleteData } from "../../Utils/localstorageController.js"
import {getSessionItem } from "../../Utils/sessionStorageController.js"
import {API} from "../../Api/api.js"


let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')
let cardContainer=document.getElementById('card-container')
const totalContainer = document.getElementById("total-carrito")
const btnFinalizar = document.getElementById('btn-finalizar-compra')
const direccion=document.getElementById('direccion').value



window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar

  const btnLogout = document.getElementById('cerrarSesion')
  if (btnLogout) {
    btnLogout.addEventListener('click', (e) => {
      e.preventDefault()
      removeSessionItem('usuario')
      removeSessionItem('token')  
      deleteData('carrito')
      window.location.href = '../../index.html'
    })
  }

    //title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online`  
    const prod=getData('carrito') || []
    const cards=prod.map(e=>{
            return cardCarrito(e._id,e.imagen,e.nombre,e.texto,e.precio,e.cantidad)      
}).join('')

    cardContainer.innerHTML=cards

const total = prod.reduce((acum, item) => {
    return acum + (item.precio * item.cantidad)
  }, 0)

  totalContainer.textContent = total.toFixed(2)

    configurarBotonesEliminar()    
})

function configurarBotonesEliminar() {
  const botones = document.querySelectorAll('.btn-eliminar-producto');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const idProducto = btn.dataset._id;

      let carrito = getData('carrito') || [];

      // Filtrar el producto por id
      carrito = carrito.filter(producto => producto._id != idProducto);

      setData('carrito', carrito);
      
      location.reload(); 
    });
  });
}


btnFinalizar.addEventListener('click',async () => {
   try { 
    const usuario=getSessionItem('usuario')
    const token=sessionStorage.getItem('token')
    const carrito=getData('carrito')
    const direccion=document.getElementById('direccion').value

    if(!token || !usuario || !carrito){
      alert('No se pudo obtener la información del usuario o del carrito. Por favor, inicie sesión nuevamente.');
            return;
    }

    const totalNumerico = parseFloat(totalContainer.textContent.replace(/[^0-9.-]+/g,""));

      const productosCompletosArray = Object.values(carrito || {});      
        
      const productosParaVenta = productosCompletosArray.map(p => {
            return {
                producto: p._id,
                cantidad: p.cantidad,
                precio: p.precio
            };
        });

      const venta = {           
            total: totalNumerico, 
            direccion: direccion, 
            productos: productosParaVenta
        };

        console.log('Datos que se enviarán al backend:', JSON.stringify(venta, null, 2));
        const response = await fetch(`${API}/ventas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify(venta)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Error en la carga de la venta');
        }

        deleteData('carrito');

        alert('¡Gracias por tu compra!');
                
        window.location.href='../inicio/inicio.html'

    } catch (error) {
        // 4. Manejo de error corregido
        console.error('Error al finalizar la venta:', error);
        alert(error.message);
    }   
  });