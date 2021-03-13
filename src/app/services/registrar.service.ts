import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { PuntosBacheo } from '../_model/puntosBacheo';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  HOST: string = `${environment.URL_PUNTOS}/registrar`;

  constructor( private http: HttpClient ) { }

  registrar(punto: PuntosBacheo) {
    return this.http.post(this.HOST, punto);
  }
}
