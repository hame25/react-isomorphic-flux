import Express from 'express';

let router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
  	products: [
  		{
  			name: 'Battlefield 4: Standard Edition (PS3)', 
  			price: '5.00',
  			image: {
  				url: 'http://tesco.scene7.com/is/image/tesco/604-8904_PI_1000025MN?wid=170&hei=170&$Offers$'
  			},
  			qtyInBasket: 0,
  			inStock: true
  		},
  		{
  			name: 'FIFA 16 PS3', 
  			price: '40.00',
  			image: {
  				url: 'http://tesco.scene7.com/is/image/tesco/605-5850_PI_66650MN?wid=170&hei=170&$Offers$'
  			},
  			qtyInBasket: 0,
  			inStock: true
  		},
  		{
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

export default router;