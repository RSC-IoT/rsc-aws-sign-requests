const awsSignRequests = require('aws-sign-requests');
const fetch = require("node-fetch");

let url = 'https://www.example.com';

let options = awsSignRequests({
    credentials: {
        access_key: 'ACCESS_KEY',
        secret_key: 'SECRET_KET',
    },
    url
});

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))