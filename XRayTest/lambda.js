let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    console.log(event);
    callback(null, "Hello");
}