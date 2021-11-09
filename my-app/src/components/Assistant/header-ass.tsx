import AllProjectAss from './AllProjectAss'
import { Route, Switch } from 'react-router-dom'
import Timer from './timer';
import End from './end';
// @ts-ignore
import Popup from 'react-popup'
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/user.action';
import { setCurrentAss } from '../../redux/actions/assistant.action';
import { AppBar, Tab, Tabs } from '@mui/material';


const Header = (props: any) => {
    // const Header = (props: any) => {
    return (
        <>
            <button onClick={() => {
                props.setCurrentUser(0)
                props.setCurrentAss(0)
                props.history.push('/')
            }
            }>יציאה</button>
            <button onClick={() => props.history.push('/all-projects')}>פרויקטים</button>
            <button onClick={() => props.history.push('/details')}>פרטים אישיים</button>
            {props.begin ? <Timer begin={props.begin} /> : null}

        </>
    )

}

export default connect(
    (state: any) => {
    },
    {
        setCurrentUser, setCurrentAss
    }

)(withRouter(Header))