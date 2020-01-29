import { Representation } from './../models/representation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepresentationService {

  static URL = 'http://localhost:3000/representation/';
  static URL_AUTH = '';


  constructor(private http: HttpClient) { }



  getAll(): Observable<Representation[]> {
    return this.http.get<Representation[]>(RepresentationService.URL);
  }

  getRepresentationById(id): Observable<Representation> {
    return this.http.get<Representation>(RepresentationService.URL + id);
  }

  getRepresentationForVisitor(): Observable<Representation[]> {
    return this.http.get<Representation[]>(RepresentationService.URL + 'forMember');
  }

  createUser(newRepresentation) {
    return this.http.post(RepresentationService.URL, newRepresentation);
  }

  updateRepresentation(representationToUpdate) {
    const id = representationToUpdate.id;
    return this.http.put(RepresentationService.URL + id, representationToUpdate);
  }

  deleteRepresentation(id) {
    return this.http.delete(RepresentationService.URL + id);
  }
}
