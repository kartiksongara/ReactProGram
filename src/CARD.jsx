import "./Style.css"
import  Data  from "./Data"
const CARD=()=>{
    return(
    <>
    <div>
        <div className="text-light m-5 d-flex  justify-content-between flex-wrap">
            {Data.map((e)=>{
                return(
                    <>
                    <div className="bg-black d-flex mb-5 flex-column justufy-content-start d-flex mb-5 flex-column justufy-content-start" style={{width:"300px",borderRadius:"20px"}} >
            <img src={e.img} width={"100%"}/>
               <h5>Name : {e.movieName}</h5>
               <h5>Name : {e.genre}</h5>
               <h5>Name : {e.language}</h5>
               <h5>Name : {e.year}</h5>
               <h5>Name : {e.}</h5>

            </div>

                    </>
                )
            })}
        </div>
    </div>
    
    
    </>
)

}
export default CARD 