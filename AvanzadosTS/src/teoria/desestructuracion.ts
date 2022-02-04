//supongamos un objeto basico cualquiera
var objeto = { a: 1, b: 2, c: 3 };
//puedo acceder a cualquiera de los atributos
console.log("del objeto " + objeto.a);
//pero tambien puedo desestructuralo (mismo nombre a los atrib)
var { a, b, c } = objeto;
console.log("desestruc de objetos " + a);
//Esto funciona de forma más clara en arrays
var array = [1, 2, 3];
console.log("del array " + array[0]);
var [x, y, z] = array;
console.log("desestruc del array" + x);
//podemos usar solo algunos valores usando el operador ...
var [x, ...rest] = array
console.log("desestruc 2 " + x);
console.log("desestruc 2  rest " + rest);
var [x] = array;
console.log("con la x "+x);
var [y,z] = array;
console.log("con la y "+y);
console.log("con la z "+z);