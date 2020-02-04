let axios = require("axios");
let cheerio = require("cheerio");
const xlsx = require("xlsx");
const fs = require("fs");

function sports() {
	let getHtml = async()=>{
		try{
			return await axios.get("https://news.joins.com/sports?cloc=joongang-section-gnb7");
		} catch (error){
		console.error(error)
		}
	};

	getHtml().then(html => {
		let ulList = [];
		let $ = cheerio.load(html.data);
		let $bodyList = $("div.list_basic.list_sectionhome ul").children("li");
		$bodyList.each(function(i, elem){ ulList[i]={
			Title: $(this).find('h2.headline a').text(),
			Url: $(this).find('h2.headline a').attr('href'),
			Sort: $(this).find('span.lead a').text(),
			Date: $(this).find('span.byline').text()
		};});
		const data = ulList.filter(n => n.Title);
		const workSheet = xlsx.utils.json_to_sheet(data);
		var wscols = [
			{wch:63},
			{wch:34},
			{wch:70},
			{wch:14}
		];
		workSheet['!cols'] = wscols;
		const workBook = xlsx.utils.book_new();
		xlsx.utils.book_append_sheet(workBook, workSheet, 'temp');
		xlsx.writeFile(workBook, 'Sports.xlsx');
		return data;
	});
}

exports.sports = sports;