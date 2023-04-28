import React, { useEffect, useState } from 'react'
import registerSvg from '../assets/register.svg'
import './styles/register.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const register = () => {
  const [focus, setFocus] = useState(null);
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    cPassword: ""
  });
  const [matchPassword, setMatchPassword] = useState({
    focus: false,
    match: false
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    // console.log("name: ", inputName, "value: ", inputValue);
    setInput({ ...input, [inputName]: inputValue });

    if (inputName === "cPassword") {
      setMatchPassword({ ...matchPassword, focus: true });
    }
  }

  useEffect(() => {
    if (input.password === input.cPassword && input.password != "") {
      setMatchPassword({ ...matchPassword, match: true });
    } else {
      setMatchPassword({ ...matchPassword, match: false });
    }
  }, [input.cPassword])


  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    const { data } = await axios.post("/api/user/register", {
      name: input.name,
      number: input.number,
      email: input.email,
      password: input.password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (data) {
      navigate(`/verify/${input.email}`);
    }
    console.log(data);
  }

  return (
    <section className='register container'>
      <div className="svg">
        <img src={registerSvg} alt="Register" />
      </div>
      <div className="register-form">
        <form method="post" onSubmit={formSubmit}>
          <h1>Registration</h1>
          <div className="input-filed">
            <label htmlFor="fullName" className={focus === 'name' ? 'focus-input' : ""}>Full name</label>
            <input type="text" name="name" placeholder='Full name' onFocus={(e) => setFocus(e.target.name)} value={input.name} onChange={inputChange} required />
          </div>
          <div className="input-filed">
            <label htmlFor="email" className={focus === 'email' ? 'focus-input' : ""}>Email</label>
            <input type="email" name="email" placeholder='Email' onFocus={(e) => setFocus(e.target.name)} value={input.email} onChange={inputChange} required />
          </div>
          <div className="input-filed">
            <label htmlFor="number" className={focus === 'number' ? 'focus-input' : ""}>Phone number</label>
            <input type="text" name="number" placeholder='Phone Number' onFocus={(e) => setFocus(e.target.name)} value={input.number} onChange={inputChange} required />
          </div>
          <div className="input-filed">
            <label htmlFor="password" className={focus === 'password' ? 'focus-input' : ""}>Password</label>
            <input type="password" name="password" placeholder='Password' onFocus={(e) => setFocus(e.target.name)} value={input.password} onChange={inputChange} required />
          </div>
          <div className="input-filed">
            <label htmlFor="cPassword" className={focus === 'cPassword' ? 'focus-input' : ""}>Confirm Password</label>
            <input type="password" name="cPassword" placeholder='Confirm password' onFocus={(e) => setFocus(e.target.name)} value={input.cPassword} onChange={inputChange} required />
          </div>
          <div className={matchPassword.focus ? '' : 'none'}>
            {matchPassword.match ? (
              <div className='password-match-notification'>
                <li className='material-symbols-outlined match-icon'>check_circle</li>
                <span className='match-icon'>Matched password</span>
              </div>
            ) :
              (
                <div className='password-match-notification'>
                  <li className='material-symbols-outlined no-match-icon'>Cancel</li>
                  <span className='no-match-icon'>No match password</span>
                </div>
              )}
          </div>
          <input type="submit" value="Register" />
          <div className="navigate-links">
            <span>I Have already Account ! <Link to={"/login"} style={{ color: 'blue' }}>Login</Link></span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default register