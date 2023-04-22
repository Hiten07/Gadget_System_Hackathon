import React, { useState } from 'react'
import "./styles/addProduct.css"
import Sidebar from '../components/Sidebar'

function AddProduct() {
    const [toggle, setToggle] = useState("section");

    return (
        <div className='add-product admin-container'>
            <Sidebar />
            <div className="main-content-container">
                <h2>Create Product</h2>
                <div className="selection">
                    <span className={toggle === 'section' ? 'active' : 'deActive'} onClick={() => setToggle("section")}>Section</span>
                    <span className={toggle === 'model' ? 'active' : 'deActive'} onClick={() => setToggle("model")}>Model</span>
                </div>

                {toggle === 'section' ? (
                    <div className="form-control">
                        <form method="post">
                            <div className="input-filed">
                                <label htmlFor="section">Section Number</label>
                                <input type="number" name="sectionNumber" value={"01"} disabled />
                            </div>
                            <div className="input-filed">
                                <label htmlFor="category">Category</label>
                                <select name="category">
                                    <option value="null" selected>Select Category</option>
                                    <option value="Cover">Cover</option>
                                    <option value="glass">Glass</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                            </div>
                            <div className="input-filed">
                                <label htmlFor="section">Brand</label>
                                <input type="text" name="brand" placeholder='brand' required />
                            </div>
                            <input type="submit" value="Create Section" />
                        </form>
                    </div>
                ) : (
                    <div className="form-control">
                        <form method="post">
                            <div className="input-filed">
                                <label htmlFor="section">Section</label>
                                <select name="section">
                                    <option value="null" selected>Select section</option>
                                    <option value="Cover">Samsung</option>
                                    <option value="glass">Oppo</option>
                                    <option value="accessories">Vivo</option>
                                    <option value="accessories">Apple</option>
                                    <option value="accessories">One pluse</option>
                                </select>
                            </div>
                            <div className="input-filed">
                                <label htmlFor="section">Box Number</label>
                                <input type="number" name="boxNumber" value={"01"} disabled />
                            </div>
                            <div className="input-filed">
                                <label htmlFor="model">Model</label>
                                <input type="text" name="model" placeholder='model' required />
                            </div>
                            <div className="input-filed">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="text" name="quantity" placeholder='quantity' required />
                            </div>
                            <div className="input-filed">
                                <label htmlFor="location">Location</label>
                                <div className="row_column">
                                    <input type="text" name="row" placeholder='row' required />
                                    <input type="text" name="column" placeholder='column' required />
                                </div>
                            </div>
                            <input type="submit" value="Create Model" />
                        </form>
                    </div>
                )}



            </div>
        </div>
    )
}

export default AddProduct
