import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import vhiLogo from '../../assets/vhiLogo.png';
import layaLogo from '../../assets/layaLogo.png';
import irishLifeLogo from '../../assets/irishLifeLogo.png';
import './style.css';

const HealthCards = () => {
    return (
        <div className="mainWrapper">
            <div className="healthRow">
                <div className="healthColumn">
                    <div className="healthCard">
                        <LazyLoadImage src={vhiLogo} alt="vhi" width={150} />
                    </div>
                </div>
                <div className="healthColumn">
                    <div className="healthCard">
                        <LazyLoadImage src={layaLogo} alt="vhi" width={150} />
                    </div>
                </div>
                <div className="healthColumn">
                    <div className="healthCard">
                        <LazyLoadImage src={irishLifeLogo} id="irishLife" alt="vhi" width={165} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthCards;