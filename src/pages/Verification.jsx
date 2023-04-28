import React, { useState } from 'react'
import VerifySvg from '../assets/verify.svg'
import './styles/resetPassword.css'
import { useParams } from 'react-router-dom';


function Verification() {
    const [focus, setFocus] = useState(null);
    const [input, setInput] = useState({
        otp: "",
    });
    const params = useParams();

    const inputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        // console.log("name: ", inputName, "value: ", inputValue);
        setInput({ ...input, [inputName]: inputValue });
    }


    const formSubmit = (e) => {
        e.preventDefault();
        console.log(input);

        console.log(params.email);

    }

    return (
        <section className='reset-password container'>
            <div className="svg">
                <img src={VerifySvg} alt="reset-password" />
            </div>
            <div className="reset-password-form">
                <form method="post" onSubmit={formSubmit}>
                    <br />
                    <h1>Verify OTP</h1>
                    <div className="input-filed">
                        <label htmlFor="otp" className={focus === 'otp' ? 'focus-input' : ""}>OTP</label>
                        <input type="number" name="otp" placeholder='otp' onFocus={(e) => setFocus(e.target.name)} value={input.otp} onChange={inputChange} required />
                    </div>
                    <input type="submit" value="Verify" />
                </form>
            </div>
        </section>
    )
}

export default Verification

