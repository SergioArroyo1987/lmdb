const readlineSync=require('readline-sync');
const fs = require('fs');
import { profesional } from "./profesional";
import { lmdb } from "./lmdb";
import { movie } from "./movie";
 let nombre=readlineSync.question("Introduca nombre:");
 let age=readlineSync.question("Introduca edad:");
 let welght=readlineSync.question("Introduca peso:");
 let height=readlineSync.question("Introduca altura:");
 let isretired=readlineSync.question("¿Retirado?");
 let nationality=readlineSync.question("Nacionalidad:");
 let oscarnumber=readlineSync.question("numero de oscar:");
 let profe=readlineSync.question("Profesion:");
 let nuevo=new profesional(nombre,age,welght,height,isretired,nationality,oscarnumber,profe);
 let archivo=new lmdb([]);
 archivo.obtenerinstancialmdb("lmdbb.json");
 archivo.peliculas[0].actors.push(nuevo);
 archivo.escribirficherojson("lmdbb.json");

 
 
 
 
 
 
 
 
 