import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Petshop } from './petshop';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PetshopService {

  constructor( private bd: AngularFireDatabase) {}
    
 save(petshop: Petshop) {
   return this.bd.list("petshop").push(petshop)
 }
getAll(){
  return this.bd.list("petshop").snapshotChanges()
  .pipe(
    map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()} )))
  )
}

}
