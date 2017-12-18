const Signer = require('./lib/Signer');

module.exports = ({credentials, method='GET', url, body, headers={'Content-Type': 'application/json'}}) => {

    if(typeof body === 'object') body = JSON.stringify(body);

    let request = {
        method,
        url,
        headers,
        data: body,
        body: body
    };

    return Signer(request,credentials)

};