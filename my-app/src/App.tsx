import React, { useEffect, useState } from 'react';
// import DB from "./components/jsons/DB.json"
// import Schema from "./components/jsons/Schema.json"
import DisplayTable from './components/DisplayTable/DisplayTable';
import Api from './Api';
//import Projects from './components/Projects/Projects';
import Project from './components/Project/Project';
import EditDetails from './components/EditDetails/EditDetails';


function App() {

  const [assistantsDB, setAssistantsDB] = useState([]);
  // [
  //     {
  //         "AssistantId": 1,
  //         "UserId": null,
  //         "Status": true
  //     },
  //     {
  //         "AssistantId": 2,
  //         "UserId": null,
  //         "Status": false
  //     }
  // ]


  const getAssistants = async () => {
     try{
      setAssistantsDB(await Api({ url: 'Users' }))

    }
    catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getAssistants();
    console.log('its good!!!!!!!!!!!!!!!');
  }, [])


  return (
    <div>
      <div>
        <div>
          <DisplayTable headers={assistantsDB[0]? Object.keys(assistantsDB[0]):null} rows={assistantsDB} />
          <br/>
          {/* <Projects/> */}
          {/* //todo take fom table  */}
          <Project projectId={11}/>
          <EditDetails />
      </div>
      </div>
      </div>
  );
}

export default App;

