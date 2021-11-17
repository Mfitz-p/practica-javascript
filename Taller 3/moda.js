const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(  //.map nos ayuda a recorrer nuestro array
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort( //Object.entries podemos enviar como argumento el objeto que queremos convertir en un array 
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
const moda = lista1Array[lista1Array.length - 1];
