export const cardCarrito=(_id,imagen,nombre,texto,precio,cantidad)=>{
    return `
<div class="w-full bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center gap-6">
            
            <img src="${imagen}" alt="${nombre}" class="w-24 h-24 rounded-md object-cover flex-shrink-0">

            <div class="flex-grow text-center md:text-left">
                <h5 class="text-lg font-bold text-gray-800">${nombre}</h5>
                <p class="text-sm text-gray-600 hidden sm:block">${texto}</p> </div>

            <div class="flex-shrink-0 text-center">
                <p class="text-sm text-gray-500">Cantidad</p>
                <p class="font-bold text-gray-800 text-lg">${cantidad}</p>
            </div>

            <div class="flex-shrink-0 text-center">
                <p class="text-sm text-gray-500">Precio</p>
                <p class="font-bold text-gray-800 text-lg">$${precio}</p>
            </div>

            <div class="flex-shrink-0">
                <button class="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300 btn-eliminar-producto" data-_id="${_id}">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>

`}