const Signer = require('./lib/Signer');

module.exports = ({credentials, method='GET', url, body, service_info = null, headers={'Content-Type': 'application/json'}}) => {

    if(typeof body === 'object') body = JSON.stringify(body);

    let request = {
        method,
        url,
        headers,
        data: body,
        body: body
    };

    if(service_info === null) {
        service_info = {
            service: 'execute-api',
            region: 'us-east-1'
        }
    }

    return Signer(request,credentials,service_info)

};