import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// Might be alittle overkill...
// works with the local storage 

export class LocalStorageService {

  constructor() {

   }

   saveToLocalStorage(key:string, value:any):void{
    localStorage.setItem(key,value);
   }

   getItemFromStorage(key:string){
    return localStorage.getItem(key);
   }

   clearAllLocalStorage():void{
    localStorage.clear()
   }
  
}
