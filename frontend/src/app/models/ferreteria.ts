export class Ferreteria {

    constructor(_id = '', nomProdFerreteria = '', descripcion = '', marca = '', precio = 0) {
        this._id = _id;
        this.nomProdFerreteria = nomProdFerreteria;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio;
    }

    _id: string;
    nomProdFerreteria: string;
    descripcion: string;
    marca: string;
    precio: number;
}
