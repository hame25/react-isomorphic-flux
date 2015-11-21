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

			$('#catalogue-nav .departments > li:not(.first)').each(function (i, element) {
				let item = {};
				let name = $(element).find('a').html().trim();

				let subCat = $(element).find('ul.categories-l1 > li');
				let subCatArray = [];

				subCat.each(function (i, element) {
					let item = {};
					item.name = $(element).find('a.category-heading').text();
					item.url = 'wwww.google.com';

					if(item.name) {
						subCatArray.push(item);
					}
				});
		
				item.name = name;
				item.url = 'wwww.google.com';
				item.subCats = subCatArray;

				taxonomyArray.push(item);

			})
			res.send({taxonomy: taxonomyArray});
		});
});

export default router;