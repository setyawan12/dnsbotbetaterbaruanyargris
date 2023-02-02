const cheerio = require("cheerio")
const axios = require("axios")
const qs = require("qs")
const fetch = require('node-fetch')
const FormData = require('form-data')
const request = require("request")
var export_data = require("./instaapi");
const { rest } = require("lodash")
const e = require("connect-flash")





function igdl(url){
	return new Promise(async(resolve, reject) => {
		var data;
		const hasil = []
		try {
			data = await export_data(url);
		} catch {
			return resolve()
		}
		if (!data.url){
			for (let i = 0; i < data.length; i++) {
				let result = {
					result: data[i].thumb,
				  }
				hasil.push(result)
			}
			let dataresult = {
				decs: data[0].meta.title,
				link_original: data[0].meta.source,
				url: hasil
			}
			  return resolve(dataresult)
		}else{
		let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${data.url[0].url}`);
		let tinyUrl = tiny.data
		let result = {
		  url: tinyUrl,
		  thumb: data.thumb,
		  type: data.url[0].type,
		  decs: data.meta.title,
		  link_original: data.meta.source
		}
		return resolve(result)
	}
	})
}




module.exports.igdl = igdl