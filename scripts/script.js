


/* 




numeros ingresados se sumen
numeros ingresados se resten
numeros ingresados se multipliquen
numeros ingresados se dividen





Conversor de numero binario a decimal
                    decimal a binario
*/

let numero1; let numero2;
let operador;
let bandNum1 = false;
let bandOperador = false;

let num = "302A";
let bin;
let dec;

bin = ConvertirDecimalABinario(num);
dec = ConvertirBinarioADecimal(bin);
console.log(bin);
console.log(dec);

console.log(ValidarFecha(35, 12, 2002));
console.log(ValidarFecha(29, 2, 2024));
console.log(ValidarFecha(29, 2, 2023));
console.log(ValidarFecha(30, 15, 2023));
console.log(ValidarFecha(15, -3, 2002));
console.log(ValidarFecha(-2, 12, 2002));

Calcular(50, 0, '/');



function ValidarFecha(day, month, year) {
    let ok = false;
    let days = 0;
    let anioBiciesto;

    anioBiciesto = ValidarAnioBiciesto(year);

    if (month != null && month >= 0 && month <= 12) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days = 30;
                break;
            case 2:
                anioBiciesto ? days = 29 : days = 28;
                break;
        }
    }

    if (day != null && day >= 0 && day <= days) {
        ok = true;
    }

    return ok;
}

function ValidarAnioBiciesto(year) {
    return (year % 4) == 0 ? anioOk = true : anioOk = false;
}

function ConvertirDecimalABinario(numDecimal) {
    let retorno;

    let numMax = 33554432;
    let numBinario = "";
    let band = false;

    if (numDecimal >= 0) {
        for (let i = 0; i < 26; i++) {
            if (numDecimal >= numMax) {
                numBinario += "1";
                numDecimal = numDecimal - numMax;
                band = true;
            }
            else {
                if (band) {
                    numBinario += "0";
                }
            }
            numMax = numMax / 2;
        }
        retorno = numBinario;
    }
    else {
        retorno = "Numero inválido";
    }
    return retorno;
}

function ConvertirBinarioADecimal(num) {

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i] * 2 ** (num.length - 1 - i);
    }
    return sum;

}

function Sumar(num1,num2)
{
    return num1 + num2;
}

function Restar(num1,num2)
{
    return num1 - num2;
}

function Multiplicar(num1,num2)
{
    return num1 * num2;
}

function Dividir(num1,num2)
{
    let resultado;
    
    if (num2 == 0)
    {
        resultado = ("No se puede dividir por cero");
    }
    else
    {
        resultado = num1 / num2; 
    }
    return resultado;
}


function Calcular(num1,num2, operador)
{ 
    let resultado;
    
    switch(operador)
    {
        case '+':
            resultado = Sumar(num1,num2);
            break;

        case '-':
            resultado = Restar(num1,num2);
            break;
        
        case '*':
            resultado = Multiplicar(num1,num2);
            break;

        case '/':
            resultado = Dividir(num1,num2); 
            break;
    }
    return resultado;
}


function MostrarCaracter(car)
{
    alert(car);
}

function CargarCaracter(car, id)
{
    let sePudo = false;
    let ant;
    let aux;

    if(car === '+' || car === '-' || car === '*' || car === '/')
    {
        operador = car;
    }
    
    ant = document.getElementById(id).value;
    ant += car;
    document.getElementById(id).value = ant;   

    return sePudo;
}

function ObtenerCaracter(id)
{
    return document.getElementById(id).value;
}

function LimpiarId(id)
{
    document.getElementById(id).value = "";  
}

function CargarResultado(id)
{
    console.log(numero1);
    console.log(numero2);
    console.log(operador);
    let aux =  Calcular(numero1, numero2, operador);
    let num = parseFloat(aux);
    LimpiarId(id);
    document.getElementById(id).value = num;
}

function OperadorCargado(car, id)
{
    aux = parseFloat(document.getElementById(id).value);
    if(!bandNum1)
    {
        numero1 = aux;
    }
    else
    {
        numero2 = aux;
    }
    
    /*if(!bandOperador)
    {*/
        CargarCaracter(car, id);
        bandOperador = true;
    //}
}







