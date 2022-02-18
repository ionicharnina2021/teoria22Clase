import { AAAComponent } from './../../../../modulos2202/src/app/primer/aaa/aaa.component';
import { InputForm } from './inputForm';
import { Article } from './article';
export class ArticleValidator {
  public inputForm!: InputForm[];
  public value!: Article;

  constructor(private article: Article) {
    this.value = article;
    this.inputForm= [
        {
          name: this.value.nombre,
          type: 'text',
          placeholder: 'nombre del produto',
          errorMessage: 'nombre erroneo',
        },
        {
          name: this.value.precio.toString() ,
          type: 'number',
          placeholder: 'precio del produto',
          errorMessage: 'valor no valido',
        },
        {
          name: this.value.existencias.toString(),
          type: 'number',
          placeholder: 'existencias',
          errorMessage: 'cantidad no correcta',
        },
      ];
  }
}
