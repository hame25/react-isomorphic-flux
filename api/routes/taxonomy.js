import Express from 'express';

let router = Express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
  	taxonomy: [
  		{name: 'Technology', url: 'wwww.google.com'},
  		{name: 'Home and garden', url: 'www.facebook.com'}
  	]
  });
});

export default router;