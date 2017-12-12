const aws4 = require('aws4');

module.exports = ({credentials, method, timeout, host, path, body, headers={'Content-Type': 'application/json'}}) => {

    host = host.replace(/(^\w+:|^)\/\//,''); // remove protocol

    return aws4.sign({
        method,
        host,
        path,
        timeout,
        headers,
        body
    }, credentials);

};