//  import * as React from 'react';

import { Modal } from "@material-ui/core";
import { ExecException } from "child_process";
import { LanguageServiceMode } from "typescript";
// export let error:string;

const Api = ({ url = '', method = "GET",body = {}}) => {
  
    let options = {
        method,
        // mode:'no-cors',
        // headers: { "Content-Type": "multipart/form-data",
        // "Accept": "application/json",
        // "type": "formData" },
        headers: { "Content-Type": "application/json" },
        body: method.substr(0,3) !== "GET" ? JSON.stringify(body) :null
       
    }
    console.log(body);
        return fetch('https://localhost:44348/api/' + url,options)
        .then((response) => response.json())
        .catch(error => console.log('error', error))
}



export default Api;