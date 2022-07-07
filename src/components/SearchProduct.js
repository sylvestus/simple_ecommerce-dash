import React from 'react';
import Header from './Header'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const SearchProduct = () => {
const [data,setData]=useState([])

   async function search(key){
    // alert(key)
    let result = await fetch(`http://127.0.0.1:8000/api/search/${key}`)
      result = await result.json();
      console.log(result)
      setData(result)
  }
  
  return (
    <>
    <Header/>
    <div className='col-sm-6 offset-sm-3'> <br />
    <h1> search product</h1>

    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>search(e.target.value)} 
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

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
    
    </tr>
    )}
   
    
  </tbody>
</Table>
    </div>
    </>
  )
}

export default SearchProduct