import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Aprendendo Angular 14',
      autoria: 'Ivan',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Aprendendo Angular 14',
      autoria: 'Ivan',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
