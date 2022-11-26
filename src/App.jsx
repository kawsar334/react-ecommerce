
import  {Routes, Route  } from "react-router-dom"
import Pay from "./components/Pay"
import Success from './components/Success';
import Register from "./pages/register/Register" ;
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    < >

<Routes >
  
  {/* <Route path='/pay' element={<Pay />} />
  <Route path='/success' element={<Success />} /> */}

        <Route  path='/' element={<Home />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/cart' element={<Cart />} />



        

</Routes>

    
    </>
  );
}

export default App;
