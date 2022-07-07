import React from 'react';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';
const Register = () => {

  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
        navigate('/addproduct')
    }
  },[])

  async function sighnup(){
    let item={username,password,email}
    let result =await fetch('http://127.0.0.1:8000/api/register',{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    result= await result.json()
    localStorage.setItem('user-info',JSON.stringify(result))
    navigate('/addproduct')
  }
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'>
    <h2>Register page</h2>
   <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} className='form-control'placeholder='Username' /><br />
   <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'placeholder='Email' /> <br />
   <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'placeholder='Password' /> <br />
   <button onClick={sighnup} className='btn btn-primary' > sighn up</button>
    </div></>
  )
}

export default Register