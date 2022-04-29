import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RcLoadingComponent } from './components/rc-loading/rc-loading.component';
import { InputNameComponent } from './components/input-name/input-name.component';
import { DisplayPokemonComponent } from './components/display-pokemon/display-pokemon.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    RcLoadingComponent,
    InputNameComponent,
    DisplayPokemonComponent,
    ToggleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
