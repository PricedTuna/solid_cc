(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct( id: number ) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct( product: Product ) {
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    notifyClients() {
      console.log("Enviando correo a los clientes");
    }
  }


  class ProductBloc {
    private mailer: Mailer;
    private productService: ProductService;

    constructor(productService: ProductService, mailer: Mailer){
      this.mailer         = mailer;
      this.productService = productService;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct( id );
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      this.productService.saveProduct( product );
    }

    notifyClients() {
      this.mailer.notifyClients();
    }

  }

  class CartBloc {
    AddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const mailer = new Mailer();
  const productService = new ProductService();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBlock = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBlock.AddToCart(10);
})();
