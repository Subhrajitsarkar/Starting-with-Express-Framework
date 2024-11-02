const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

// Exporting the getProducts function to use in other parts of the application (like routes)
exports.getProducts = (req, res, next) => {

  // Fetch all products from the Product model
  Product.fetchAll(products => {

    // Render the 'shop' view and pass data to it
    res.render('shop', {
      prods: products,               // List of products to display
      pageTitle: 'Shop',             // Title of the page
      path: '/',                     // Current path for navigation or highlighting in templates
      hasProducts: products.length > 0,  // Boolean to check if there are products to show
      activeShop: true,              // Activates specific CSS styling for the shop view (optional)
      productCSS: true               // Additional styling for product-related elements (optional)
    });
  });
};

