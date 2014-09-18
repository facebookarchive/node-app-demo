process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var wit = require('node-wit');
var fs = require('fs');
var ACCESS_TOKEN = "IQ77NWUPUMNBYEUEKRTWU3VDR5YSLHTA";

console.log("Sending text & audio to Wit.AI");

wit.captureTextIntent(ACCESS_TOKEN, "Hello world", function (err, res) {
    console.log("Response from Wit for text input: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
});

var stream = fs.createReadStream('sample.wav');
wit.captureSpeechIntent(ACCESS_TOKEN, stream, "audio/wav", function (err, res) {
    console.log("Response from Wit for audio stream: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
});