import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() {



     this.contarTres().then(
      mensaje  => console.log('Termino', mensaje)
    )
    .catch ( error => console.error('Error en la promesa', error));

   }

  ngOnInit(): void {
  }

  contarTres(): Promise<boolean> {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( (resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {
          contador += 1;
          console.log(contador);

          if ( contador === 3) {
              resolve(true);

             // reject('Simplemente un error'); // para mostrar condicion error es el reject
              clearInterval(intervalo);
          }
      }, 1000);
  });


  }

}
