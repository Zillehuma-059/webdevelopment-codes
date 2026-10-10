import { useState } from "react";

/*
import Header from "./component/Header";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Login from "./component/Login";
import Diary from "./component/Diary";
import Footer from "./component/Footer";
 // File: App.jsx located in src folder

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "5px" }}>
      <h1>This is main componenet (App.jsx)</h1>
      {/* container 1: header 
    }
      <div style={{ backgroundColor: "blue", color: "white" }}>
        <h1>Web Development Course</h1>
        <p>
          In this course, you will learn about React, Next, Nest, Express and
          mongoDB
        </p>
      </div>
      {/* container 2: Navbar }
      <div style={{ backgroundColor: "green", color: "white" }}>
        <h1>Nav Bar</h1>
        <p>This is navbar container</p>
      </div>
      {/* container 3: Home Page }
      <div style={{ backgroundColor: "yellow", color: "white" }}>
        <h1>Home page</h1>
        <p>This is home page container</p>
      </div>
      {/* container 4: Registration }
      <div style={{ backgroundColor: "magenta", color: "white" }}>
        <h1>Registration</h1>
        <p>This is Registration container</p>
      </div>
      {/* container 5: Login }
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1>Login</h1>
        <p>This is Login container</p>
      </div>
      {/* container 6: Diary }
      <div style={{ backgroundColor: "orange", color: "white" }}>
        <h1>Diary</h1>
        <p>This is Diary container</p>
      </div>
      {/* container 7: Footer }
      <div style={{ backgroundColor: "orange", color: "white" }}>
        <h1>Footer</h1>
        <p>This is Footer container</p>
      </div>
    </div>
  );

}
export default App;

import '/App.css';
import Greet from './component/Greet'
function App()
{
  return 
  (
    <div className="App">
    <Greet name="Ali" />
   < Greet name="Bilal"/>
   <Greet name="khan"/>
   </div>
  );

}
export default App;


import {Greet} from './component/Greet';
function App()
{
  return(
    <div className="App">
      <Greet/>
    </div>
  );
}
export default App;

import Childpro from "./component/Childpro"
function App()
{
  return (
    <div className="App">
      <Childpro name="HUMA">
   <p>this is chidren props </p>
   </Childpro>
   <Childpro name=" reem"/>
    </div>
  );
}
export default App;


import { useState } from "react";
function App()
{
  let variableX=100;
  const[state_variableX,set_variableX]=useState(0);
  const changeValue=()=>{
    console.log("Function is Called...");
     variableX=200;
    set_variableX(500);
  };
  return(
    <div>
      <h1>value of simple variable in js :{variableX}</h1>
      <h1>value of state for:{state_variableX} </h1>
      <button onClick=
      {changeValue} style={{backgroundColor:"black",color:"white",padding:"5px"}}>
      changeValue</button>
      </div>
  );
}
export default App;
*/

function App()
{

const[theme, setTheme] = useState('light');
const toggleTheme=()=>{setTheme(theme==='light'?'dark':'light');};
return(
  <div className= {theme}>
  <h1> theme changing example</h1>
    <button onClick={toggleTheme}>Toggle Theme
    </button>
  </div>
);

}
export default App;
