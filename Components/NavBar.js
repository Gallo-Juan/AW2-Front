import { getSessionItem } from "../Utils/sessionStorageController.js";

// 1. Obtenemos el usuario PRIMERO
const usuario = getSessionItem('usuario');

// 2. Usamos 'let' porque vamos a reasignar esta variable
let NavBar = '';

if (!usuario) {
    // --- ESTADO INVITADO (No hay usuario) ---

    // 3. Los elementos de navegación para INVITADOS
    const guestNavElements = [
        { id: 'ropaHombre', title: 'Ropa de Hombre', link: '/pages/categorias/RopaHombre.html' },
        { id: 'ropaMujer', title: 'Ropa de Mujer', link: '/pages/categorias/RopaMujer.html' },
        { id: 'electronica', title: 'Electrónica', link: '/pages/categorias/Electronica.html' },
        { id: 'carrito', title: '<img src="/Images/carrito.png" alt="Carrito" width="40" height="40" class="rounded-circle img-carrito">', link: "/pages/carrito/carrito.html" },
        // 4. Cambiamos "Cerrar Sesión" por "Iniciar Sesión"
        { id: 'iniciarSesion', title: 'Iniciar Sesión', link: '/ingreso/login.html' } // <-- Ajusta esta ruta a tu login
    ];

    NavBar = `
    <nav class="bg-gray-800 text-white shadow-lg">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-2">
                <a href="/Pages/inicio/inicio.html" class="flex-shrink-0">
                    <img src="/Images/logo.png" alt="Logo" class="h-16 w-16 bg-gray-100 rounded-full">
                </a>

                <div class="hidden md:flex md:items-center md:space-x-4">
                    ${
                        // 5. Mapeamos los elementos de INVITADO
                        guestNavElements.map(e => `
                            <a id="${e.id}" href="${e.link}" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">${e.title}</a>
                        `).join('')
                    }
                    </div>
                </div>
        </div>
    </nav>
    `;

} else {
    // --- ESTADO LOGUEADO (Sí hay usuario) ---

    // 3. Los elementos de navegación para USUARIOS LOGUEADOS
    const userNavElements = [
        { id: 'ropaHombre', title: 'Ropa de Hombre', link: '/pages/categorias/RopaHombre.html' },
        { id: 'ropaMujer', title: 'Ropa de Mujer', link: '/pages/categorias/RopaMujer.html' },
        { id: 'electronica', title: 'Electrónica', link: '/pages/categorias/Electronica.html' },
        { id: 'carrito', title: '<img src="/Images/carrito.png" alt="Carrito" width="40" height="40" class="rounded-circle img-carrito">', link: "/pages/carrito/carrito.html" },
        { id: 'cerrarSesion', title: 'Cerrar Sesión', link: '/index.html' } // <-- Aquí SÍ va "Cerrar Sesión"
    ];

    NavBar = `
    <nav class="bg-gray-800 text-white shadow-lg">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-2">
                <a href="/Pages/inicio/inicio.html" class="flex-shrink-0">
                    <img src="/Images/logo.png" alt="Logo" class="h-16 w-16 bg-gray-100 rounded-full">
                </a>
                <div class="hidden md:flex md:items-center md:space-x-4">
                    ${
                        // 5. Mapeamos los elementos de USUARIO
                        userNavElements.map(e => `
                            <a id="${e.id}" href="${e.link}" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition duration-300">${e.title}</a>
                        `).join('')
                    }
                    <div class="text-right text-sm ml-6">
                        <span>Bienvenido</span><br>
                        <strong class="font-medium">${usuario.apellido}, ${usuario.nombre}</strong>
                    </div>
                </div>
                </div>
        </div>
    </nav>
    `;
}

export default NavBar;