import { useState } from "react"
import "./Form.css"
const Form2=()=>{
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState("")
    const[password,setpassword]=useState("")
    const[cpassword,setcpassword]=useState("")
    const[show,setshow]=useState(false)
    const[Error,setError]=useState({})

    const emailValidation = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
    const PasswordValidation = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/gm


    const Name=(e)=>{

        setname(e.target.value)
    }
    const Email=(e)=>{

        setemail(e.target.value)

    }
    const Phone=(e)=>{

        setphone(e.target.value)

    }
    const Password=(e)=>{

        setpassword(e.target.value)

    }
    const CPassword=(e)=>{

    setcpassword(e.target.value)
    }
    const varify=()=>{
        let localError = {}
        let valid = true
        if(!name){
            localError.name="Name is requird"
            valid=false
        }else if(name.length >0 && name.length<3){
            localError.name="Name is short"
            valid=false

        }
        if(!email){
            localError.email="email is required"
            valid=false
        }else if(!emailValidation.test(email)){
            localError.email="Enter valid Email "
            valid=false
        }
        if(!phone){
            localError.phone="Number is required"
            valid=false

        }else if(phone.length >0 && phone.length <10 || phone.length>10){
            localError.phone="Enter valid number"
            valid=false

        }if(!password){
            localError.password="Password is required"
            valid=false
        }else if(PasswordValidation.test()){
            localError.password="Enter valid password"
            valid=false
        } if(!cpassword){
            localError.cpassword="cpassword is required"
            valid=false

        }else if(cpassword !==password){
            localError.cpassword="CPassword is not match"
            valid=false
        }
        setError(localError)
        return valid
        
    }

    const submit=(e)=>{
        e.preventDefault();
        if(varify()){
            setshow(true);

        }
    }
    return(
        <>
        <div><center>
            <div className="box">
                <form action="">
                    <label for="" >Name</label><br />
                    <input onChange={Name}  className="form-control" type="text" /><br />
                    {Error && <p> {Error.name} </p> }
                    <label htmlFor="" >Email</label><br />
                    <input onChange={Email} className="form-control" type="text" /><br />
                    {Error && <p> {Error.email} </p> }

                    <label htmlFor="">Phone</label><br />
                    <input onChange={Phone}  className="form-control" type="number" /><br />
                    {Error && <p> {Error.phone} </p> }

                    <label htmlFor="">Password</label><br />
                    <input onChange={Password} className="form-control" type="password" /><br />
                    {Error && <p> {Error.password} </p> }

                    <label htmlFor="">CPassword</label><br />
                    <input onChange={CPassword} className="form-control" type="password" /> <br />
                    {Error && <p> {Error.cpassword} </p> }

                  <button onClick={submit} className="btn-dark" >Submit</button>

                </form>
            </div>
            </center>
        </div>
{ show &&
        <div>
            
            <center>           
                 <table border="10px " width="100%">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Password</th>
                    <th>CPassword</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>{password}</td>
                    <td>{cpassword}</td>
                </tr>
            </table>
            </center>

        </div>
        }
        </>
    )
}
export default Form2