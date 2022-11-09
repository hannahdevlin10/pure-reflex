import React from "react";
import cover from '../../assets/water-lily-dark.png'
import './style.css'

const CoverPhotoShort = ({ title }) => {
    return (
        <div
            className="shortWrapper"
            style={{ background: `url(${cover})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' }}>
            <div className="shortInnerWrapper">
                <div className="shortInnerTitle">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default CoverPhotoShort;