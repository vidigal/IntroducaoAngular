import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  nome: string = "Victor Vidigal Ribeiro";
  imageURL: string = "https://picsum.photos/800/600";
  textoQualquer: string = "Isso daqui é um texto qualquer";

  constructor() { }

  ngOnInit(): void {
  }

  getIdade(): number {
    return 28;
  }

  getNumeroAleatorio(): number {
    return Math.random();
  }
}
