let axios = require("axios");
let cheerio = require("cheerio");
const xlsx = require("xlsx");
const fs = require("fs");

	let getHtml = async()=>{
		try{
			return await axios.get("https://news.joins.com/money?cloc=joongang-home-gnb3");
		} catch (error){
		console.error(error)
		}
	};

	const workBook = xlsx.utils.book_new();
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
		xlsx.utils.book_append_sheet(workBook, workSheet, 'Money');
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});

	let getHtml2 = async()=>{
		try{
			return await axios.get("https://news.joins.com/politics?cloc=joongang-section-gnb2");
		} catch (error){
		console.error(error)
		}
	};

	getHtml2().then(html => {
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
		xlsx.utils.book_append_sheet(workBook, workSheet, 'Politices');
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});

	let getHtml4 = async()=>{
		try{
			return await axios.get("https://news.joins.com/society?cloc=joongang-section-gnb4");
		} catch (error){
		console.error(error)
		}
	};

	getHtml4().then(html => {
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
		xlsx.utils.book_append_sheet(workBook, workSheet, 'Society');
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});

	let getHtml3 = async()=>{
		try{
			return await axios.get("https://news.joins.com/world?cloc=joongang-section-gnb5");
		} catch (error){
		console.error(error)
		}
	};

	getHtml3().then(html => {
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
		xlsx.utils.book_append_sheet(workBook, workSheet, 'World');
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});

	let getHtml5 = async()=>{
		try{
			return await axios.get("https://news.joins.com/sports?cloc=joongang-section-gnb7");
		} catch (error){
		console.error(error)
		}
	};

	getHtml5().then(html => {
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
		xlsx.utils.book_append_sheet(workBook, workSheet, 'Sports');
		xlsx.writeFile(workBook, 'JoongangNews.xlsx');
		return data;
	});
