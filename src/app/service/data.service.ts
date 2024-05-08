import { Injectable } from '@angular/core';
import { collection, Firestore, collectionData, doc, deleteDoc, addDoc, updateDoc } from '@angular/fire/firestore';
  
export interface Donut{
  id?: number;
  imgUrl: string;
  name: string;
  price: string;
}

export interface User{
  email: string;
  password: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getUsers() {
    const usersRef = collection(this.firestore,'users');
    return collectionData(usersRef, {idField: 'id'});
  }

  addUser(user: User) {
    const usersRef = collection(this.firestore, 'users');
    return addDoc(usersRef,user); 
  }

  getDonuts() {
    const donutsRef = collection(this.firestore,'donuts');
    return collectionData(donutsRef, {idField: 'id'});
  }

  deleteDonut(id:string) {
    const donutRef = doc(this.firestore,`donuts/${id}`);
    return deleteDoc(donutRef);
  }

  addDonut(donut: Donut) {
    const donutRef = collection(this.firestore,'donuts');
    return addDoc(donutRef,donut);
  }

  editDonut(donut: Donut) {
    const donutRef = doc(this.firestore,`donuts/${donut.id}`);
    return updateDoc(donutRef,{
      imgUrl: donut.imgUrl,
      name: donut.name,
      price: donut.price,
    });
  }

}
