import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute // De onde eu pego os parâmetros da rota
  ) { }

  excluirPensamento() {
    this.service.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate(['listarPensamento']);
    });
  }

  cancelar() {
    this.router.navigate(['listarPensamento']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    // A exclamação assume que o id nunca será nulo
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

}
