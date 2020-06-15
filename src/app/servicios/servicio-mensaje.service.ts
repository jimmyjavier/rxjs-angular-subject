import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {

  mensaje = new Subject<string>();

  constructor() { }

  obtenerMensaje():Observable<string>{
    return this.mensaje.asObservable();
  }

  actualizarMensaje(mensaje: string){
    this.mensaje.next(mensaje);
  }

}
