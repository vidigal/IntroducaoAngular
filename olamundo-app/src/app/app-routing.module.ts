import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import {ContatoComponent} from "./contato/contato.component";
import {InterpolacaoComponent} from "./interpolacao/interpolacao.component";
import {PropertyBindingComponent} from "./property-binding/property-binding.component";
import {EventBindingComponent} from "./event-binding/event-binding.component";
import {TwoWayBindingComponent} from "./two-way-binding/two-way-binding.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'interpolacao', component: InterpolacaoComponent},
  {path: 'property-binding', component: PropertyBindingComponent},
  {path: 'event-binding', component: EventBindingComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
