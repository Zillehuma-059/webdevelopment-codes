import React from "react"
const Childpro=(props) =>{
    console.log(props)
    return<h1> HELLO {props.name}</h1>
    {props.children}
}
export default Childpro;
