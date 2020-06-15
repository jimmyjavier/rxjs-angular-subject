import { Component, OnInit } from '@angular/core';
import { ServicioMensajeService } from '../servicios/servicio-mensaje.service';

@Component({
  selector: 'app-comunicador',
  templateUrl: './comunicador.component.html',
  styleUrls: ['./comunicador.component.css']
})
export class ComunicadorComponent implements OnInit {
  mensaje:string;
  constructor(private servicioMensaje:ServicioMensajeService) { }

  ngOnInit(): void {
  }


  enviarMensaje(mensaje:string){
    this.servicioMensaje.actualizarMensaje(mensaje);
  }


}
