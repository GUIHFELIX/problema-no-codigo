import { Component, OnInit } from '@angular/core';
import { CadastroModel} from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent implements OnInit {

  cadastros: CadastroModel[];
  displayedColumns = ['id', 'usuario', 'senha', 'action'];

  constructor ( private cadastroService: CadastroService,
                private router: Router) { }

  ngOnInit(): void {
    this.cadastroService.read().subscribe(cadastros => {
      this.cadastros = cadastros
    })
    // console.log(this.cadastros);
  }

  cancelarCadastro(): void {
    this.router.navigate(['/cadastr/tabela'])
  }

  tabelaCadastro(): void {
    this.router.navigate(['/cadastro/tabela'])
  }
}
