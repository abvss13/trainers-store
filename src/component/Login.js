import React,{useState, useContext} from 'react'
import LoginContext from './LoginContext'
import {useHistory} from 'react-router-dom'

const Login =()=>{
    let data = useContext(LoginContext)
    // console.log(data)
    let [status, Setstatus]=useState({
        LoggedIn:false
    })
        
    // console.log(status.LoggedIn)
    LoginContext._currentValue2 = status
    let history = useHistory()

    let [Login , SetLogin]=useState({
        Name: '',
        Password:''
    })

    const ChangeHandle=(e)=>{
        const value = e.target.value;
        SetLogin({
            ...Login,
            [e.target.name]:value

        })
    }
    const Clicked=()=>{
        if(Login.Name === data.Name && Login.Password === data.Password){
            alert('LoggedIn Sucessfully')
            Setstatus(
                status.LoggedIn=true
            )
            // console.log(LoginContext._currentValue2)
            history.push('/')
         }
        else{
            Setstatus({
               LoggedIn:false
            }
            )
            alert('Incorrect UserName/Password')
            // console.log(    LoginContext._currentValue2        )
        }
    }
    
    return(
        <div>
            <h1>Login Form</h1>
            <h3>Name:</h3>    <input type='text'  name='Name' value ={Login.Name} onChange={ChangeHandle}/>
            <h3>Password:</h3><input type='password' name='Password' value ={Login.Password} onChange={ChangeHandle}/>
            <button onClick={Clicked}>Submit</button>
        </div>
    )
}

export default Login