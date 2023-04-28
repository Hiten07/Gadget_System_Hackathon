import React, { useEffect, useState } from 'react'
import ResetPasswordSvg from '../assets/resetPassword.svg'
import './styles/resetPassword.css'


function ResetPassword() {
    const [focus, setFocus] = useState(null);
    const [input, setInput] = useState({
        password: "",
        cPassword: "",
    });
    const [matchPassword, setMatchPassword] = useState({
        focus: false,
        match: false
    });

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


    const formSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <section className='reset-password container'>
            <div className="svg">
                <img src={ResetPasswordSvg} alt="reset-password" />
            </div>
            <div className="reset-password-form">
                <form method="post" onSubmit={formSubmit}>
                    <h1>Reset password</h1>
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
                    <input type="submit" value="Reset" />
                </form>
            </div>
        </section>
    )
}

export default ResetPassword
