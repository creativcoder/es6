// ES6 Syntax Examples 

// -- Classes and Constructors

// class declared wih class keyword
class Product {}

class Config {
	// constructor being declared that takes one arguement
	constructor(config) {
		this._config = config;
	}
}

class ProductService {
	constructor(config) {
		this._config = config;
	}
	getProduct(id) {
		if(this._config.debugMode)
		{
			console.log('retrieving product for id' + id);
		}
		return new Product();
	}
}

class BasketService {
	constructor(config) {
		this._config = config;
	}
	addProduct(product) {
		if(this._config.debugMode) {
			console.log('adding product to basket %0',product);
		}
	}
}

let config = new Config(true);
let productService = new ProductService(config);
let basketService = new BasketService(config);

let product = productService.getProduct(1);
basketService.addProduct(product);
