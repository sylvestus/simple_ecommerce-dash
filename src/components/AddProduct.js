import React from 'react';
import Header from './Header'
import {useState} from 'react'


const AddProduct = () => {
  const [name,setName]=useState('');
  const [file,setFile]=useState('');
  const [price,setPrice]=useState('');
  const [description,setDescription]=useState('');

  async function addproduct(){
    const formData = new FormData();
    formData.append('file',file);
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    let result = await fetch('http://127.0.0.1:8000/api/add-product',{
      method:'POST',
      body:formData,
    });
    alert('data saved successfully')
  }

  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'> <br />
   
    <input  value={name} onChange={(e)=>setName(e.target.value)}  type="text"  className='form-control' placeholder='Name'></input> <br />
    <input   onChange={(e)=>setFile(e.target.files[0])} type="file"  className='form-control' placeholder='File'></input> <br />
    <input  value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className='form-control' placeholder='Description'></input> <br />
    <input  value={price} onChange={(e)=>setPrice(e.target.value)} type="text" className='form-control' placeholder='Price'></input> <br />
    <button onClick={addproduct } className='btn btn-primary'>Add Product</button>

    </div>
    </>
  )
}

export default AddProduct