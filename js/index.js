/*const texto = document.getElementById('site');

 const tiempoEspera = setTimeout(() => {
    texto.innerHTML = 'Bienvenidos a Mi Sitio';
    console.log('Bienvenidos a este Sitio de Desarrollo');
}, 3000);

tiempoEspera(); 

setTimeout(() => {
    texto.innerHTML = 'Bienvenidos a Mi Sitio';
    console.log('Bienvenidos a este Sitio de Desarrollo');
}, 3000);*/


const texto = document.getElementById('encabezadoPrincipal');

setTimeout(() => {
    texto.innerHTML = 'PAGINA PRINCIPAL';
}, 3000); 


//Inicio formalario
console.log('Función Formulario...');

let nombre;
let email;
let mensaje;
let text1;

function guardarDatos() {
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    mensaje = document.getElementById('mensaje').value;

    text1 = document.getElementById('check__1');

    text1.innerHTML = 'Nombre: ' + nombre + '<br>' + 'Email: ' + email + '<br>' + 'Mensaje: ' + mensaje;
    
    console.log(nombre);
    console.log(email);
    console.log(mensaje);
};

//Boton del formulario
const btnForm = document.getElementById('btn__presionar');

const presionar = btnForm.addEventListener('click', () => {
    console.log('Estoy ejecutando la función Presionar');
    guardarDatos();
});

//Boton dentro de mensaje emergente
const btnSucc = document.getElementById('btn__presionar2');

const a = btnSucc.addEventListener('click', () => {
    console.log('Estoy ejecutando la función Presionar');
    const text1 = document.getElementById('check__1');
    text1.innerHTML = 'Los datos fueron enviados correctamente';
});


