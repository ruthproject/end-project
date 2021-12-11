import HelpLogin from '../../index.login';
import { connect } from 'react-redux';
import { fetchUser, setCurrentUser } from '../../redux/actions/user.action'
import { fetchAssistant, setCurrentAss } from '../../redux/actions/assistant.action'
import { fetchStudent, setCurrentStudent } from '../../redux/actions/student.action'
import { useEffect } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import Api from '../../Api';

const SignIn = (props: {
        assistants: {}, students: {},
        fetchUser: any, fetchAssistant: any, fetchStudent: any, setCurrentAss: any, setCurrentStudent: any, setCurrentUser: any,
        history: any 
            }) => {

    useEffect(() => {
        props.fetchUser();
        props.fetchAssistant();
        props.fetchStudent();
    }, [])

    const submit =async () => {
        
        const current=await Api({url:"Users/Login",method:'POST',body:{ UserName: login.userName,UserPassword: login.password}})
        
        if (current) {
            props.setCurrentUser(current.UserId)
            var url: any = '/manager'
            if (current.UserPermissionId === 1) {
                const isStudent: any = Object.values(props.students).find((student: any) => student.IdUser === current.UserId)
                    props.setCurrentStudent(isStudent.StudentId)
                    url = '/student'
            }
            else if (current.UserPermissionId === 2) {
                const isAss: any = Object.values(props.assistants).find((ass: any) => ass.UserId === current.UserId)
                    props.setCurrentAss(isAss.AssistantId)
                    url = '/all-projects'
            }
            props.history.push(url);
        }
        
        
    }

    const [updateLogin, submitLogin, login] = HelpLogin(
        {
            userName: '',
            password: ''
        }
        , submit
    )

    return (
        <div>
             
            <TextField required type="text" name="userName" onChange={updateLogin} value={login.userName} placeholder="userName" /><br /><br />
            <TextField required type="password" name="password" onChange={updateLogin} value={login.password} placeholder="password" /><br /><br />
            <TextField required type="submit" name="enter" onClick={submitLogin} /><br />
            <Link to="/warp-sign-up"> משתמש חדש לחץ כאן</Link>
        </div>
    )
}
export default connect(
    (state: any) => {
        return {
            assistants: state.assistants.assistants,
            students: state.students.students
        }
    },
    {
        fetchUser, fetchAssistant, fetchStudent, setCurrentUser, setCurrentStudent, setCurrentAss
    }
)(SignIn);