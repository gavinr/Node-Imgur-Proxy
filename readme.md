Node Imgur Proxy

A simple script that takes the imgur image hash code and returns back the image.

To use, you must first have an Imgur Client ID. Get one of those by registering an application here:
https://api.imgur.com/oauth2/addclient

Insert your client ID into app.js on the line:

	req.imgurClientId = 'xxx';

Run `npm install` and then `node app.js`

Browse to http://localhost:9000/IMGURHASH to see the image.

This node is SIMPLE and is a work in progress. Please feel free to contribute or file bugs.