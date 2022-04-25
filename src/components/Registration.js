import React,{useState} from 'react'

function Registration() {
    const [first_name,setFirst_name]= useState("");
    const[last_name, setLast_name]= useState("");
    const[user_name, setUser_name]= useState("");
    const[email, setEmail]= useState("");
    const[tel_number, setTel]= useState();
    const [password, setPassowrd]= useState("");
    const [cnfrmPswd, setConfrmPaswd]= useState("");
    const [hasError, sethasError]= useState(false);

    function confirmPassword(){
        if(password!==cnfrmPswd){
            sethasError(true);
        }else{
            sethasError(false);
        }
    }
  
    function handleSubmit(e){
        e.preventDefault();
        confirmPassword();
       if(!hasError){
        fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                first_name,last_name,user_name,email, tel_number,password
            })
        })            .then(result=>result.json())
    }
        
    }
  return (
    <div>
        <h3>Registration</h3>
        <form onSubmit={handleSubmit}>
        <div className='mt-3'>
        <input type="text" required={true} placeholder="FirstName" onChange={(e)=>setFirst_name(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="text"  placeholder="LastName" onChange={(e)=>setLast_name(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="text" required={true} placeholder="UserName" onChange={(e)=>setUser_name(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="email" required={true} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="tel" required={true} placeholder="Telephone" onChange={(e)=>setTel(e.target.value)} value={tel_number}/>
        </div>
        <div className='mt-3'>
        <input type="password" required={true} placeholder="Password" onChange={(e)=>setPassowrd(e.target.value)}/>
        </div>
        <div className='mt-3'>
        <input type="password" required={true} placeholder="Confirm Password" onChange={(e)=>setConfrmPaswd(e.target.value)}/>
        </div>
        {hasError?<div style={{color:"red"}}>Password donot match</div>:null}
        <div className='mt-3'>
        <button type="submit">Submit</button>
        </div>
        </form>
        

    </div>
  )
}

export default Registration