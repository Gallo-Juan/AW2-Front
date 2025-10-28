import {getSessionItem} from "../Utils/sessionStorageController.js"

const navElements = [
  { id: 'ropaHombre', title: 'Ropa de Hombre', link: '/pages/categorias/RopaHombre.html' },
  { id: 'ropaMujer', title: 'Ropa de Mujer', link: '/pages/categorias/RopaMujer.html' },
  { id: 'electronica', title: 'Electrónica', link: '/pages/categorias/Electronica.html' },
  { id: 'carrito', title: '<img src="/Images/carrito.png" alt="Carrito" width="40" height="40" class="rounded-circle img-carrito">', link: "/pages/carrito/carrito.html" },
  { id: 'cerrarSesion', title: 'Cerrar Sesión', link: '/index.html' } 
];

const usuario= getSessionItem('usuario')


export const NavBar = `
<nav class="bg-gray-800 text-white shadow-lg">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-2">
            
            <a href="/Pages/inicio/inicio.html" class="flex-shrink-0">
                <img src="/Images/logo.png" alt="Logo" class="h-16 w-16 bg-gray-100 rounded-full">
            </a>

            <div class="hidden md:flex md:items-center md:space-x-4">
                ${
                    navElements.map(e => `
                        <a id="${e.id}" href="${e.link}" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">${e.title}</a>
                    `).join('')
                }
                <div class="text-right text-sm ml-6">
                    <span>Bienvenido</span><br>
                    <strong class="font-medium">${usuario.apellido}, ${usuario.nombre}</strong>
                </div>
            </div>

            <div class="md:hidden flex items-center">
                <button id="mobile-menu-button" class="p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            ${
                navElements.map(e => `
                    <a id="${e.id}-mobile" href="${e.link}" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300">${e.title}</a>
                `).join('')
            }
             <div class="text-left text-sm px-3 pt-4 pb-2 border-t border-gray-700">
                <span>Usuario:</span><br>
                <strong class="font-medium"></strong>
            </div>
        </div>
    </div>
</nav>
`;
