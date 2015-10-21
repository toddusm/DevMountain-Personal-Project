var request = require('request')

module.exports = { 
	getInfo: function(req, res){
		request('http://api.census.gov/data/2013/acs5?get=B01001_001E,B01001_002E,B01001_026E,B01002_001E,B08006_004E&for=zip+code+tabulation+area:' + req.params.zip + '&key=' + process.env.CENSUS_AUTH, function(err, response, body){
			if(!err && response.statusCode == 200){
				console.log(body)
				res.send(body);
			}
		})
	}
}


