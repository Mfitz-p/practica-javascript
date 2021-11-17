
//Calcular la media aritmetica de este array de numero

function calcularMediaAritmetica(lista) {
//     let sumaLista = 0;
// for(let i = 0; i < lista.length; i++ ) {    
//     sumaLista = sumaLista + lista[i];
// }

const sumaLista = lista.reduce( //Metodo reduce recibe una funcion, permite ir sumando cada uno de los elementos. 
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}