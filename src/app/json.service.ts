import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class JsonService {
    constructor( private http:HttpClient) {}

    getJsonPerosnajes(url:string){
        return this.http.get(url);
    }
}