import React from "react";


function Welcome(props){
    return(
       <h1>Hey ! {props.name}</h1>
    )
}

function App(){
    const studentName= "Sampresh Lodhi";
    return(
        <>
        <Welcome name={studentName}/>
        <h2>Welcome to Newton School.</h2>
        </>
    )
}
export default App;