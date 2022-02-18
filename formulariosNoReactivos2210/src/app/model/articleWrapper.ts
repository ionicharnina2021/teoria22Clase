import { Article } from 'src/app/model/article';
import { Field } from './field';

export class ArticleWrapper {
    fields: Field[]=[];
    constructor(){
        let nombre={ 
            value: 0,
             input: {  name: 'nombre',  errorMessage: '',placeholder: 'el nombre', type: 'text'},
             validator: (value: any) => false
            }
        this.fields.push(nombre);
    }
  
//   create():Article{
//     //if valido
//     // return {name:this.nombre.value,precio...ArticleWrapper,existencias,,,}
//   }
}
