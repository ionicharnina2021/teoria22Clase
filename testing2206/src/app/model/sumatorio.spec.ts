import { Sumatorio } from './sumatorio';
//Com oun archivo junit
describe("prueba funcion suma",()=>{
beforeEach(()=>{});
beforeAll(()=>{});
//Como en junit @Test
it("sumar dos positivos ",()=>{
 //valores iniciales (contexto de prueba)
 let uno=9,dos=8;
 let expected=17;
 //realizar la prueba sobre el SUT
 let actual=new Sumatorio().sumar(uno,dos);
 //comprobar resultado
 //aqui se usarian los asserts si fuese junit
 //expect retorna un objeto Matchers
 expect(actual).toEqual(expected);
})
it("suma dos negativo",()=>{
    //valores iniciales (contexto de prueba)
    let uno=-9,dos=-8;
    let expected=-17;
    let sumatorio=new Sumatorio();
    //realizar la prueba sobre el SUT
    let actual=sumatorio.sumar(uno,dos);
    //comprobar resultado
    //aqui se usarian los asserts si fuese junit
    //expect retorna un objeto Matchers
    expect(actual).toEqual(expected);
})
afterEach(()=>{});
})