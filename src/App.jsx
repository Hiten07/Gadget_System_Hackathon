import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
