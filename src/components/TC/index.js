import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import HealthCards from "../HealthCards";
import SpaIcon from '@mui/icons-material/Spa';
import './style.css'

const TC = () => {
    return (
        <>
            <CoverPhotoShort title="Terms & Conditions" />
            <div style={{ margin: '30px 0px' }}>
                <div style={{ width: '70%', margin: 'auto', fontSize: 21, lineHeight: 1.5, letterSpacing: 0.3 }}>
                <div style={{ margin: 'auto', marginBottom: 18 }}>
                    <SpaIcon style={{ color: '#47c0bc' }} />
                </div>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Appointments are for women only</li>
                        <li>By appointment only</li>
                        <li>24 hour cancellation policy</li>
                        <li>As a registered IRI (Irish Reflexologist Institute) member, I am approved by VHI, Laya, Glohaelthcard and Irish Life Health. Please check your policy to see if you are eligible</li>
                        <li>It may be necessary to get your doctor's permission before treatment can commence.
                            Reflexologists are not qualified to diagnose, prescribe or treat medical conditions.</li>
                    </ul>
                </div>
                <div style={{ marginTop: 60 }}>
                    <HealthCards />
                </div>
            </div>
        </>
    )
}

export default TC;