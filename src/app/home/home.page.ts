import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { PuntosBacheo } from '../_model/puntosBacheo';
import { RegistrarService } from '../services/registrar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitud: number;
  longitud: number;
  fecha: number;

  constructor( 
    public geolocation: Geolocation, 
    private registrarService: RegistrarService 
    ) {
  }

  getCoordenadas() {
    this.geolocation.getCurrentPosition().then((resp: Geoposition) => {
      /*this.latitud = resp.coords.latitude,
      this.longitud = resp.coords.longitude,
      this.fecha = resp.timestamp;*/

      /*const latitud = resp.coords.latitude;
      const longitud = resp.coords.longitude;

      console.log(latitud)
      console.log(longitud)*/

      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      this.fecha = resp.timestamp;
      console.log(this.latitud, this.longitud)
    }).catch((error) => {
      console.log('Error getting location', error);
    });   
  }

  registrarPunto() {
    let punto = new PuntosBacheo();
    punto.punLatitud = this.latitud.toString()
    punto.punLongitud = this.longitud.toString()

    this.registrarService.registrar(punto).subscribe();
    console.log(punto)
  }
}
