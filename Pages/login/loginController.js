import { API } from "../../Api/api.js";
import {alert, handleAlert} from "../../Components/alerta.js"

const loginForm=document.getElementById('login')
const alerta=document.getElementById('alert-container')

alerta.innerHTML=alert()

loginForm.addEventListener('submit',async(e)=>{
    e.preventDefault()

    const email=document.getElementById('email').value
    const contrasena=document.getElementById('pass').value

    try {
        const response = await fetch(`${API}/usuarios/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, contrasena })
        });

        const data = await response.json();

        if (!response.ok) {          
             handleAlert('El email y/o la contraseña son incorrectas');
            return
        }
        
        sessionStorage.setItem('usuario', JSON.stringify(data)); 

        //alert('Login exitoso');
        window.location.href='../../Pages/inicio/inicio.html' 
    }catch(error) {
        console.error('Error de Login:', error);
        handleAlert(error.message);
    }
})



