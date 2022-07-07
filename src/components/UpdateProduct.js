import React from 'react'
import Header from './Header';
import { useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'

const UpdateProduct = () => {
      let userId  = useParams();
    let id = parseInt(userId.id) 

    const [data,setData]=useState([])

    const [name,setName]=useState('');
    const [file,setFile]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');


    const getsingleProduct = async()=>{
    let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`
    // ,{
    //   method: 'GET',
    //   crossDomain:true,
    //   credentials: "same-origin", //include, same-origin
    //   headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
    // }
    )
          result = await result.json();
          setData(result)
          // console.log('data',result)
          // console.log('data',data)
          
};

 
useEffect( ()=>{
  getsingleProduct()
},[])
 
// console.log('data',data)

  return (
    <>
    <Header/>
    <>UpdateProduct
    
    <div className='col-sm-6 offset-sm-3'> <br />
  
  
    <input defaultValue={data.name}  onChange={(e)=>setName(e.target.value)} type="text"  className='form-control' /> <br />
    <input defaultValue={data.file_path}  onChange={(e)=>setFile(e.target.value)} type="file"  className='form-control' ></input> <br />
    <img style={{width:100}} src={'http://127.0.0.1:8000/'+data.file_path} />
    <input  defaultValue={data.description}  onChange={(e)=>setDescription(e.target.value)} type="text" className='form-control' ></input> <br />
    <input defaultValue={data.price} onChange={(e)=>setPrice(e.target.value)} type="text" className='form-control' ></input> <br />
    {/* <button onClick={addproduct } className='btn btn-primary'>Add Product</button> */}

    </div>
    </>
    </>
  )
}

export default UpdateProduct