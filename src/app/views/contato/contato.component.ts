import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {


  public titulo!:string;
  public texto!:string;
  public tituloDestaque!: string;
  public textoDestaque!: string

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    let dados = `
    nome: ${form.value.nome};
    Email: ${form.value.email};
    telefone: ${form.value.telefone}`
    console.log(dados);
  }

}
