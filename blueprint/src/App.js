import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { MyPanel } from "./components/MyPanel";
// using node-style package resolution in a CSS file: 
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Button, ControlGroup, Intent, Spinner,InputGroup } from "@blueprintjs/core";
 
// using JSX:
const mySpinner = <Spinner intent={Intent.PRIMARY} />;
function App() {
  return (
    <div className="App">

<div className="staticSettings"></div>
<ControlGroup fill={false} vertical={false} className="staticSettings"  >
      <Button intent="primary" large vertical className={"MyButton"} >Click here</Button>
      <button className="bp3-button bp3-large">Don't do this!</button>
      </ControlGroup>

      <div className="forecastSettings"></div>
      <InputGroup placeholder="Find filters..." />
      {mySpinner}
    </div>
  );
}

export default App;
