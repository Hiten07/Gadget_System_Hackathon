import React from 'react'
import Sidebar from '../components/Sidebar'
import "./styles/searchProduct.css"
import "../index.css"

const SearchProduct = () => {
  return (
    <>
        <div className='admin-container'>
            <Sidebar/>
            <div className="main-content-container">
                <div className='search-bar-content'>
                    <h2>Search Cover</h2>
                        <div className="form-control">
                            <form method='post'>
                                <div className="input-filed">
                                    <label>Model Number : </label>
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
                            </form>
                        </div>
                </div>

                <div className="result-container">
                    <h2>Results</h2>
                        <ul className='list'>
                            <li className='list-item'>Name</li>
                            <li className='list-item'>Box Number</li>
                            <li className='list-item'>Location</li>
                            <li className='list-item'>Brand</li>
                            <li className='list-item'>Model</li>
                            <li className='list-item'>No of cover</li>
                        </ul>
                </div>

                <table>
                    <tr>
                        <td>1</td>
                        <td>01</td>
                        <td>2-row 1-column</td>
                        <td>xyz</td>
                        <td>m 16</td>
                        <td>15</td>
                    </tr>
                </table>

            </div>
        </div>
    </>
  )
}

export default SearchProduct