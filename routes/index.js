var request = require('request');
var imgur = require('../util/imgur');
var q = require('q');

exports.index = function(req, res) {
	if (req.params.code && req.params.code !== undefined) {

		// Find the code. The Imgur code will never have a dot,
		// so if we have one we know they sent in a file with extension.
		var code;
		if (req.params.code.indexOf(".") !== -1) {
			code = req.params.code.substring(0, req.params.code.indexOf("."));
		} else {
			code = req.params.code;
		}

		imgur.getImageInfo(req.imgurClientId, code).then(function(theImageUrl) {
			var options = {
				method: 'GET',
				uri: theImageUrl
			};
			request.get(options).pipe(res);
		}, function(err) {
			res.jsonp({
				success: false,
				message: err
			});
		});

	} else {
		res.jsonp({
			success: false,
			message: "no code"
		});
	}
};