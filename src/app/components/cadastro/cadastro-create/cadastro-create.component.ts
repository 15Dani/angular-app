import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/model/cadastro.model';
import { CadastroService } from 'src/app/shared/cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro = new Cadastro();

  constructor(private cadastroService: CadastroService, private router: Router) { }
  ngOnInit(): void {
  }

    createCadastro(): void{
      //   // this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      //   // // this.usuarioService.showMessage('Criado!');
       let usuarioId = 123;
       this.router.navigate([ `/treinar/${usuarioId}`]);

      };
  }


