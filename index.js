'use strict';

const got = require('got');
const cheerio = require('cheerio');

const apiEndpoint = 'https://play.google.com/store/apps/details?id=';

module.exports = appID => {
	return new Promise((resolve, reject) => {
		got(apiEndpoint + appID)
		.then(response => {
			const body = response.body;
			const $ = cheerio.load(body);
			const node = $('div:contains(Current Version)');
			resolve($(node).last().next('div').text());
		})
		.catch(err => {
			if (err.statusCode === 404) {
				reject(new Error('Could not find app'));
			} else {
				reject(err);
			}
		});
	});
};