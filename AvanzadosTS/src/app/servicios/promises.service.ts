import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PromisesService {
  constructor() {}
  //promises2
  getSum(n1: number, n2: number):Promise<number> {
    let isAnyNegative = function () {
      return n1 < 0 || n2 < 0;
    }
    //promesa un tanto gratuita solo para fines escolares
    let promise=new Promise<number>((resolve,reject)=>{
      if(isAnyNegative()){
        reject(Error("no me gustan los negativos"))
      }
      resolve(n1+n2)
    })
    return promise;
  }
  hazDos(){
    let uno=4,dos=-4;
    this.getSum(uno,dos)
    .then(
      (resultado)=>
      console.log("resultado correcto ",resultado))
    .catch(
      (error)=>
      console.log("error "+error));
  }
  hazTres(){
    this.getSum(5, 6).then(() => console.log("que bien"));
    this.getSum(5, -6).catch(() => console.log("que mal"));
    this.getSum(-6, 6).then(() => console.log("que bien to junto"),
()=> console.log("que mal to junto"));
  }
  //Promises 1
  haz() {
    let promise = new Promise((resolve, reject) => {
      //se retorna un valor de referencia
      resolve(123);
    });

    //la resolucion de la promesa
    //then es la encargada de el tratamiento de la promesa si esta es fullfilled
    promise.then((resolveJulio) => {
      console.log('resolve(123) ', resolveJulio);
    });
    promise.catch((resolveJulio) => {
      console.log('errorazo');
    });
    const promiseBad = new Promise((resolve, reject) => {
      reject(new Error('Algo malo ha pasado'));
    });
    promiseBad.then((res) => {
      console.log('que bien lo pasamos');
    });
    //En este caso como la promesa retorma un reject si o si (es la unica linea de codigo) se pasara el error
    //cuando haya una llamada al catch
    promiseBad.catch((err) => {
      console.log('Tengo una llamada: ', err.message);
      // Tengo una llamada: 'Algo malo ha pasado'
    });
  }
}
