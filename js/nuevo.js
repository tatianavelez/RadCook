alert ("BIENVENIDO A RADCOOK");
document.getElementById("btn_registro").addEventListener("Click", registro);
document.getElementById("btn_iniciar_sesión").addEventListener("Click", iniciarSesion);
window.addEventListener("resize", anchoPagina);
// declaracion de variables
var contenedor_login_registro = document.querySelector (".contenedor_login_registro");
var formulario_login = document.querySelector (".formulario_login");
var formulario_registro = document.querySelector (".formulario_registro");
var caja_trasera_login = document.querySelector (".caja_trasera_login");
var caja_trasera_registro = document.querySelector (".caja_trasera_registro");

function anchoPagina(){
    if (window.innerWidth >850){
        caja_trasera_login.style.display="block";
        caja_trasera_registro.style.display="block";
    }
    else{
        caja_trasera_registro.style.display="block";
        caja_trasera_registro.style.opacity="1";
        caja_trasera_login.style.display="none";
        formulario_login.style.display="block";
        formulario_login.style.display="none";
        contenedor_login_registro.style.left="0px";
    }
}
anchoPagina();

function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_registro.style.left = "10px";
        formulario_registro.style.display = "none";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }
        else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_registro.style.display = "none";
        caja_trasera_registro.style.display = "block";
        caja_trasera_login.style.display = "none";
            }
}


function registro(){
    if (window.innerWidth > 850){
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }
    else{
        formulario_registro.style.display = "block";
        contenedor_login_registro.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_registro.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";   
    }
    
}


