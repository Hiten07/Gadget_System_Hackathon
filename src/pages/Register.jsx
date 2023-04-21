import React from 'react'
// import registerGif from '../assets/register.gif'
// import './styles/register.svg'

const register = () => {
  return (
    <section className='register container'>
      <div className="gif">
        {/* <img src={registerGif} alt="Register" /> */}
      </div>
      <div className="register-form">
        <form method="post">
          <div className="input-filed">
            <label htmlFor="fullName">Full name</label>
            <input type="text" name="name" />
          </div>
          <div className="input-filed">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-filed">
            <label htmlFor="number">Phone number</label>
            <input type="number" name="number" />
          </div>
          <div className="input-filed">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input-filed">
            <label htmlFor="cPassword">Conform Password</label>
            <input type="password" name="cPassword" />
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  )
}

export default register