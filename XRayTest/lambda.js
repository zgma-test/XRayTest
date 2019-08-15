let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {

    sns.publish({
        Message: 'hello',
        MessageAttributes: {},
        MessageStructure: 'String',
        TopicArn: 'arn:aws:sns:us-east-1:318300609668:udith-test'
    }).promise()
        .then(data => {
            console.log("Successful");
            callback(null, { "message": "Successfully executed" });
        })
        .catch(err => {
            console.log("Failed", err);
            callback(err);
        });

    
}