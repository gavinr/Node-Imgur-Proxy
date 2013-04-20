var request = require('request');
var q = require('q');

exports.getImageInfo = function(imgurClientId, code) {
	var deferred = q.defer();
	var options = {
		method: 'GET',
		uri: "https://api.imgur.com/3/image/" + code,
		headers: {
			'Authorization': 'Client-ID ' + imgurClientId
		}
	};
	request.get(options, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			deferred.resolve(JSON.parse(body).data.link);
		} else {
			deferred.reject("Error getting response.");
		}
	});
	return deferred.promise;
};