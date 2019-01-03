import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {Http, Response, Headers, Request, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class ArtistService{
    public url:string;

    constructor(private _http:Http){
        this.url = GLOBAL.url;
    }

    getArtists(token, page){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});

        return this._http.get(this.url+'artists/'+page, options)
                            .map(res => res.json());
    }

    getArtist(token, id: string){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});

        return this._http.get(this.url+'artist/'+id, options)
                            .map(res => res.json());
    }

    addArtist(token, artist){
        let params = JSON.stringify(artist);
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });
   
        return this._http.post(this.url+'artist', params,{headers: headers}).map(res => res.json());
    }

    editArtist(token, id: string, artist){
        let params = JSON.stringify(artist);
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });
        return this._http.put(this.url+'artist/'+id, params, {headers : headers})
                        .map(res => res.json());
    }

    deleteArtist(token, id: string){
        let headers = new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });
        let options = new RequestOptions({headers: headers});

        return this._http.delete(this.url+'artist/'+id, options)
                            .map(res => res.json());
    }
}