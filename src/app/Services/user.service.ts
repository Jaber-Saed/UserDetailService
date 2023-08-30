import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { name: "Alii", job: "Doctor", gender: "Male", country: "Jordan", age: 35, avatar: "../../assets/um.png" },
    { name: "Sara", job: "Doctor", gender: "Female", country: "Jordan", age: 25, avatar: "../../assets/uf.png" },
    { name: "Bader", job: "Doctor", gender: "Male", country: "Jordan", age: 27, avatar: "../../assets/um.png" },
    { name: "Nour", job: "Doctor", gender: "Female", country: "Jordan", age: 24, avatar: "../../assets/uf.png" },
  ]

  constructor() { }

  OnShowDetailsClicked = new EventEmitter<{ name: string, job: string, gender: string, country: string, age: number, avatar: string }>();


  ShowUserDetails(user: { name: string, job: string, gender: string, country: string, age: number, avatar: string }) {
    this.OnShowDetailsClicked.emit(user)
  }

}
