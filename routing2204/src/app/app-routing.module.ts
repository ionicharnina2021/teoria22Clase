import { MovilesComponent } from './components/moviles/moviles.component';
import { PasarObjetoComponent } from './components/pasar-objeto/pasar-objeto.component';
import { PasandoDosComponent } from './components/pasando-dos/pasando-dos.component';
import { PasarValorComponent } from './components/pasar-valor/pasar-valor.component';
import { RouterProgramaticoComponent } from './components/router-programatico/router-programatico.component';
import { UnoComponent } from './components/uno/uno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'uno',component:UnoComponent},
  {path:'routerpro',component:RouterProgramaticoComponent},
  {path:'pasarvalor/:valor',component:PasarValorComponent},
  {path:'pasarvalorDos/:uno/:otro',component:PasandoDosComponent},
  {path:'queryParams',component:PasarObjetoComponent},
  {path:'moviles',component:MovilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
