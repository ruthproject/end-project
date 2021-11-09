import react from 'react'
import { connect } from "react-redux";
import HeaderAss from '../Assistant/header-ass'

const headers = (props: { UserPermissionId: number,begin:any }) => {

    return (

        props.UserPermissionId === 2 ? <><h1>שלום מתרגלת יקרה !</h1>  <HeaderAss begin={props.begin}/></> : null

    )
}
export default connect(

    (state: any) => {
        return {
            UserPermissionId: state.users.curretUser?state.users.users[state.users.curretUser].UserPermissionId:null
        }
    }

)(headers);