
const  archivos=require('fs');
import { lmdb } from "./lmdb";
import { movie } from "./movie";
import { profesional } from "./profesional";
let a=new profesional("sergio Arroyo",35,100,1.65,true,"Inglaterra",3,"director");
let b=new profesional("Irene rubio",31,90,1.70,false,"España",0,"escritor");
let c=new profesional("juan pepe",49,105,1.65,true,"España",3,"actor");
let d=new profesional("benito",49,105,1.65,false,"Francia",3,"actor");
let pelicula1=new movie("Piratas del caribe",10,"Ingles","aventura");
let pelicula2=new movie("Titanic",25,"España","comedia");

pelicula1.director=a;
pelicula1.writer=b;
pelicula1.actors=[c,d];
pelicula2.director=a;
pelicula2.writer=b;
pelicula2.actors=[c,d];
let array=[pelicula1,pelicula2];
let datos=new lmdb(array);
let imprimir=JSON.stringify(datos);
archivos.writeFileSync("lmdbb.json",imprimir);
let cont=archivos.readFileSync("lmdbb.json","utf-8");
let nuevo=new lmdb([]);
nuevo.peliculas=(JSON.parse(cont).peliculas);
console.log(nuevo);
















