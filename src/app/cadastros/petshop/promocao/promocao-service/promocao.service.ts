import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Petshop } from '../../petshop';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor(private bd: AngularFireDatabase) { }

  save(petshop: Petshop) {
    return this.bd.list("promocao").push(petshop)
  }
 getAll(){
   return this.bd.list("promocao").snapshotChanges()
   .pipe(
     map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()} )))
   )
 }
}
