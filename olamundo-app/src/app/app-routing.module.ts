import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {ContatoComponent} from "./contato/contato.component";
import {InterpolacaoComponent} from "./interpolacao/interpolacao.component";
import {PropertyBindingComponent} from "./property-binding/property-binding.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'interpolacao', component: InterpolacaoComponent},
  {path: 'property-binding', component: PropertyBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
