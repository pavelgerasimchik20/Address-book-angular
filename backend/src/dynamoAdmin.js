// start: node dynamoAdmin.js
// localhost::8001

const AWS = require('aws-sdk');
const {createServer} = require('dynamodb-admin');

AWS.config.update({
    region: "eu-north-1",
    endpoint: "http://localhost:8000",
    accessKeyId: "AKIA5L45ZZE6J2IZY5OM",
    secretAccessKey: "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"
  });

const dynamodb = new AWS.DynamoDB();
const dynClient = new AWS.DynamoDB.DocumentClient({service: dynamodb});

const app = createServer(dynamodb, dynClient);

const host = 'localhost';
const port = 8001;
const server = app.listen(port, host);
server.on('listening', () => {
  const address = server.address();
  console.log(`  listening on http://${address.address}:${address.port}`);
});