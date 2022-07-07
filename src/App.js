
import "./App.css";

// import Header from './components/Header';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Protected from "./components/Protected";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";


function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
            <Route path="/product" element={<Protected Cmp={AddProduct} />} />
            <Route path="/" element={<Protected Cmp={ProductList} />} />
            <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="update-product/:id" element={<Protected Cmp={UpdateProduct} />} />
         
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
