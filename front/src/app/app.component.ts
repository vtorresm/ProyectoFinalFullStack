import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';
import { environment } from '../environments/environment';
// import * as io from 'socket.io-client';

interface IRegistro {
  titulo: string;
  descripcion?: string;
  foto?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registro: IRegistro;
  // tslint:disable-next-line:no-inferrable-types
  avance: number = 0;
  /* socketio: any;
  hora: any; */

  constructor(private http: HttpClient) {
    // this.socketio = io.connect();
  }

  ngOnInit() {
    /* this.socketio.on('hora', data => {
      this.hora = data;
    });
    this.registro = { titulo: '', descripcion: '', foto: ''}; */
  }

  grabar(titulo: string, descripcion: string) {
    this.registro.titulo = titulo;
    this.registro.descripcion = descripcion;

    const fd: FormData = new FormData();
    fd.append('titulo', this.registro.titulo);
    fd.append('descripcion', this.registro.descripcion);
    // tslint:disable-next-line:curly
    if (this.registro.foto) fd.append('foto', this.registro.foto);

    const req = new HttpRequest('post', environment.apiRest, fd, {
      reportProgress: true
    });

    this.http.request(req)
      .subscribe(
      evento => {
        if (evento.type === HttpEventType.UploadProgress) {
          this.avance = Math.floor(evento.loaded / evento.total * 100);
          console.log(`Avance ${this.avance}`);
        } else if (evento.type === HttpEventType.Response) {
          console.log('Archivo subido');
        } else {
          console.log(evento.type);
        }
      },
      error => console.log(error)
      );


    /*this.http.post(environment.apiRest, fd, {
      observe: "body",
      responseType: "json"
    })
      .subscribe(
      data => console.log(data),
      error => console.log(error)
      )*/
  }

  archivoAgregado(data: any) {
    const archivos: any = data.srcElement.files;

    this.registro.foto = archivos[0];
  }
}
