import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import BasicModal from '../Assistant/end-modal'
// import Popup from 'react-popup' 

//@ts-ignore
import Popup from 'reactjs-popup';
import Api from '../../Api'
import HelpLogin from '../../index.login';
// import BasicModal from '../Modal';

const End = (props: { setBegin: any, id: number, currentProjectId: number, startHour: any, currentAssistantId: number }) => {
    
    const [open, setOpen] = useState(false);

    // const submit = () => {
    //     if (valuePercentage.percentage > 0) {

    //         const body = { AssistantId: props.currentAssistantId, BeginningTime: props.startHour, EndTime: new Date(), ProjectId: props.currentProjectId, finishPercentage: valuePercentage }
    //         console.log(body);
    //         hour(body);

    //     }
    //     else
    //         alert(' לא הכנסת ערך')
    // }

    // const hour = async (body = {}) => {
    //     await Api({ url: ` AssistantHour?id=${props.currentAssistantId}`, method: 'POST', body: body })
    // }

    // const [updatePercentage, submitEnd, valuePercentage] = HelpLogin(
    //     {
    //         percentage: 0
    //     }
    //     , submit
    // )


    return (
        <>
            <Button onClick={() => {
                setOpen(true)
                props.setBegin(false)
            }} >סיום הנחיה</Button>
            <BasicModal open={open} setOpen={setOpen} currentAssistantId={props.currentAssistantId} startHour={props.startHour} currentProjectId={props.currentProjectId} />
        </>
    )

}


export default connect(
    (state: any) => {
        return {
            currentProjectId: state.projects.currentPtoject,
            startHour: state.assistanceHour.startHour,
            currentAssistantId: state.assistants.curretAssistant
        }
    }
)(End)