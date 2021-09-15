import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imageURL: string = "https://picsum.photos/200/200";
  marcado: boolean = false;
  classe_titulo: string = "titulo_vermelho";

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.marcado = !this.marcado;
    }, 1000)

    setInterval(() => {
      if (this.classe_titulo == 'titulo_vermelho') {
        this.classe_titulo = 'titulo_azul';
      } else {
        this.classe_titulo = 'titulo_vermelho';
      }
    }, 1000);

  }

}
