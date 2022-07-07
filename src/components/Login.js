import React from 'react';
import Header from './Header';
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
useEffect(()=>{
  if(localStorage.getItem('user-info')){
    
      navigate('/addproduct')
  }
},[])

 async function logIn(){
  let item={email,password}
  let result =await fetch('http://127.0.0.1:8000/api/login',{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  })
  
  result= await result.json()
  // console.log(result.error); 
  localStorage.setItem('user-info',JSON.stringify(result))
  navigate('/addproduct')
}
  return (
    <>
    <Header/>
  
    <div className='col-sm-6 offset-sm-3'>
      <h2> login page</h2> 
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='email' className='form-control'></input> <br />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password' className='form-control'></input> <br />
      <button onClick={logIn} className='btn btn-primary'>Login</button>
      </div>
    </>
  )
}

export default Login
