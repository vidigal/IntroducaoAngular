import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  texto: string = '';
  nome: string = '';
  marcado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  iptTextoOnInput(value: string) {
    this.texto = value;
  }

}
