import img from './marvel.webp'
let IMG=require("./marvel.webp")
const Img=()=>{
    return(
        <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZESvKa-6ukZUR2q24g4o3_EcyPmk6CGty5g&usqp=CAU" width={"30%"}/>
        <img src="marvel.webp" width="30%"/>
        <img src={require("./marvel.webp")} width={"20%"}/>
        <img src={img} width={"10%"}/>
        <img src={IMG} width={"5%"}/>
        </>
    )
}
export default Img