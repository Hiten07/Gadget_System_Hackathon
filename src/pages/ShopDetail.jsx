import React, { useEffect, useState } from 'react'
import shopDetailSvg from '../assets/shop_detail.svg'
import './styles/register.css'
import { Link } from 'react-router-dom';

const ShopDetail = () => {
    const [focus, setFocus] = useState(null);
    const [input, setInput] = useState({
        shopName: "",
        state: "",
        city: "",
        address: "",
        cPassword: ""
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
        <section className='register container'>
            <div className="svg">
                <img src={shopDetailSvg} alt="Shop Details" />
            </div>
            <div className="register-form">
                <form method="post" onSubmit={formSubmit}>
                    <h1 style={{ marginBottom: 0 }}>Shop Details</h1>
                    <div className="input-filed">
                        <label htmlFor="shopName" className={focus === 'shopName' ? 'focus-input' : ""}>Shop name</label>
                        <input type="text" name="shopName" placeholder='Shop name' onFocus={(e) => setFocus(e.target.name)} value={input.shopName} onChange={inputChange} required />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="state" className={focus === 'state' ? 'focus-input' : ""}>State</label>
                        <input type="text" name="state" placeholder='State' onFocus={(e) => setFocus(e.target.name)} value={input.state} onChange={inputChange} required />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="city" className={focus === 'city' ? 'focus-input' : ""}>City</label>
                        <input type="text" name="city" placeholder='City' onFocus={(e) => setFocus(e.target.name)} value={input.city} onChange={inputChange} required />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="shopNumber" className={focus === 'shopNumber' ? 'focus-input' : ""}>Shop number</label>
                        <input type="text" name="shopNumber" placeholder='Shop number' onFocus={(e) => setFocus(e.target.name)} value={input.shopNumber} onChange={inputChange} required />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="address" className={focus === 'landmark' ? 'focus-input' : ""}>Address</label>
                        <input type="text" name="landmark" placeholder='Address' onFocus={(e) => setFocus(e.target.name)} value={input.address} onChange={inputChange} required />
                    </div>
                    <div className="input-filed">
                        <label htmlFor="pinCode" className={focus === 'pinCode' ? 'focus-input' : ""}>Pin Code</label>
                        <input type="text" name="pinCode" placeholder='Pin code' onFocus={(e) => setFocus(e.target.name)} value={input.pinCode} onChange={inputChange} required />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    )
}

export default ShopDetail