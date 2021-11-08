
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import SignIn from './components/Assistant/SignIn'

import End from './components/Assistant/end'
// import AllProjectAss from './components/Assistant/AllProjectAss';
import store from './redux/store';
import { useState } from 'react';
import AllProjectAss from './components/Assistant/AllProjectAss';
import Header from './components/Assistant/header';
import EditDetails from './components/EditDetails/EditDetails';
import Project from './components/Project/Project';


function App() {
  const [begin,setBegin]=useState(null)
  // const {userPermmison}={userPermmison:"rdux"}
  return (
    <div>
         <Provider store={store}>
           
        {/* {userPermmison==="manager"?<Header begin={begin}/>:<Header begin={begin}/>}  */}
        <Switch>
        
          <Route path='/all-projects' component={()=><AllProjectAss  />} />
          <Route path='/Project' component={()=><Project setBegin={setBegin}/>} />
          <Route path='/Project/:id' component={()=><Project setBegin={setBegin}  />} />
          <Route path='/' component={SignIn} />
       
                   
        </Switch>
      </Provider>
     <p>bjhgvjh</p>
    </div>
    
  );
}

export default App;

