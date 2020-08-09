export class Archivo {
    id: number;
    FilePath: string;
    FileName: string;
    Directory: string;
    Origen: string;
    Destino: string;
    Fecha: Date;
    Playing: boolean;
    constructor(){
        this.Playing = false;
    }
}