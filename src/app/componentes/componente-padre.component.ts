import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit {
  @Input() mensaje:string;
  constructor() { }

  ngOnInit(): void {
  }

}
