// написати скрипт, який створює об'єкт Товар з
// властивостями:  назва, ціна, валюта
// методами: показати усю інформацію про товар,  установити знижку на ціну і повернути нову ціну з урахуванням знижки

const Product = function(name, price, currency,discount) {
  this.name = name;
  this.price = price;
  this.currency = currency;
  this.discount = discount;
}


function productMethod () {
  this.productInfo = function () {
    console.log (this.name, this.price, this.currency, this.discount)
  },
  this.discont = function () {
    if (this.price === 5300) {
      this.price = this.price - this.discount
      return this.price + this.currency
    }
  }
}
Product.prototype = new productMethod()

const telephone = new Product("Oppo A72", 5300, "$", 1300);


console.log(telephone.productInfo())
console.log(telephone.discont())


