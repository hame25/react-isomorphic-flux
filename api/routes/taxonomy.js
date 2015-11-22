import Express from 'express';
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

let router = Express.Router();

function getSubCategories (elements, selector, hasSubCats) {

	let subCatArray = [];
	console.log(elements.length);

	elements.each(function (i, element) {

		console.log('in function');
		let item = {};

		let tag = $(element).find(selector);
		let url = tag.attr('href');

		item.name = tag.text();
		item.url = 'www.google.com';

		if(typeof(url) === 'string') {
			item.id = url.split('/').pop().split('.')[0]
		}

		/*if(hasSubCats) {
			getSubCategories()
		}*/

		if(item.name && item.id) {
			subCatArray.push(item);
		}
	});
	return subCat2Array;
}

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
					let tag = $(element).find('a.category-heading');
					item.name = tag.text();

					let url = tag.attr('href');

					if(typeof(url) === 'string') {
						//console.log(url.split('/').pop().split('.')[0]);
						item.id = url.split('/').pop().split('.')[0]
					}
						
					item.url = 'www.google.com';

					let subCat2 = $(element).find('ul.categories-l2 > li');
					//console.log(subCat2.length)
					//let subCats = getSubCategories (subCat2, 'a', false);

					//item.subCats = subCats;

					let subCat2Array = [];

					subCat2.each(function (i, element) {
						let item = {}
						let tag =  $(element).find('a');
						item.name = tag.text();


						let url = tag.attr('href');

						if(typeof(url) === 'string') {
							//console.log(url.split('/').pop().split('.')[0]);
							item.id = url.split('/').pop().split('.')[0].replace('cat', '');	
						}
							
						item.url = 'www.google.com';

						if(item.name && item.id) {
							subCat2Array.push(item);
						}
					})

					item.subCats = subCat2Array;

					if(item.name && item.id) {
						subCatArray.push(item);
					}
				});
				
				item.id = 123
				item.name = name;
				item.url = 'wwww.google.com';
				item.subCats = subCatArray;

				taxonomyArray.push(item);

			})
			res.send({taxonomy: taxonomyArray});
		});
});

export default router;