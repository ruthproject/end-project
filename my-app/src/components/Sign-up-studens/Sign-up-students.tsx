import { Radio, RadioGroup } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Api from '../../Api';
import SignUp from '../SignUp';
import { useHistory } from 'react-router-dom';

const SignUpStudents=()=>{
const [way,setWay]=useState("non");
const history = useHistory();

const handleRadio=(e:any)=>{
    setWay(e.target.value)
       
}
const [upLoadFile, setUpLoadFile] = useState(null)
const uploadFile = async () => {

    const formdata = new FormData();
    const file: any = upLoadFile;
    if (upLoadFile) {
        formdata.append('file', file)
    }

    const requestOptions = {
        method: 'POST',
        body: formdata,
    };
    await fetch("https://localhost:44348/api/Files/UploadFile", requestOptions)
        .then(response => console.log(response.text()))
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
}
useEffect(() => {
    if (upLoadFile) uploadFile();
}, [upLoadFile])

    return(
        <>
        {console.log("רישום תלמידות")}
        <form>
         
            <Radio
                // checked={login.UserPermissionId === 'ass'}
                onChange={handleRadio}
                value="hand"
                name="hand-button"
                checked={way == "hand"}
                // inputProps={{ 'aria-label': 'ass' }}
            />
             <label>רישום ידני</label>
            <br />
            <Radio
                // checked={login.UserPermissionId === 'ass'}
                onChange={handleRadio}
                value="file"
                name="file-button"
                checked={way == "file"}
              
                // inputProps={{ 'aria-label': 'ass' }}
            />
            <label>העלאת קובץ</label>
            <br/>
           
            { way==="file"? 
                <>
                    <input name='f'  type='file' onChange={(e: any) => setUpLoadFile(e.target.files[e.target.files.length - 1])} />

                    {/* <input name='f'  type='file' onChange={(e)=> Api({ url: 'Files/UploadFile', method: 'POST', body: e.target.files?[0]:{} })} /> */}
                    {/* <input name='f' ref={file} type='file' onChange={(e) => {v.append('my-file',e.target.files[0]); console.log(file); Api({ url: 'Files/UploadFile', method: 'POST', body: e.target.files?[0]:{} }) }} /> */}
                    <input type='submit' value='שליחה'  />
              </> :<SignUp history={undefined}/>
            //  :way==="hand"? history.push('/sign-up'):null
                } 
                </form>
             </>
            );
           
}

export default SignUpStudents
