import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-nieto',
  templateUrl: './componente-nieto.component.html',
  styleUrls: ['./componente-nieto.component.css']
})
export class ComponenteNietoComponent implements OnInit {
  @Input('mensajeNieto') mensaje:string;
  constructor() { }

  ngOnInit(): void {
  }

}
