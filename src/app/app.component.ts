import { Component } from '@angular/core';
import { ServicioMensajeService } from './servicios/servicio-mensaje.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-rxjs';
  mensaje:string;
  //suscription: Subscription;
  /**
   *
   */
  constructor(private servicioMensaje:ServicioMensajeService) {    
    this.servicioMensaje.obtenerMensaje()
    .subscribe(mensaje => {
      this.mensaje = mensaje;
    })
  }
}
