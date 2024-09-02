type Size = "" | "s" | "m" | "l" | "xl";

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){}

  toString() {
    // No Dry
    if ( this.name.length <= 0 ) throw new Error("name is empty");
    if ( this.price <= 0 ) throw new Error("price is empty");
    if ( this.size.length <= 0 ) throw new Error("size is empty");

    return `${ this.name }`
  }

}

(() => {

  const bluePants = new Product("Blue Large Pants")

})();