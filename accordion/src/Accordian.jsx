import React from "react";
import Myaccordian from "./Myaccordian"
import { ApiData } from "./ApiData"

const A =()=>{
    return(
        <div>
    
        {ApiData.map((e)=>{
            return(
                <>
                <Myaccordian topic={e.Topic} Des={e.Des} arr={e.arr}/>
                
                </>
            )

        })}
        
        </div>
    )
}
export default A