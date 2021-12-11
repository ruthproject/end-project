
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Route } from "react-router";
import SignUp from "./SignUp";

export default function Example(props:{history:any}) {
  const [tabValue, setTabValue] = useState(0);

  const handleSetTabValue = (event:any, newValue:any) => setTabValue(newValue);

  return (
    <AppBar position="static">
      <Tabs value={tabValue} onChange={handleSetTabValue}>
        <Tab label="SignIn" onClick={()=>props.history.push('/sign-in')}/>
        <Tab label="SignUp" onClick={()=>props.history.push('/warp-sign-up')}/>
      </Tabs>
        </AppBar>
  );
}
   