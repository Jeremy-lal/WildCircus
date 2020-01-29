import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from './../models/user';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL_AUTH = '';
  static URL = 'http://localhost:3000/users/';

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
    return this.http.post(UserService.URL_AUTH + 'signin', user, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.currentUser = response.body;
        console.log(this.currentUser);
        return response.body;
      }));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL);
  }

  createUser(newUser) {
    return this.http.post(UserService.URL_AUTH + 'signup', newUser);
  }

  updateUser(userToUpdate) {
    const id = userToUpdate.id;
    return this.http.put(UserService.URL + id, userToUpdate);
  }

  deleteUser(id) {
    return this.http.delete(UserService.URL + id);
  }
}
