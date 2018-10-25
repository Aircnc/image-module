const faker = require('faker');
const request = require('request');
const db = require('./index.js');

let randomImg;
let urls = [];
let listingImages = [];


let generateRandomUrls = (num) => {
	for (let i = 0; i < num; i++) {
		let randomInt = (Math.floor(Math.random() * 20));
		urls.push(`https://s3-us-west-1.amazonaws.com/hopping-couch-images/listingImages/image${randomInt}.jpg`);		
	}
	return urls;
};

let generateRandomUrl = () => {
	let randomInt = (Math.floor(Math.random() * 20));
	return `https://s3-us-west-1.amazonaws.com/hopping-couch-images/listingImages/image${randomInt}.jpg`;		
};

let randomImageObj = () => {

	let obj = {};

	obj.description = faker.lorem.sentence();
	obj.imageUrl = generateRandomUrl();
	obj.verified = faker.random.boolean();

	return obj;
};

let generateImages = () => {

	let images =[];
	let randomInt = (Math.floor(Math.random() * 5) + 1);

	for (let i =0; i < randomInt; i++) {
		images.push(randomImageObj());
	}

	return images;
};


db.Images.deleteMany({})
.then (() => {

	for (let i = 0; i < 100; i++) {
		listingImages.push(
			{
			listingId: faker.random.uuid(),
			images: generateImages()
			}
		);
	}

		db.Images.create(listingImages)
		.then ((listingImages) => {
			console.log('\n\n\n\n OK \n\n\n\n\n');

			db.Images.find({})
			.then((listingImages) => {
				console.log(listingImages);
				db.mongoose.disconnect();

			});
		}). catch ((err) =>{
			throw err;
		});

});







