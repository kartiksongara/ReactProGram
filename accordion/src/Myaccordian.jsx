import { useState } from "react"
import "./accordion.css"

const Ma=(props)=>{
    const [show,setshow]=useState(false);
    const [show1,setshow1]=useState(false)
    console.log(props.arr)
    return(
        
<>
        <div>
            <center>
            <div className="bg-dark w-50 p-5 text-light mt-4 box0">
                <div className="bg-secondary p-2 from-control text-start box1"><button className="btn btn-danger" onClick={()=>{setshow(!show)}}>{show?"➖":"➕"}</button   >{props.topic}</div>
               {
               show &&
            
               <div className="bg-secondary p-2 from-control text-start"><button className="btn btn-danger" onClick={()=>{setshow1(!show1)}}>{show1?"➖":"➕"}</button   >{props.Des}</div>
               }
               { 
               show &&
               show1 &&
               props.arr.map((e)=>{
                return(
                    <>
                    <div className="bg-secondary p-2 form-control text-light"><li>{e}</li></div>
                    </>
                )
               })


               }
            
            </div>
            </center>
        </div>
         </>
    )

}
export default Ma