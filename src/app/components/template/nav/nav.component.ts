import { UsuarioService } from './../../../shared/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuario =new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  /* createUsuario(){
       let cadastro = {
        nome: "dani",
        email:"da@bol.com.br",
        idade: 12,
        iDHM: "teste",
        instrucao: "superior",
        anosdeescolaridade: 20,
        genero: "F",
        later: "teste",
        duracao: 20
       };
       this.usuarioService.createUsuario(cadastro); */

       createUsuario(): void{
        let cadastro = new Usuario();
        cadastro.nome = "testes";
        this.usuarioService.createUsuario(cadastro).subscribe(() => {
        this.usuarioService.showMessage('Criado!')
       });
  }
}
