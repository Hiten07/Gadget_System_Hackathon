import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import SellPurchase from './pages/SellPurchase';
import Setting from './pages/Setting';
import Account from './pages/Account';

function App() {
  const isLogin = true;
  console.log(window.location.pathname)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={isLogin ? <Dashboard /> : <Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/sell-purchase' element={<SellPurchase />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
