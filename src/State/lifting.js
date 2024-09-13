import {React,useState} from "react";
import ReactDOM from "react-dom/client";

const LiftComponent = ()=>{
    const [inpu,setinpu] = useState("");
    return(
        <>
        <Childcomponent1 inpu={inpu} setinpu={setinpu}/>
        <Grandchild inpu={inpu}/>
        </>
    )
}

const Childcomponent1 = ({inpu,setinpu})=>{
    

    return(
        <>
        <h1>Hello</h1>
        <input onChange={(e)=>setinpu(e.target.value)}></input>
        </>
    )
}

const Grandchild = ({inpu})=>{
    return(
        <h1>The value could be represented ad {inpu}</h1>
    )
}

export default LiftComponent;