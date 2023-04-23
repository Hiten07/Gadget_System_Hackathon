import React, { useEffect, useState } from 'react'
import loginSvg from '../assets/login.svg'
import './styles/login.css'
import { Link } from 'react-router-dom';

const login = () => {
  const [focus, setFocus] = useState(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    // console.log("name: ", inputName, "value: ", inputValue);
    setInput({ ...input, [inputName]: inputValue });
  }


  const formSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <section className='login container'>
      <div className="svg">
        <img src={loginSvg} alt="login" />
      </div>
      <div className="login-form">
        <form method="post" onSubmit={formSubmit}>
          <h1>Login</h1>
          <div className="input-filed">
            <label htmlFor="email" className={focus === 'email' ? 'focus-input' : ""}>Email</label>
            <input type="email" name="email" placeholder='Email' onFocus={(e) => setFocus(e.target.name)} value={input.email} onChange={inputChange} required />
          </div>
          <div className="input-filed">
            <label htmlFor="password" className={focus === 'password' ? 'focus-input' : ""}>Password</label>
            <input type="password" name="password" placeholder='Password' onFocus={(e) => setFocus(e.target.name)} value={input.password} onChange={inputChange} required />
          </div>
          <div className="navigate-links" style={{ marginTop: 0 }}>
            <span><Link to={"/reset-password"} style={{ color: 'blue' }}>Forgot password?</Link></span>
          </div>
          <input type="submit" value="Login" />
          <div className="navigate-links">
            <span>New here? <Link to={"/register"} style={{ color: 'blue' }}>Create an Account</Link></span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default login