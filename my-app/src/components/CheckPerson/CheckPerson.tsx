import React, { useState, useRef } from "react";
import HelpLogin from '../../index.login';
import { connect } from 'react-redux';
import { fetchUser, setCurrentUser } from '../../redux/actions/user.action'
import { fetchAssistant, setCurrentAss } from '../../redux/actions/assistant.action'
import { fetchStudent, setCurrentStudent } from '../../redux/actions/student.action'
import { useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Api from "../../Api";
import { TextField } from "@material-ui/core";
import { Console } from "console";
import { Radio } from "@mui/material";


const CheckPerson = (props: {
    users: {}, assistants: {}, students: {},
    fetchUser: any, fetchAssistant: any, fetchStudent: any, setCurrentAss: any, setCurrentStudent: any, setCurrentUser: any,
    history: any
}) => {
    const file = useRef(null)
    // const [newUser, setNewUser] = useState<User>({} as User);

    const submit = () => {
        const current: any = Object.values(props.users).find((user: any) => user.UserName === login.userName && user.UserPassword === String(login.password))
        // const checkVarifyPassword:any=
        if (current) {
            alert("משתמש קיים ");
        }
        else {
            addUser()

        }

        if (login.UserPassword != login.varifyPassword) {
            alert("אימות הסיסמא אינו תואם");
        }
    }

    const [updateLogin, submitLogin, login] = HelpLogin(
        {
          
            varifyPassword: '',
            UserName: '',
            UserPermissionId: '',
            UserPassword: '',
            FirstName: '',
            LastName: '',
            NumbarPhone: '',
            Mail: ''
        }
        , submit
    )
    const newUser = {
        UserId: login.UserId,
        UserName: login.UserName,
        UserPermissionId: login.UserPermissionId == 'manager' ? 3 : login.UserPermissionId == 'ass' ? 2 : login.UserPermissionId == 'student' ? 1 : null,
        UserPassword: login.UserPassword,
        FirstName: login.FirstName,
        LastName: login.LastName,
        NumbarPhone: login.NumbarPhone,
        Mail: login.Mail
    }
    const addUser = async () => {
        const response = await Api({ url: 'Users', method: "Post", body: newUser });

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
   
    return (
        <div>
           
           
            {/* <input type="password " name="password" onChange={updateLogin} value={login.password} placeholder="password" /><br /> */}
            <Radio
                checked={login.UserPermissionId === 'ass'}
                onChange={updateLogin}
                value="ass"
                name="UserPermissionId"
                inputProps={{ 'aria-label': 'ass' }}
            />
             <label>מתרגלת</label>
            <br />
             <Radio
                checked={login.UserPermissionId === "manager"}
                onChange={updateLogin}
                value="manager"
                name="UserPermissionId"
                inputProps={{ 'aria-label': "manager" }}
            />
            <label>מרכזת</label>
            <br />
            {/* <label>תלמידה</label>
            <Radio
                checked={login.UserPermissionId === "student"}
                onChange={updateLogin}
                value="student"
                name="UserPermissionId"
                inputProps={{ 'aria-label': "student" }}
            /><br /> */}
            {/* {login.UserPermissionId === 'ass' && <SuiDropzone options={{ addRemoveLinks: true }} />} */}
            {login.UserPermissionId === 'ass' &&
                <form name='form'>
                    <input name='f' ref={file} type='file' onChange={(e: any) => setUpLoadFile(e.target.files[e.target.files.length - 1])} />

                </form>}
            <input type="submit" name="enter" onClick={submitLogin} />
            <button onClick={() => Api({ url: 'Mails' ,method:'POST', body:{to:'est7675251@gmail.com',subject:'come',body:'<button>how to do "onClick"</button>'}})}>mail</button>

        </div>
    )
}
export default connect(
    (state: any) => {
        return {
            users: state.users.users,
            assistants: state.assistants.assistants,
            students: state.students.students
        }
    },
    {
        fetchUser, fetchAssistant, fetchStudent, setCurrentUser, setCurrentStudent, setCurrentAss
    }
)(CheckPerson);



