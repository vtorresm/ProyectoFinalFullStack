import { Component, OnInit } from '@angular/core';

import { FerreteriaService } from '../../services/ferreteria.service';
import { NgForm } from '@angular/forms';
import { Ferreteria } from '../../models/ferreteria';

declare var M: any;

@Component({
  selector: 'app-ferreteria',
  templateUrl: './ferreteria.component.html',
  styleUrls: ['./ferreteria.component.css'],
  providers: [ FerreteriaService ]
})
export class FerreteriaComponent implements OnInit {

  constructor(private ferreteriaService: FerreteriaService) { }

  ngOnInit() {
    this.getFerreterias();
  }

  addFerreteria(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.ferreteriaService.putFerreteria(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getFerreterias();
          M.toast({html: 'Actualizado correctamente'});
        });
    } else {
      this.ferreteriaService.postFerreteria(form.value)
      .subscribe(res => {
        this.getFerreterias();
        this.resetForm(form);
        M.toast({html: 'Guardado correctamente'});
      });
    }
  }

  getFerreterias() {
    this.ferreteriaService.getFerreterias()
      .subscribe(res => {
        this.ferreteriaService.ferreterias = res as Ferreteria[];
      });
  }

  editFerreteria(ferreteria: Ferreteria) {
    this.ferreteriaService.selectedFerreteria = ferreteria;
  }

  deleteFerreteria(_id: string, form: NgForm) {
    if (confirm('¿Seguro que quieres eliminar?')) {
      this.ferreteriaService.deleteFerreteria(_id)
        .subscribe(res => {
          this.getFerreterias();
          this.resetForm(form);
          M.toast({html: 'Eliminado correctamente'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ferreteriaService.selectedFerreteria = new Ferreteria();
    }
  }

}
