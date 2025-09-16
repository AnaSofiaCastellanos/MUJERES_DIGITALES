//Constante para que el usuario pueda interactuar con la consola
const rl= require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Función para realizar las preguntas necesarias durante la calculadora
//Funciona a través de una promesa que es su forma verdadera devuelve la respuesta a la pregunta
const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

//Función asíncronica con toda la lógica de la calculadora
const menuOpciones = async()=>{
    let respuesta="s";

    //Bucle while para repetir ciclicamente la calculadora y sus opciones hasta que el usuario no requiera utilizarla más
    while(respuesta=="s"){
        console.log("===== CALCULADORA =====");

        //Cantidad de números que se van a ingresar  a la calculadora
        const cantidadNum=Number (await preguntar("¿Cuántos números desea ingresar? "));

        //La cantidad de números a ingresar en la calculadora es igual 2
        if(cantidadNum==2){
            //Recuperar de la consola el primer número del usuario
            const num1=Number (await preguntar("Escriba el primer número: "));

            //Mostrar el menú de operaciones
            console.log("Menú de operaciones");
            console.log("1.Suma");
            console.log("2.Resta");
            console.log("3.Multiplicación");
            console.log("4.División");
            console.log("5.Potencia");

            //Recuperar de la consola la operación del usuario
            const operacion=Number( await preguntar("Ingrese la opción a realizar: "));
            //Recuperar de la consola el segundo número del usuario
            const num2=Number (await preguntar("Escriba el segundo número: "));

            //Condicional múltiple que evalua el valor de la operación seleccionada según el caso
            switch (operacion){
                //Suma
                case 1: 
                    resultado=num1+num2; 
                    console.log(num1, "+", num2, "=", resultado);
                    break; 

                //Resta
                case 2: 
                    resultado=num1-num2; 
                    console.log(num1, "-", num2, "=", resultado);
                    break; 

                //Multiplicacion
                case 3: 
                    resultado=num1*num2; 
                    console.log(num1, "x", num2, "=", resultado);
                    break; 

                //Division
                case 4: 
                    if (num2==0){
                        console.log("Error: No se puede dividir entre 0");
                    }else{
                        resultado=num1/num2; 
                        console.log(num1, "/", num2, "=", resultado);
                    }
                    break; 

                //Potencia
                case 5: 
                    resultado=1;
                    //Bucle for que multiplica el valor del num1 la cantidad de veces que equivale el num2
                    //15 ^2= 15* 15
                    for (let i = 1; i <=num2; i++) {
                        resultado=resultado*num1;      
                    }
                    console.log(num1, "^", num2, "=", resultado);
                    break;

                default:
                    console.log("La opción ingresada no es válida");
                    break;
            }
        //La cantidad de numeros a ingresar a la calculadora es 1
        }else if(cantidadNum==1){
            //Recuperar de la consola el número del usuario
            const num=Number (await preguntar("Escriba el número: "));

            //Mostrar el menú de operaciones
            console.log("Menú de operaciones")
            console.log("1.Factorial");
            console.log("2.Raíz cuadrada");

            //Recuperar de la consola la operación del usuario
            const operacion=Number( await preguntar("Ingrese la opción a realizar: "));  

            //Condicional múltiple que evalua el valor de la operación seleccionada según el caso
            switch (operacion){
                //Factorial
                case 1: 
                    resultado=num; 

                    //Bucle for que multiplica los números de manera descente del número ingresado 
                    // 5! = 5*4*3*2*1
                    for (let i=num-1; i>0; i--){
                        resultado=resultado*i; 
                    }
                    console.log(num, "! = ",resultado);
                    break; 
                
                //Raíz
                case 2: 
                    //Función para calcular la raíz cuadrada de un número
                    resultado=Math.sqrt(num);
                    console.log("√", num, "=", resultado);
                    break; 

                default:
                    console.log("La opción ingresada no es válida");
                    break;
            }  
        }else{
            console.log("Ingrese una cantidad de números válida (mínimo 1 y máximo 2 números)")
        }
        //Recuperar la respuesta del usuario para saber si continua el programa o no 
        respuesta=( await preguntar("¿Desea realizar alguna operación adicional? (s/n)")); 

        //Convertir la respuesta del usuario en minúscula
        respuesta=respuesta.toLowerCase();

        //Limpiar la consola con las anteriores operaciones
        console.clear();
    }    
    //Cerrar la interacción la consola
    rl.close();
    console.log("¡Gracias por utilizar la calculadora, te esperamos pronto!")
}
//Llamar la función para iniciar la calculadora
menuOpciones();
