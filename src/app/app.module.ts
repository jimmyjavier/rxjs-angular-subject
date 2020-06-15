import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentePadreComponent } from './componentes/componente-padre.component';
import { ComponenteHijoComponent } from './componentes/componente-hijo.component';
import { ComponenteNietoComponent } from './componentes/componente-nieto.component';
import { ComunicadorComponent } from './componentes/comunicador.component';
import { NotificadorComponent } from './componentes/notificador.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    ComponenteNietoComponent,
    ComunicadorComponent,
    NotificadorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
