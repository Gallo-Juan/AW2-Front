import { API } from "../../Api/api.js";

const registroForm=document.getElementById('registro')

registroForm.addEventListener('submit',async(e)=>{
    e.preventDefault()

    const email=document.getElementById('email').value
    const contrasena=document.getElementById('pass').value
    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const confirmPass=document.getElementById('confirm-password').value

    if(contrasena!=confirmPass){
        alert('No coinciden las contraseñas')
        return
    }

    try {
        const response = await fetch(`${API}/usuarios/registro`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, apellido, email, contrasena })
        });

        const data = await response.json();

        if (!response.ok) {
           throw new Error(data.message);
        }      
              
        window.location.href="../login/login.html";

    }catch(error) {       
        alert(error.message);
    }
})
