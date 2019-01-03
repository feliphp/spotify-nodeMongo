import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import {UserEditComponent} from './components/user-edit.component';

import {ArtistListComponet} from './components/artist-list.component';
import {ArtistAddComponet} from './components/artist-add.component';
import {ArtistEditComponet} from './components/artist-edit.component';
import {ArtistDetailComponet} from './components/artist-detail.component';

import {AlbumAddComponet} from './components/album-add.component';
import {AlbumEditComponet} from './components/album-edit.component';
import {AlbumDetailComponet} from './components/album-detail.component';

import {SongAddComponet} from './components/song-add.component';
import {SongEditComponet} from './components/song-edit.component';
import {PlayerComponent} from './components/player.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserEditComponent,
    ArtistListComponet,
    ArtistAddComponet,
    ArtistEditComponet,
    ArtistDetailComponet,
    AlbumAddComponet,
    AlbumEditComponet,
    AlbumDetailComponet,
    SongAddComponet,
    SongEditComponet,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
