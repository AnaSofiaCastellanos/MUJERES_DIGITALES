//Evaluar si un número es par o impar
const numero=10; 

if(isNaN(numero)){
    console.log("La entrada ingresada no es válida, ingrese un número");
}else if(numero %2==0){
    console.log("El número ingresado es par");
}else{
    console.log("El número ingresado es impar");
}