import { Injectable } from '@angular/core';
import { Read } from '../repository/serviceread';
import {Repository } from "../repository/repository";
import { IUserInterface } from './user.interface';
import { IUserDto } from './user.dto';
import { Observable } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
@Injectable({providedIn: 'root'})

export class UserService implements Read<IUserInterface,IUserDto> {
    
    
    constructor(private repository: Repository<IUserInterface,IUserDto> ) { }
    
       async get():Promise<Observable<IUserDto>>{
            const getRequestApi= await this.repository.get()
    
        return getRequestApi.pipe(tap((result)=>{
            console.log(result)
            return result;
        }),
        map((result)=>{
        return result;
        }),
        tap((result)=>{
            console.log(result);
        }
        ))
    }


    
}


// ici on peut modifier lobjet dont on transforme en interface DTO OBJET COMME CA ON FAIT MOINS 
//tap modifie pas l<object
//map