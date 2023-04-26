import React from 'react'
import Sidebar from '../components/Sidebar'
import "./styles/searchProduct.css"

const SearchProduct = () => {
    return (
        <>
            <div className='admin-container'>
                <Sidebar />
                <div className="main-content-container">
                    <h2>Search Product</h2>
                    <div className='search-bar-content'>
                        <div className="form-control">
                            <form method='post'>
                                <div className="input-filed">
                                    <label>Model Number:</label>
                                    <input
                                        type="search"
                                        name="search-cover"
                                        id="search-id"
                                        placeholder='Search Model '
                                    />
                                </div>
                                <div className="inputfiled">
                                    <button
                                        type='submit'
                                        className='search-button'
                                    > Search
                                    </button>
                                </div>

                                <div className="result-container">
                                    <h2>Result</h2>
                                    <ul className='result'>
                                        <li><span>Section Number:</span> 01</li>
                                        <li><span>Box Number:</span> 15</li>
                                        <li><span>Product:</span> Samsung S7</li>
                                        <li><span>Location:</span> 1 row 2 column</li>
                                        <li><span>Quantity:</span> 8</li>
                                    </ul>
                                </div>

                            </form>

                        </div>

                    </div>


                    {/* <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Section Number</th>
                                    <th>Box Number</th>
                                    <th>Product</th>
                                    <th>Location</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>01</td>
                                    <td>Samsung F42</td>
                                    <td>2-row 1-column</td>
                                    <td>15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default SearchProduct