class Product{
    id: number;
    name: string;
    price: number;
    image: string;

    constructor(id=0, name="", price=0, image=""){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

export default Product;