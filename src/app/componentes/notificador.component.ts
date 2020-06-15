import { Component, OnInit } from '@angular/core';
import { ServicioMensajeService } from '../servicios/servicio-mensaje.service';

@Component({
  selector: 'app-notificador',
  templateUrl: './notificador.component.html',
  styleUrls: ['./notificador.component.css']
})
export class NotificadorComponent implements OnInit {
  mensaje:string;

  constructor(private servicioMensaje:ServicioMensajeService) {
    this.servicioMensaje.obtenerMensaje()
      .subscribe(mensaje=>{
        this.mensaje=mensaje;
      })
   }

  ngOnInit(): void {
  }

  
}
