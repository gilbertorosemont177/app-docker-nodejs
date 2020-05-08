import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Read  } from "./serviceread";
import { Write } from "./servicewrite";
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class Repository <I,O> implements Read<I,O>,Write {
    //user {}
    //achats {}
    //repository 
    //get=>demande request Object
    //return=>Object
    //DANS LE SERVICE ON MODIFIE L'OBJET RETOUR DUN DTO
        //de ce retour on retourne un object DTO
        //sauvegarde le vrai resultdans une instance
        //constructor(private httpClient: HttpClient) { }
    constructor(private httpClient: HttpClient) { }
    
     async get():Promise<Observable<O>>{
        const httpOptions = {
            headers: new HttpHeaders({ 
              'Access-Control-Allow-Origin':'*',
              'Authorization':'authkey'
            })
          };
        return await Promise.resolve(this.httpClient.get<O>("test"));;
    }    

}