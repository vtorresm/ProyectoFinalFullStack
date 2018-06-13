import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ferreteria } from '../models/ferreteria';

@Injectable({
  providedIn: 'root'
})
export class FerreteriaService {

  selectedFerreteria: Ferreteria;
  ferreterias: Ferreteria[];

  readonly URL_API = 'http://localhost:3000/api/ferreteriasProd';

  constructor(private http: HttpClient) {
    this.selectedFerreteria = new Ferreteria();
  }

  postFerreteria(ferreteria: Ferreteria) {
    return this.http.post(this.URL_API, ferreteria);
  }

  getFerreterias() {
    return this.http.get(this.URL_API);
  }

  putFerreteria(ferreteria: Ferreteria) {
    return this.http.put(this.URL_API + `/${ferreteria._id}`, ferreteria);
  }

  deleteFerreteria(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
