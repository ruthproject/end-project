import React, { useState } from "react";
import HelpLogin from '../index.login';
import { connect } from 'react-redux';
import { fetchUser, setCurrentUser } from '../redux/actions/user.action'
import { fetchAssistant, setCurrentAss } from '../redux/actions/assistant.action'
import { fetchStudent, setCurrentStudent } from '../redux/actions/student.action'
import { useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import Api from "../Api";
import { TextField } from "@material-ui/core";
import { Console } from "console";
// const User = {
//     UserId: login.,
//     UserName: string,
//     UserPermissionId: number,
//     UserPassword: string,
//     FirstName: string,
//     LastName: string,
//     NumbarPhone: string,
//     Mail: string

// }
const SignUp = (props: {
    users: {}, assistants: {}, students: {},
    fetchUser: any, fetchAssistant: any, fetchStudent: any, setCurrentAss: any, setCurrentStudent: any, setCurrentUser: any,
    history: any
}) => {


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

        if(login.UserPassword!=login.varifyPassword){
            alert("אימות הסיסמא אינו תואם");
        }
    }
    
    const [updateLogin, submitLogin, login] = HelpLogin(
        {
            UserId: '',
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
        UserPermissionId:login.UserPermissionId ,
        UserPassword:login.UserPassword,
        FirstName:login.FirstName,
        LastName:login.LastName,
        NumbarPhone:login.NumbarPhone,
        Mail:login.Mail
    }
    const addUser = async () => {

        const response = await Api({ url: 'Users', method: "Post", body: newUser });

    }

    // const handleChange = (event: any) => {
    //           //@ts-ignore
    //     setNewUser({
    //         ...newUser,
    //         [event.target.name]: event.target.value
    //     });
    //     console.log(event.target.value);
    // };

    return (
        <div>
            <TextField
                // fullWidth
                helperText="הכנס שם פרטי"
                label="שם פרטי"
                name="FirstName"
                onChange={updateLogin}
                required
                value={login.FirstName}
                variant="outlined"
            />
            <br />
            <TextField
                helperText="הכנס שם משפחה"
                label="שם משפחה"
                name="LastName"
                onChange={updateLogin}
                required
                value={login.LastName}
                variant="outlined"
            />
            <br />
            <TextField
                helperText="הכנס מספר פלאפון"
                label="פלאפון"
                name="NumbarPhone"
                onChange={updateLogin}
                required
                value={login.NumbarPhone}
                variant="outlined"
            // type="phone"
            />
            <br />
            <TextField
                helperText="הכנס כתובת מייל"
                label="מייל"
                name="Mail"
                onChange={updateLogin}
                required
                value={login.Mail}
                variant="outlined"
            // type="email"
            />
            <br />
            <TextField
                helperText="הכנס שם משתמש"
                label="שם משתמש"
                name="UserName"
                onChange={updateLogin}
                required
                value={login.UserName}
                variant="outlined"
            // type="email"
            />
            <br />
            <TextField
                helperText="הכנס סיסמא"
                label="סיסמא"
                name="UserPassword"
                onChange={updateLogin}
                required
                value={login.UserPassword}
                variant="outlined"
            // type="email"
            />
            <br />
            <TextField
                helperText="אמת סיסמא"
                label="אמת סיסמא"
                name="varifyPassword"
                onChange={updateLogin}
                required
                value={login.varifyPassword}
                variant="outlined"
            // type="email"
            />
            <br />
            {/* <input type="password " name="password" onChange={updateLogin} value={login.password} placeholder="password" /><br /> */}
            <input type="submit" name="enter" onClick={submitLogin} />

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
)(SignUp);