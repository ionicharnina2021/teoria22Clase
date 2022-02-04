
// https://stackoverflow.com/questions/43119163/typescript-error-ts2693-promise-only-refers-to-a-type-but-is-being-used-as
//Existe un fallo con las promises, necesitamos poner el target en tsconfig en es2015 al menos
//Aunque solo es para probarlo con node aqui porque en ionic es todo muy diferente

//planteamiento de la promesa
let  promise=new Promise((resolve,reject)=>{
    //se retorna un valor de referencia 
    resolve(123);
})

//la resolucion de la promesa
//then es la encargada de el tratamiento de la promesa si esta es fullfilled
promise.then((resolveJulio)=>{
    console.log(resolveJulio);
})
promise.catch((resolveJulio)=>{
    console.log("errorazo");
})
const promiseBad = new Promise((resolve, reject) => {
    reject(new Error("Algo malo ha pasado"));
});
promiseBad.then((res) => {
    console.log("que bien lo pasamos");
});
//En este caso como la promesa retorma un reject si o si (es la unica linea de codigo) se pasara el error
//cuando haya una llamada al catch
promiseBad.catch((err) => {
    console.log('Tengo una llamada: ', err.message);
    // Tengo una llamada: 'Algo malo ha pasado'
});
