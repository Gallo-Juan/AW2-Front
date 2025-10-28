export const cardComponents=(id,imagen,nombre,texto,precio)=>{
    return `
     <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
            
            <div class="h-56">
                <img src="${imagen}" class="w-full h-full object-contain" alt="${nombre}">
            </div>
            
            <div class="p-4 flex flex-col flex-grow">
                <div>
                    <h5 class="text-lg font-semibold text-gray-800 mb-2">${nombre}</h5>
                    <p class="text-gray-600 text-sm mb-4">${texto}</p>
                </div>
                
                <div class="mt-auto pt-4 border-t border-gray-200">
                    <div class="flex items-center justify-between gap-2">
                        <p class="text-xl font-bold text-gray-900">$${precio}</p>
                        
                        <div class="flex items-center gap-2">
                            <input type="number" class="w-16 border border-gray-300 rounded-md px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500" min="1" value="1" step="1">
                            
                            <button class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300 btn-comprar" 
                                    data-id="${id}" 
                                    data-nombre="${nombre}" 
                                    data-texto="${texto}" 
                                    data-imagen="${imagen}" 
                                    data-precio="${precio}">
                                <img src="/Images/carrito.png" class="w-6 h-6 pointer-events-none">
                            </button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    `
    }
