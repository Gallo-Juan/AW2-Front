# Frontend del E-commerce 🛍️

Este repositorio contiene el código fuente del **frontend** para el proyecto de e-commerce. La interfaz está construida con HTML, CSS y JavaScript, y utiliza **Tailwind CSS** para un diseño moderno y responsivo.

Esta aplicación es la parte visual del proyecto y consume los datos desde una API REST, la cual se encuentra en un **repositorio de backend separado**.

## Tecnologías Utilizadas 💻

-   **HTML**: Para la estructura del contenido.
-   **CSS**: Para los estilos base.
-   **Tailwind CSS**: Framework de utilidades CSS para el diseño de la interfaz.
-   **JavaScript**: Para la lógica, la interactividad y la comunicación con la API.

---

## Puesta en Marcha 🚀

Para poder ejecutar y probar este proyecto en tu entorno local, es **indispensable** clonar y ejecutar primero el backend, ya que provee todos los datos necesarios para que la tienda funcione.

### 1. Preparar el Backend 📦

Primero, necesitamos que el servidor esté corriendo.

1.  Ve al repositorio del Backend: [AW2-Back](https://github.com/Gallo-Juan/AW2-Back).
2.  Sigue las instrucciones de su README para instalarlo y ejecutarlo (`npm install`, configurar `.env`, `npm run dev`).
3.  **¡IMPORTANTE!** Fíjate en qué PUERTO está corriendo el backend (ej: 3000, 8080).

### 2. Configurar el Frontend ⚙️

1.  Clona este repositorio:
    ```bash
    git clone [https://github.com/Gallo-Juan/AW2-Front]
    ```
2.  Abre el archivo `API/api.js` .
3.  Asegúrate de que la URL apunte al puerto correcto de tu backend.
    ```javascript
    // Ejemplo: Si tu backend corre en el puerto 8080
    const API = "http://localhost:8080";
    ```

### 3. Ejecutar el Frontend 🖥️

* Usa la extensión **"Live Server"** de Visual Studio Code para abrir el archivo `index.html`.

