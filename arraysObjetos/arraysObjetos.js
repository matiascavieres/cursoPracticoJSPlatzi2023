 //Arrays para hacer las pruebas.
let arr = ["1","2","3"];
let arr2 = ["Felipe","Ana","Matias"];

//Objeto para hacer pruebas.
let obj = {
  nombre: "Ana",
  edad: 60,
  comidasFavoritas : ["Pollo Frito", "Cazuela", "Tussi"]
}
console.log(obj)

//Funcion que imprime el primer elemento de un array.
function imprimirPrimerElementoArray(arr){
  console.log(arr[0]);
}

imprimirPrimerElementoArray(arr);
imprimirPrimerElementoArray(arr2);


//Funcion que imprime todos los elementos de un array.
function imprimirElementoPorElemento1(arr){
  for (let i = 0;i < arr.length;i++){ 
    console.log(arr[i]);
  }
};

//Funcion que imprime todos los elementos de un array usando of.
function imprimirElementoPorElemento2(arr){
  for (let i of arr){ 
    console.log(i);
  }
};

imprimirElementoPorElemento1(arr);
imprimirElementoPorElemento1(arr2);

//funcion que imprime todos los elementos de un obj
function imprimirElementoObjeto(obj){
  const arrayDeObjeto = Object.values(obj);
  for (let i = 0 ;i < arrayDeObjeto.length ;i++){
    console.log(arrayDeObjeto[i]);
  }
}

imprimirElementoObjeto(obj);