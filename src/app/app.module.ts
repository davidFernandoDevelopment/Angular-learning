import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosModule } from './heros/heros.module';
import { ContadorModule } from './contador/contador.module';
import { DragonBallModule } from './dragon-ball/dragon-ball.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    ContadorModule,
    DragonBallModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
