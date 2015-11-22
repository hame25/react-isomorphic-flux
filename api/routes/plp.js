import Express from 'express';
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

//view-source:http://www.tesco.com/direct/blocks/catalog/productlisting/infiniteBrowse.jsp?catId=4294960209&sortBy=1&searchquery=&offset=40

let router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
  	products: [
  		{
        id: 1,
  			name: 'Battlefield 4: Standard Edition (PS3)', 
  			price: '5.00',
  			image: {
  				url: 'http://tesco.scene7.com/is/image/tesco/604-8904_PI_1000025MN?wid=170&hei=170&$Offers$'
  			},
  			qtyInBasket: 0,
  			inStock: true
  		},
  		{
        id: 1234,
  			name: 'FIFA 16 PS3', 
  			price: '40.00',
  			image: {
  				url: 'http://tesco.scene7.com/is/image/tesco/605-5850_PI_66650MN?wid=170&hei=170&$Offers$'
  			},
  			qtyInBasket: 0,
  			inStock: true
  		},
  		{
        id: 3,
  			name: 'Call of Duty: Black Ops 3 PS3',
  			price: '40.00',
  			image: {
  				url: 'http://tesco.scene7.com/is/image/tesco/691-6106_PI_66650MN?wid=170&hei=170&$Offers$'
  			},
  			qtyInBasket: 0,
  			inStock: true	
  		}
  	]
  });
});

router.get('/:id', (req , res) => {
  fetch('http://www.tesco.com/direct/cat/subcat/cat' + req.params.id + '.cat')
    .then((response) => {
      return response.text();
    })
    .then((output) => {
      let $ = cheerio.load(output);
      //res.send(output);

      let productArray = []

      $('ul.products li.product-tile').each(function(i, element){
        
        let priceNode = $(this).find('.price').text();
        let price = priceNode.replace(/£|From/, '');

        let catId = $(this).find('input[name="/atg/commerce/order/purchase/CartModifierFormHandler.catalogRefIds"]').val();
        let url = $(this).find('a.thumbnail').attr('href');

        let product = {}
        product.id = $(this).attr('id').split('_')[1];
        product.catId = catId;
        product.name = $(this).find('h3 a').text();
        product.description = product.title;
        product.price = parseFloat(price),
        product.unitPrice = parseFloat(price),
        product.image = {}
        product.image.url = $(this).find('.thumbnail img').attr('src');
        product.inStock= true;
        product.isInFavourites = false;
        product.unitOfMeasure = 'each';
        product.displayType = 'Quantity';
        product.averageWeight = 1;
        product.bulkBuyLimit = 99;
        product.url = url;

        productArray.push(product);
      });

      res.send({products: productArray});
    });

});


export default router;