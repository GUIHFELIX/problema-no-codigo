import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo!:string;
  public texto!:string;
  public tituloDestaque!: string;
  public textoDestaque!: string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados = `
      nome: ${form.value.nome}
      senha: ${form.value.senha}`;
      console.log(dados);
   }

}
