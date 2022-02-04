let cadena = (x: number, y: number)=>{
    console.log(x + y);
}
//currificando
let cadenaCurrita=(x:number)=>(y:number)=>{
        console.log(x + y);
    }

let parcial=cadenaCurrita(5);
console.log("que hay en parcial "+parcial)
parcial(6);
cadenaCurrita(66)(88);