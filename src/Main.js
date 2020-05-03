let axios = require("axios");
let cheerio = require("cheerio");
const xlsx = require("xlsx");
const fs = require("fs");
const workBook = xlsx.utils.book_new();

const address = [
				 ["https://news.joins.com/sports?cloc=joongang-section-gnb7", 'Sports'],
				 ["https://news.joins.com/world?cloc=joongang-section-gnb5", 'World'], 
				 ["https://news.joins.com/society?cloc=joongang-section-gnb4", 'Society'],
				 ["https://news.joins.com/politics?cloc=joongang-section-gnb2", 'Politices'],
				 ["https://news.joins.com/money?cloc=joongang-home-gnb3", 'Money'] 
				]

const joongang_News = (address, name) => {
	let getHtml = async()=>{
		try{
			return await axios.get(address);
		} catch (error){
		console.error(error)
		}
	};

	var wscols = [
		{wch:63},
		{wch:70},
		{wch:34},
		{wch:14}
	];
	getHtml().then(html => {
		let ulList = [];
		let $ = cheerio.load(html.data);
		let $bodyList = $("div.list_basic.list_sectionhome ul").children("li");
		$bodyList.each(function(i, elem){ ulList[i]={
			Title: $(this).find('h2.headline a').text(),
			Sort: $(this).find('span.lead a').text(),
			Url: $(this).find('h2.headline a').attr('href'),
			Date: $(this).find('span.byline').text()
		};});
		const data = ulList.filter(n => n.Title);
		const workSheet = xlsx.utils.json_to_sheet(data);
		workSheet['!cols'] = wscols;
		xlsx.utils.book_append_sheet(workBook, workSheet, name);
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});
};

address.map(v => joongang_News(v[0], v[1]));
