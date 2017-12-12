# AWS Sign Requests
Quick wrapper around [aws4](https://github.com/mhart/aws4) to sign and prepare requests to AWS API Gateway using AWS Signature Version 4. Specifically design to make API requests to API Gateway authenticated with `AWS_IAM`.

## Install
```
npm install aws-sign-requests --save
```

## Basic Usage with All Options
```javascript
const awsSignRequests = require('aws-sign-requests');

let options = awsSignRequest({
    credentials: {
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY'
    },
    method: 'POST',
    host: 'https://example.com',
    path: '/foo',
    body: '{"name":"john"}',
    timeout: 20,
    headers: {
        'Content-Type': 'application/json'
    }
});

```

## Usage with Node Fetch
```javascript
let options = awsSignRequest({
    credentials: {
        accessKeyId: 'ACCESS_KEY_ID',
        secretAccessKey: 'SECRET_ACCESS_KEY'
    },
    method: 'POST',
    host: 'https://example.com',
    path: '/foo',
    body: '{"name":"john"}'
});

fetch(`https://example.com/foo`, options)
    .then(res => res.json())
    .then(json => console.log(json))

```

## Usage within IAM role environment (Lambda, EC2) with Node Fetch
```javascript
let credentials = new AWS.EnvironmentCredentials('AWS');

let options = awsSignRequest({
    credentials: {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        sessionToken: credentials.sessionToken // required for temporary credentials
    },
    method: 'POST',
    host: 'https://example.com',
    path: '/foo',
    body: '{"name":"john"}'
});

fetch(`https://example.com/foo`, options)
    .then(res => res.json())
    .then(json => console.log(json))

```