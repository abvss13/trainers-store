import React,{useState} from 'react'
import LoginContext from './LoginContext'
import {useHistory} from 'react-router-dom'


const Register =()=>{
    let [Register , SetRegister]=useState({
        Name: '',
        Email:'',
        Password:'',
    })  
    const ChangeHandle=(e)=>{
        const value = e.target.value;
        SetRegister({
            ...Register,
            [e.target.name]:value        
        })    
    }
    let history =useHistory();

    const Clicked =(e)=>{
        e.preventDefault()
        var Log = Register
        if(Log.Name || Log.Password !== "" ){
            LoginContext._currentValue = Log
            console.log(LoginContext._currentValue)
            // console.log("IF")
            alert('REGISTERED SUCESSFULLY')
            history.push('/Login')
        }
        else{
            // console.log(LoginContext._currentValue)
            alert("ENTER INFORMATION")
            }
    }
    return(
        <div>
        
            <h1>Register Form</h1>
            <form>
            <strong>Name:</strong><input type='text' required name='Name' value ={Register.Name} onChange={ChangeHandle}/>
      <br /><strong>Email:</strong><input type='email' required name='Email' value ={Register.Email} onChange={ChangeHandle}/>
      <br /><strong>Password:</strong><input type='password' required name='Password' value ={Register.Password} onChange={ChangeHandle}/>
            <input type="submit" value="Submit" onClick={Clicked} />
            </form>
        </div>
       
       )
    }

export default Register