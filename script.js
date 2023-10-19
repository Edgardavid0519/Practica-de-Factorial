const inputFactorial = document.getElementById('factorial');
const botonCalcular = document.getElementById('botonFactorial');
const pantalla = document.getElementById('pantalla');
let factorial = 1;


//Escuchar evento click
botonCalcular.addEventListener('click', calcularFactorial);


//Declarar funciones
function calcularFactorial(){
    let inputValue = parseInt(inputFactorial.value);

    if(!isNaN(inputValue)){
        for(let i=inputValue; i>=1; i--){
            factorial *= i;
        }
        mostrarFactorial(factorial,inputValue);
        factorial = 1;
    }else{
        alert('Ingresar un dato válido');
    }
}

function mostrarFactorial(factorial, valor){
    pantalla.innerHTML= `
       El factorial de ${valor} es ${factorial}
    `
}