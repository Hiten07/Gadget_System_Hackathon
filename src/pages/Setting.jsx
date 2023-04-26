import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import './styles/setting.css'

const Setting = () => {
    const [section, setSection] = useState(false);
    const [model, setModel] = useState(false);
    const [qr, setQr] = useState(false);
    return (
        <div className='admin-container'>
            <Sidebar />
            <div className="main-content-container">
                <h2>Setting</h2>
                <div className="setting-container">
                    <div className="setting-title" onClick={() => section ? setSection(false) : setSection(true)} >
                        <h4>Section</h4>
                        {section ? <li className='material-symbols-outlined' >expand_less</li> : <li className='material-symbols-outlined' >expand_more</li>}
                    </div>

                    {section ? (
                        <div className="setting-show">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Section No.</th>
                                        <th>Brand</th>
                                        <th>No of Model</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Apple</td>
                                        <td>13</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Vivo</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>samsung</td>
                                        <td>22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : ""}


                    <div className="setting-title" onClick={() => model ? setModel(false) : setModel(true)} >
                        <h4>Model</h4>
                        {model ? <li className='material-symbols-outlined' >expand_less</li> : <li className='material-symbols-outlined' >expand_more</li>}
                    </div>

                    {model && (
                        <div className="setting-show">
                            <h4>01 Samsung</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Box No.</th>
                                        <th>Model</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Iphone 14 pro</td>
                                        <td>13</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Iphone 8</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>Iphone 6s</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h4>02 Apple</h4>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Box No.</th>
                                        <th>Model</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Iphone 14 pro</td>
                                        <td>13</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Iphone 8</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>Iphone 6s</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}


                    <div className="setting-title" onClick={() => model ? setQr(false) : setQr(true)} >
                        <h4>QR Code</h4>
                        {qr ? <li className='material-symbols-outlined' >expand_less</li> : <li className='material-symbols-outlined' >expand_more</li>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
