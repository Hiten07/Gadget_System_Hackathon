import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import "./styles/sellPurchase.css"
import Html5QrcodePlugin from '../components/scanner/Html5QrcodePlugin';
import ResultContainerPlugin from '../components/scanner/ResultContainerPlugin';

const SellPurchase = () => {
    const [toggle, setToggle] = useState("sell");
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        console.log("decoded text:", decodedText);
        setDecodedResults((prev) => [...prev, decodedResult]);
    };

    return (
        <div className='admin-container'>
            <Sidebar />
            <div className="main-content-container">
                <h2>Sell & Purchase</h2>
                <div className="selection">
                    <span className={toggle === 'sell' ? 'active' : 'deActive'} onClick={() => setToggle("sell")}>Sell</span>
                    <span className={toggle === 'purchase' ? 'active' : 'deActive'} onClick={() => setToggle("purchase")}>Purchase</span>
                </div>

                {toggle === 'sell' ? (
                    <div className='sell'>
                        <Html5QrcodePlugin
                            fps={10}
                            qrbox={250}
                            disableFlip={false}
                            qrCodeSuccessCallback={onNewScanResult}
                        />
                        <ResultContainerPlugin results={decodedResults} type="sell" />
                    </div>
                ) : (
                    <div className='purchase'>
                        <Html5QrcodePlugin
                            fps={10}
                            qrbox={250}
                            disableFlip={false}
                            qrCodeSuccessCallback={onNewScanResult}
                        />
                        <ResultContainerPlugin results={decodedResults} type="purchase" />
                    </div>
                )}

            </div>
        </div>
    )
}

export default SellPurchase
