import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search  from './pages/SearchProduct';
import Navbar from './components/Navbar';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import SellPurchase from './pages/SellPurchase';

function App() {
  const isLogin = true;
  console.log(window.location.pathname)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={isLogin ? <Dashboard /> : <Login />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/sell-purchase' element={<SellPurchase />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
