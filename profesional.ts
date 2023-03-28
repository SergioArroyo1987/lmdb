export class profesional{
    name:string;
    age:number;
    welght:number;
    height:number;
    isretired:boolean;
    nationality:string;
    oscarnumbers:number;
    profession:string;
    constructor(name:string,age:number,welght:number,height:number,isretired:boolean,nationality:string,oscarnumbers:number,profession:string){
        this.name=name;
        this.age=age;
        this.welght=welght;
        this.height=height;
        this.isretired=isretired;
        this.nationality=nationality;
        this.oscarnumbers=oscarnumbers;
        this.profession=profession;
    }
    mostrar(){
        for(let mostrare in this){
            if(mostrare!="mostrar"){
            console.log(mostrare+": "+this[mostrare]);
            }
            
        }
    }

}