import React from 'react'
import Header from './Header'
import { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const ProductList = () => {
  const [data,setData]=useState([])

// gets all listings
  const getlist= async()=>{
  let result = await fetch('http://127.0.0.1:8000/api/product-list');
        result = await result.json();
        setData(result)
}

  useEffect( ()=>{
    getlist()
  },[])

  // delete
async function deleteOp(id){
   let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
      method:'DELETE', 
    }
    )
    getlist()
    result = await result.json();
    console.warn(result)
 }


  return (
    <>
    <Header/>
    <div className='col-sm-10 offset-sm-1 '>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>image</th>
      <th>Operations</th>
     
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>
    <tr key={item.id}>
       <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td> <img style={{width:100}} src= {"http://127.0.0.1:8000/"+item.file_path}/></td>
    <td><span onClick={()=>deleteOp(item.id)} className='delete'>delete</span></td>
    <Link to={"update-product/"+item.id}> <td><span className='update'>Update</span></td></Link>
   
    </tr>
    )}
   
    
  </tbody>
</Table>
</div>
    
    </>
  )
}

export default ProductList