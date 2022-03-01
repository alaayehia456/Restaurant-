export class Category {
    id:number;
    name:String;
    data_create:Date;
    data_update:Date;
    logo:String;

    constructor(id:number,name:String,data_create:Date,data_update:Date,logo:String){
        this.id=id;
        this.name=name;
        this.data_create=data_create;
        this.data_update=data_update;
        this.logo=logo;
    }

}
