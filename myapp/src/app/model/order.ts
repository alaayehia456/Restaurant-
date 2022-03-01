export class Order {
    id:number;
    name:String;
    data_create:Date;
    data_update:Date;
    description:String;
    img:String;
    price:Number;

    constructor(id:number,name:String,data_create:Date,data_update:Date,description:String,image:String,price:Number){
        this.id=id;
        this.name=name;
        this.data_create=data_create;
        this.data_update=data_update;
        this.description=description;
        this.img=image;
        this.price=price;
    }


}
