function crearTarjeta(tipo){
    const tarjeta = document.getElementById('tarjeta');
   
    if (!tarjeta) {
        console.error('No se encontró el elemento con id "tarjeta"');
        return;
    }

    if (tipo === "basico"){
        tarjeta.innerHTML = `
            <p class="text-white m-2 mt-4 text-">Complete los siguientes campos para crear su cuenta regular. Considere que a este tipo de cuenta se le asigna un nombre de usuario.</p>

            <form action="" class="flex flex-col items-center w-full">
                <div class="m-2 flex flex-col  w-full">
                    <label class="text-white w-full">CORREO</label>
                    <input type="email" class="rounded-full h-[30px]" required>
                </div>
                <div class="m-2 flex flex-col w-full">
                    <label class="text-white mb-2 w-full">CONTRASEÑA</label>
                    <input type="password" required class="rounded-full h-[30px]">
                </div>
                <div class="m-2 flex flex-row w-full text-white">
                <input type="checkbox" required class=" text-white rounded-full h-[30px] ">Acepto los terminos y condiciones
                </div>
                <button id="envioNormal" class="bg-blue-500 text-white mt-10 rounded-full w-[200px] h-[40px]">SIGN UP</button>
            </form>
            `;
            
    } else if (tipo === "vip"){
        tarjeta.innerHTML = `
                <p class="text-white m-2 mt-4 text-">Complete los siguientes campos para crear su cuenta regular. Considere que a este tipo de cuenta se le asigna un nombre de usuario.</p>

            <form action="" class="flex flex-col items-center w-full">
                <div class="m-2 flex flex-col  w-full">
                    <label class="text-white w-full">NOMBRE DE USUARIO</label>
                    <input type="text" id="nombreVip" class="rounded-full h-[30px]" required>
                </div>
                <div class="m-2 flex flex-col  w-full">
                    <label class="text-white w-full">CORREO</label>
                    <input type="email" class="rounded-full h-[30px]" required>
                </div>
                <div class="m-2 flex flex-col w-full">
                    <label class="text-white mb-2 w-full">CONTRASEÑA</label>
                    <input type="password" required class="rounded-full h-[30px]">
                </div>
                <div class="m-2 flex flex-row w-full text-white">
                <input type="checkbox" required class=" text-white rounded-full h-[30px] ">Acepto los terminos y condiciones
                </div>
                <button id="envioVip" class="bg-yellow-500 text-white mt-10 rounded-full w-[200px] h-[40px]">SIGN UP</button>
            </form>
        `;
    } else {
        console.log("error");
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const botonBasico = document.getElementById("pestañaBasico");
    const botonVip = document.getElementById("pestañaVip");
    
    if (botonBasico && botonVip) {
        botonBasico.addEventListener('click', () => {
            crearTarjeta("basico");
            actualizarClasesPestañas(botonBasico, botonVip);
        });

        botonVip.addEventListener('click', () => {
            crearTarjeta("vip");
            actualizarClasesPestañas(botonVip, botonBasico);
        });
    } else {
        console.error('No se encontraron los elementos de las pestañas');
    }
});

function actualizarClasesPestañas(pestañaActiva, pestañaInactiva) {
    pestañaActiva.classList.remove("text-black");
    pestañaActiva.classList.add("text-white", "underline");

    pestañaInactiva.classList.remove("text-white", "underline");
    pestañaInactiva.classList.add("text-black");
}

crearTarjeta("basico")

class Normal {
    constructor(correo, contraseña) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.nombre= `Usuario${Math.floor(Math.random()*9000)+1000}`;
    }
}

class Vip extends Normal {
    constructor(nombre,correo,contraseña) {
        super(correo,contraseña);
        this.nombre = nombre;
    }
}

document.getElementById('envioNormal').addEventListener('click', (e) => {
    e.preventDefault();
    let correo = document.querySelector('input[type="email"]').value;
    let contraseña = document.querySelector('input[type="password"]').value;
    let usuario = new Normal(correo, contraseña);
    alert(`Bienvenido ${usuario.nombre} Email:${usuario.correo} Constraseña:${usuario.contraseña}`)
}); 

document.getElementById('envioVip').addEventListener('click', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombreVip').value;
    let correo = document.querySelector('input[type="email"]').value;
    let contraseña = document.querySelector('input[type="password"]').value;
    let usuario = new Vip(nombre, correo, contraseña);
    alert(`Bienvenido ${usuario.nombre} Email:${usuario.correo} Contraseña:${usuario.contraseña}`)
});