import react from 'react'
import { connect } from "react-redux";
import HeaderAss from '../Assistant/header-ass'
import HeaderManager from '../manager/header-manager'

const headers = (props: { userPermissionId: number,userName:string,begin:any }) => {

    return (

        props.userPermissionId === 2 ? <><h1>שלום מתרגלת יקרה ! {props.userName}</h1>  <HeaderAss begin={props.begin}/></>
         :props.userPermissionId === 3 ? <><h1>שלום מרכזת יקרה ! {props.userName}</h1>  <HeaderManager /> </>:null

    ) 
}

export default connect(

    (state: any) => {
        return {
            userPermissionId: state.users.curretUser?state.users.users[state.users.curretUser].UserPermissionId:null,
            userName: state.users.curretUser?state.users.users[state.users.curretUser].FirstName:null
        }
    }

)(headers);