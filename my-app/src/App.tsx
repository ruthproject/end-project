
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/Assistant/SignIn'

import End from './components/Assistant/end'
// import AllProjectAss from './components/Assistant/AllProjectAss';
import store from './redux/store';
import { useState } from 'react';
import AllProjectAss from './components/Assistant/AllProjectAss';
import Header from './components/Assistant/header-ass';
import EditDetails from './components/EditDetails/EditDetails';
import Project from './components/Project/Project';
import Email from './components/email';
import Home from './components/home';
import SignUp from './components/SignUp';
import gmailApi from "react-gmail"
import New from './new';
import Try from './components/try';
import userEvent from '@testing-library/user-event';
import Headers from './components/headers/headers'
import Details from './components/EditDetails/EditDetails'
import Files from './components/Files';
function App() {
  const [begin, setBegin] = useState(null)
  // const {userPermmison}={userPermmison:"rdux"}

  return (
    <div>
      {/* <input onClick={()=>{gmailApi.getProfile("111133183261998252620").then(res=>console.log(res)) }}/> */}

      <Provider store={store}>
        <Headers begin={begin}/>
        {/* {props.userPermission === 2 ? <Header begin={begin} /> : null} */}
        <Switch>

          <Route path='/all-projects' component={() => <AllProjectAss />} />
          <Route path='/details' component={Details} />
          <Route path='/Project' component={() => <Project setBegin={setBegin} />} />
          <Route path='/Project/:id' component={() => <Project setBegin={setBegin} />} />
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
      </Provider>
      <Files></Files>
      {/* <Email></Email> */}

      {/* <New></New> */}
      {/* <Try currenAssistant={2}></Try> */}
      <p>try to make change</p>
      
      <h1>fgggggggggggggggd</h1>
      <h1></h1>
    </div>

  );
}

export default App

