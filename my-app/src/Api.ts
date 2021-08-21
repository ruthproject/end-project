import * as React from 'react';

const Api = ({url='', method = "GET", body = {} }) => {
    let options = {
        method,
        headers: { "Content-Type": "application/json"
           },
        body: method !== "GET" ? JSON.stringify(body) : null,
    }

    return fetch('https://localhost:44348/api/'+url,options)
    .then((response) => response.json());
        
}

export default Api;