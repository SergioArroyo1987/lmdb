import { profesional } from "./profesional";
export class movie{
    title:string;
    releaseyear:number;
    actors:profesional[]=[];
nacionality:string;
director:profesional;
writer:profesional;
language:string;
plataforma:string;
isMCU:boolean;
mainCharacterName:string;
producer:string;
distributor:string;
genre:string;
constructor(title:string,releaseyear:number,nacionality:string,genre:string){
    this.title=title;
    this.releaseyear=releaseyear;
    this.nacionality=nacionality;
    this.genre=genre;
    
}
mostrarmovie(){
    
    console.log(this.title);
    console.log(this.releaseyear);
    for(let a=0;a<this.actors.length;a++){
        this.actors[a].mostrar();
    }
    console.log(this.nacionality);
    this.director.mostrar();
    this.writer.mostrar();
    console.log(this.language);
    console.log(this.plataforma);
    console.log(this.isMCU);
    console.log(this.mainCharacterName);
    console.log(this.producer);
    console.log(this.distributor);
    console.log(this.genre);
    
    }
}
