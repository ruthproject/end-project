
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
// import Email from './components/email';
import Home from './components/home';
import SignUp from './components/SignUp';
// import gmailApi from "react-gmail"
import New from './new';
import Try from './components/try';
import userEvent from '@testing-library/user-event';
import Headers from './components/headers/headers'
import Details from './components/EditDetails/EditDetails'
import AllAss from './components/AllAss/allAss'
import WarpSignUp from './components/WarpSignUp/WarpSignUp';

import Ex from './components/ex'
import SignUpStudents from './components/Sign-up-studens/Sign-up-students';

function App() {
  const [begin, setBegin] = useState(null)
  // const {userPermmison}={userPermmison:"rdux"}

  const showHeader = () => {
    const currentPath = window.location.pathname
    return !currentPath.includes('sign') || currentPath === "/"
  }
  return (
    <div style={{direction:'rtl'}}>
      <Provider store={store}>
        {console.log(window.location.pathname)}
        { <Headers begin={begin} />}
        {/* {showHeader() && <Headers begin={begin} />} */}
        <Switch>
          <Route path='/all-projects' component={() => <AllProjectAss />} />
          <Route path='/details' component={Details} />
          <Route path='/Project' component={() => <Project setBegin={setBegin} />} />
          <Route path='/Project/:id' component={() => <Project setBegin={setBegin} />} />
          <Route exact path='/' component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/all-ass' component={AllAss} />
          <Route path='/warp-sign-up' component={WarpSignUp} />
          <Route path='/sign-up-students' component={SignUpStudents} />

        </Switch>
      </Provider>
     {/* <Ex/> */}
    </div>

  );
}

export default App

