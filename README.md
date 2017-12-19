# AWS Sign Requests
Sign and prepare requests to AWS API Gateway using AWS Signature Version 4. Specifically design to make API requests to API Gateway authenticated with `AWS_IAM`.

## Install
```
npm install aws-sign-requests --save
```


## Basic Usage with All Options
```javascript
const awsSignRequests = require("aws-sign-requests");

let options = awsSignRequests({
    credentials: {
        access_key: "ACCESS_KEY_ID",
        secretAccessKey: "SECRET_ACCESS_KEY",
        session_token: "SESSION_TOKEN"
    },
    method: "POST",
    url: "https://example.com/foo",
    service_info: {
        service: "execute-api",
        region: "us-east-1"
    },
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        name: "John Smith"
    }
});
```

## Usage with [Fetch](https://github.com/bitinn/node-fetch)
```javascript
const fetch = require("node-fetch");

let options = awsSignRequests({
    credentials: {
        access_key: "ACCESS_KEY_ID",
        secret_key: "SECRET_ACCESS_KEY"
    },
    method: "POST",
    url: "https://example.com/foo",
    body: {
        name: "John Smith"
    }
});

fetch(`https://example.com/foo`, options)
    .then(res => res.json())
    .then(json => console.log(json))
```

## Usage within IAM role environment (Lambda, EC2) with Node Fetch
```javascript
const fetch = require("node-fetch");

let credentials = new AWS.EnvironmentCredentials("AWS");

let options = awsSignRequests({
    credentials: {
        access_key: credentials.accessKeyId,
        secret_key: credentials.secretAccessKey,
        session_token: credentials.sessionToken // required for temporary credentials
    },
    method: "POST",
    url: "https://example.com/foo",
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        name: "John Smith"
    }
});

fetch(`https://example.com/foo`, options)
    .then(res => res.json())
    .then(json => console.log(json))
```

### Usage with [Request](https://github.com/request/request)
````javascript
const request = require("request");

let options = awsSignRequests({
    credentials: {
        access_key: "ACCESS_KEY_ID",
        secret_key: "SECRET_ACCESS_KEY"
    },
    method: "POST",
    url: "https://example.com/foo",
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        name: "John Smith"
    }
});

request(options, function (error, response, body) {
    console.log('body:', body);
});
````