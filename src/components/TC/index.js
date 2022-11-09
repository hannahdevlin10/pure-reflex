import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";

const TC = () => {
    return (
        <>
            <CoverPhotoShort title="Terms & Conditions" />
            <div style={{ margin: '60px 0px' }}>
                <div style={{ width: '70%', margin: 'auto', fontSize: 21, lineHeight: 2.4, letterSpacing: 0.3 }}>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Appointments are for women only</li>
                        <li>By appointment only</li>
                        <li>24 hour cancellation policy</li>
                        <li>As a registered IRI (Irish Reflexologist Institute) member, I am approved by VHI, Laya, Glohaelthcard and Irish Life Health. Please check your policy to see if you are eligible</li>
                        <li>It may be necessary to get your doctors permission before treatment can commence</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default TC;