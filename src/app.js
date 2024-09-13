import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import LiftComponent from "./State/lifting";

function RenderingButton(){
    return(
        <>
            <LiftComponent/>
        </>
    )
}

// function MyButton({count,onClick}){
//     return(
//         <>
//             <button onClick={onClick}>
//                 clicked {count} times
//             </button>
//         </>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RenderingButton/>)

