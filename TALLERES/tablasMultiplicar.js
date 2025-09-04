//Las primeras 10 tablas de multiplicar
const numLimite=10;

for (let numTabla=1; numTabla<=10; numTabla++){
    console.log("Tabla del ", numTabla);
    for (let i=0; i<=numLimite; i++){
        console.log(i, "x", numTabla, "=", i*numTabla);
    }
    console.log("=================================");
}
