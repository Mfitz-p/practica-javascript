
//Código del cuadrado
console.group("Cuadrados") //Podemos agrupar mensajes o console.log
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd(); //Cierre del grupo

//Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del trángulo es: " + alturaTriangulo + "cm");



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

//Código del círculo
console.group("Círculos");
 
//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;//Math es una caja de herramientas de JS 
console.log("PI es: " + PI);

//Circunferencía
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI; 
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Aquí interactuamos con HTML

//Funciones Cuadrado JS
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Funciones Triangulo Isoceles JS
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}
function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}


//Funciones Circulo JS
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}