import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import user
import { HomeComponent } from './components/home.component';
import { UserEditComponent } from './components/user-edit.component';
import {ArtistListComponet} from './components/artist-list.component';
import {ArtistAddComponet} from './components/artist-add.component';
import {ArtistEditComponet} from './components/artist-edit.component';
import {ArtistDetailComponet} from './components/artist-detail.component';
// import albums
import {AlbumAddComponet} from './components/album-add.component';
import {AlbumEditComponet} from './components/album-edit.component';
import {AlbumDetailComponet} from './components/album-detail.component';
// import songs
import {SongAddComponet} from './components/song-add.component';
import {SongEditComponet} from './components/song-edit.component';

const appRoutes: Routes = [
    { path:'', component: HomeComponent},
    { path:'artistas/:page', component: ArtistListComponet},
    { path:'crear-artista', component: ArtistAddComponet},
    { path:'editar-artista/:id', component: ArtistEditComponet},
    { path:'artista/:id', component: ArtistDetailComponet},
    { path:'crear-album/:artist', component: AlbumAddComponet},
    { path:'editar-album/:id', component: AlbumEditComponet},
    { path:'album/:id', component: AlbumDetailComponet},
    { path:'crear-tema/:album', component: SongAddComponet},
    { path:'editar-tema/:id', component: SongEditComponet},
    { path:'mis-datos', component: UserEditComponent},
    { path:'**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);