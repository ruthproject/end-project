
import { Route, Switch } from 'react-router-dom'


// @ts-ignore
import Popup from 'react-popup'
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/user.action';
import { setCurrentAss } from '../../redux/actions/assistant.action';
import { AppBar, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, MenuItem, Select, Tab, Tabs } from '@mui/material';
import HelpLogin from '../../index.login';


const Header = (props: any) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <ListItemButton onClick={() => {
                    props.setCurrentUser(0)
                    props.setCurrentAss(0)
                    props.history.push('/')
                }
                }>יציאה</ListItemButton>

                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemText primary="צפיה" />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" /> */}

                            <ListItemButton onClick={() => props.history.push('/all-ass')}>תלמידות</ListItemButton>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" /> */}
                            <ListItemButton onClick={() => props.history.push('/all-ass')}>מתרגלות</ListItemButton>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" /> */}
                            <ListItemButton onClick={() => props.history.push('/all-ass')}>פרויקטים</ListItemButton>
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton onClick={() => props.history.push('/details')}>פרטים אישיים</ListItemButton>
                <ListItemButton onClick={() => props.history.push('/sign-up-students')}>רישום תלמידות</ListItemButton>
            </List>
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