import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // usuario = new Usuario();

  constructor() {}

  // constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

      //  createUsuario(): void{
      //   // this.usuarioService.createUsuario(this.usuario).subscribe(() => {
      //   // // this.usuarioService.showMessage('Criado!');
      //   var usuarioId = 123;
      //   this.router.navigate([ `/treinar/${usuarioId}`]);

      //  });
  }

