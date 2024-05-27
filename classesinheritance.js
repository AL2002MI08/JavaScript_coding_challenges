// Create classes named Product and DigitalProduct
class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }
    getDetails(){
        return `Product Name: ${this.name}, Price: ${this.price}`
    }
    applyDiscount(discount){
        let discountPrice = (this.price * discount) / 100
        let newPrice = this.price - discountPrice
        return newPrice.toFixed(2)
    }

};
class DigitalProduct extends Product{
    constructor(name, price, downloadLink){
        super(name, price)
        this.downloadLink = downloadLink;
    };
    getDetails(){
        return `${super.getDetails()}, DownloadLink: ${this.downloadLink}`
       
    }
}

const myProduct = new Product('Shirt', 20)
const newProduct = new DigitalProduct('shoes', 50, "http://www.examle.com")
console.log(myProduct.getDetails())
console.log(newProduct.getDetails())
console.log(`New price after 20% discount: $${newProduct.applyDiscount(20)}`)
