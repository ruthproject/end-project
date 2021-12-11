import React from 'react';

import SignUp from '../../components/SignUp';
import CheckPerson from '../../components/CheckPerson/CheckPerson';
const WarpSignUp=()=>{
    return(
        <>
          <SignUp history={undefined}></SignUp>
          <CheckPerson history={undefined}></CheckPerson>
        </>
    )
}
export default WarpSignUp