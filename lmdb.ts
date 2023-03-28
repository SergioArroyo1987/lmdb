import { movie } from "./movie";

export class lmdb{
    peliculas:movie[];
    constructor(a:movie[]){
        this.peliculas=a;
    }
}