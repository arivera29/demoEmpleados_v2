export class Empleado {
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    foto: String;
    estadoCivil:number;
    hermanos:boolean;

    constructor() {
        this.id = 0;
        this.nombre="";
        this.apellido = "";
        this.fechaNacimiento = new Date();
        this.foto = "";
        this.estadoCivil = 1;
        this.hermanos = false;
    }
}
