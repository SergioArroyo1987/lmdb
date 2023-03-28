import { movie } from "./movie";
import { profesional } from "./profesional";
let a=new profesional("sergio Arroyo",35,100,1.65,true,"Inglaterra",3,"director");
let b=new profesional("Irene rubio",31,90,1.70,false,"España",0,"escritor");
let c=new profesional("juan pepe",49,105,1.65,true,"España",3,"actor");
let d=new profesional("benito",49,105,1.65,false,"Francia",3,"actor");
let pelicula=new movie("Piratas del caribe",10,"Ingles","aventura");

pelicula.director=a;
pelicula.writer=b;
pelicula.actors=[c,d];

pelicula.mostrarmovie();
