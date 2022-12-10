/* Calculadora Romana */
//Clase Amigo
class Amigo {
    constructor(nombre, gasto, deuda) {
        this.nombre = nombre; 
        this.gasto = gasto;
        this.deuda = deuda;
    }
}

//const amigoMartin = new Amigo("Martin", 1000, 0);

const arrayAmigos = [];

///arrayAmigos.push(amigoMartin);

console.log(arrayAmigos);

// Función Menu de opciones:
function menu() {
    let opcion = parseInt(prompt("Ingrese la opción: \n 1) Agregar amigo \n 2) Borrar amigo \n 3) Modificar amigo \n 4) Calcular gastos \n 5) Mostrar amigos \n 6) Salir"))
    return opcion;
}

// Función para agregar un amigo:
function altaAmigo() {
    let nombre = prompt("Ingresá el nombre de tu amigo: ");
    let gasto = parseInt(prompt("Ingresá cuanto gastó " + nombre + ":"));
    let deuda = 0;
    let amigo = new Amigo(nombre, gasto, deuda);
    arrayAmigos.push(amigo);
    console.log(arrayAmigos);
}

// Función para dar de baja un amigo:
function bajaAmigo() {
    let nombre = prompt("Ingresá el nombre de tu amigo: ");
    let amigo = arrayAmigos.find(amigo => amigo.nombre === nombre);
    let indice = arrayAmigos.indexOf(amigo);
    arrayAmigos.splice(indice, 1);
    alert(amigo.nombre + " fue eliminado.")
    console.log(arrayAmigos);
}

// Función para modificar un amigo:
function modificarAmigo() {
    let nombre = prompt("Ingresá el nombre de tu amigo: ");
    let amigo = arrayAmigos.find(amigo => amigo.nombre === nombre);
    let indice = arrayAmigos.indexOf(amigo);
    let gasto = parseInt(prompt("Ingresá cuanto gastó " + nombre + ":"));
    let deuda = 0;
    let amigoModificado = new Amigo(nombre, gasto, deuda);
    arrayAmigos.splice(indice, 1, amigoModificado);
    alert(amigo.nombre + " fue modificado.")
    console.log(arrayAmigos);
}

//Función para calcular los que debe cada uno de los amigos:
const calculoFinal = document.getElementById("calculoFinal");
function calcularDeuda() {
    let cuentaParcial = arrayAmigos.reduce((acumulador, amigo) => acumulador + amigo.gasto, 0);
    let cantidadAmigos = arrayAmigos.length;
    const nuevoArrayAmigos = arrayAmigos.map(amigo => {
        if (amigo.deuda === 0) {
            return {...amigo, deuda: ((cuentaParcial / cantidadAmigos) - amigo.gasto)}
        }
        return amigo;
    })
    console.log(nuevoArrayAmigos);
    nuevoArrayAmigos.forEach((amigo) => {
        const amigoFinal = document.createElement("li");
        if (amigo.deuda < 0) {
                amigoFinal.innerHTML += `<li>A ${amigo.nombre} se le deben $${amigo.gasto - (cuentaParcial / cantidadAmigos).toFixed(0)}`;
                calculoFinal.appendChild(amigoFinal);
            } else {
                amigoFinal.innerHTML += `<li>${amigo.nombre} tiene que poner $${(amigo.deuda).toFixed(0)}`;
                calculoFinal.appendChild(amigoFinal);
            }
    });
}


const listadoAmigos = document.getElementById("listadoAmigos");
//Función para mostrar el listado de amigos:
function mostrarAmigos() {
    arrayAmigos.forEach((amigo) => {
        const unamigo = document.createElement("li");
        unamigo.innerHTML += `<li>${amigo.nombre} puso $${amigo.gasto}</li>`;
        listadoAmigos.appendChild(unamigo);
    }) 
};

//Función para salir del programa:
function salir() {
    alert("Cuentas claras mantienen la amistad. Tasa tasa.");
}

//Ejecutamos el programa:
let operacion = 0
function verOpciones() {
    do {
        let opcion = menu();
        switch (opcion) {
            case 1:
                altaAmigo();
                operacion = 1;
                break;
            case 2:
                bajaAmigo();
                operacion = 2;
                break;
            case 3:
                modificarAmigo();
                operacion = 3;
                break;
            case 4:
                calcularDeuda();
                operacion = 4;
                break;
            case 5:
                mostrarAmigos();
                operacion = 5;
                break;
            case 6:
                salir();
                operacion = 6;
                break;
            default:
                alert("Poniendo estaba la gansa, maestro!");
                break;
        } 
    } while (operacion != 6);
};

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
    verOpciones();
});


