import Express from 'express';
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

let router = Express.Router();

router.get('/', (req, res) => {
  
	fetch('http://www.tesco.com/direct/')
		.then((response) => {
			return response.text();
		})
		.then((output) => {
			let $ = cheerio.load(output);

			let taxonomyArray = [];

			$('#catalogue-nav .departments > li:not(.first) > a').each(function (i, element) {
				let item = {};

				item.name = this.children[0].data;
				item.url = 'wwww.google.com';

				taxonomyArray.push(item);

			})
			res.send({taxonomy: taxonomyArray});
		});
});

export default router;