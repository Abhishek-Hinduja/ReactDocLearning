import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function MyButton(){
    const [count,setcount] = useState(0);

    function handleclick(){
        setcount(count+1)
    }

    return(
        <>
            <button onClick={handleclick}>Count is {count}</button>
        </>
    )
}

function RenderingButton(){
    return(
        <>
            <h1>Here it will Show you all the buttton Components</h1>
            <MyButton/>
            <MyButton/>
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RenderingButton/>)

