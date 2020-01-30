import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from './../models/user';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL_AUTH = 'http://localhost:3000/auth/';
  static URL = 'http://localhost:3000/users/';

  // currentUser: User = {
  //   id: 1,
  //   firstname : 'jeremy',
  //   lastname: 'lalait',
  //   email: 'jlalait33700@gmail.com',
  //   password: '1234',
  //   status: true,
  //   representation: []
  // };

  currentUser: User;


  constructor(private http: HttpClient) { }

  public getMe() {
    return this.http.get(UserService.URL + 'user/me').pipe(
      tap((user: User) => {
        this.currentUser = user;
      })
    );
  }

  public isLogged(): Observable<boolean> {
    return this.getMe().pipe(
      map((user: User) => {
        return (user != null);
      }
      ));
  }


  public connexion(user: User) {
    // return this.http.post(UserService.URL_AUTH + 'signin', user, { observe: 'response' }).pipe(
    //   tap((response: HttpResponse<any>) => {
    //     const token = response.headers.get('JWT-TOKEN');
    //     localStorage.setItem('JWT-TOKEN', token);
    //     this.currentUser = response.body;
    //     console.log(this.currentUser);
    //     return response.body;
    //   }));
    return this.http.get<User>(UserService.URL + 1);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL);
  }

  createUser(newUser) {
    return this.http.post(UserService.URL_AUTH + 'signup', newUser);
  }

  updateUserRepresentation(userId: number, representationId: number) {
    const objToSend = {
      userId,
      representationId
    };
    return this.http.post(UserService.URL + 'representation', objToSend);
  }

  deleteUser(id) {
    return this.http.delete(UserService.URL + id);
  }
}
