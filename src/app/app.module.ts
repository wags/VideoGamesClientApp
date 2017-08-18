import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { VideoGameAddComponent } from './video-game-add/video-game-add.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    VideoGameAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
