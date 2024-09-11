import React from "react";
import ReactDOM from "react-dom/client";

const user = {
    name:'Heady-lamer',
    url:"https://i.imgur.com/yXOvdOSs.jpg",
    imagesize:90,
}

function Myapp(){
    return (
        <>
            <h1>{user.name}</h1>
            <img 
                src={user.url} 
                alt={'Photo of ' + user.name} 
                className="Avatar" 
                style = {{
                    width: user.imagesize,
                    height: user.imagesize
            }} />
  
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Myapp/>)

