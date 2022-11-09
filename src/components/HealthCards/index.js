import React from "react";
import vhiLogo from '../../assets/vhiLogo.png';
import layaLogo from '../../assets/layaLogo.png';
import irishLifeLogo from '../../assets/irishLifeLogo.png';
import './style.css';

const HealthCards = () => {
    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <div className="healthRow">
                <div className="healthColumn">
                    <div className="healthCard">
                        <img src={vhiLogo} alt="vhi" width={150} />
                    </div>
                </div>
                <div className="healthColumn">
                    <div className="healthCard">
                        <img src={layaLogo} alt="vhi" width={150} />
                    </div>
                </div>
                <div className="healthColumn">
                    <div className="healthCard">
                        <img src={irishLifeLogo} id="irishLife" alt="vhi" width={165} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthCards;