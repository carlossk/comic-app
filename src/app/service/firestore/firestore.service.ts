import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) {


  }
  public createHero(data: {nombre: string, url: string}) {
    return this.firestore.collection('heros').add(data);
  }
  public getHeroes() {
    return this.firestore.collection('heros').snapshotChanges();
  }
  public getHero(documentId: string) {
    return this.firestore.collection('heros').doc(documentId).snapshotChanges();
  }
  public updateHero(documentId: string, data: any) {
    return this.firestore.collection('heros').doc(documentId).set(data);
  }
}
