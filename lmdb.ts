import { movie } from "./movie";
const  archivos=require('fs');
export class lmdb{
    peliculas:movie[];
    constructor(a:movie[]){
        this.peliculas=a;
    }
    escribirficherojson(a:string){
        let imprimir=JSON.stringify(this.peliculas);
        archivos.writeFileSync(a,imprimir);
    }
    obtenerinstancialmdb(a:string):lmdb{
        let cont=archivos.readFileSync("a","utf-8");
        let nuevo=new lmdb([]);
        nuevo.peliculas=(JSON.parse(cont).peliculas);
        return nuevo;
    }
}
