import { Observable } from 'rxjs';

export interface Read<I,O>{
      //get 
       get():Promise<Observable<O>>|Observable<O>;


}