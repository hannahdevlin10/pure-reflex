import React from "react";
import feetLogo from "../../../assets/feet-about-reflex.jpeg";
import './style.css';

const AboutReflex = () => {
    return (
        <div className="aboutMainWrapper">
            <div className="abtCol" style={{ textAlign: 'left' }}>
                <span style={{ fontSize: 36 }}>About Reflexology</span>
                <div style={{ marginTop: 18, fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                    Reflexology is a Holistic Therapy which works on the reflex points of the feet that relate to
                    all the organs and systems of the body. By using precise finger techniques a reflexologist can help
                    in inducing relaxation, thus enabling the body to internally balance or Homeostasis as we know it.
                </div>
            </div>
            <div className="abtCol">
                <div style={{
                    background: `url(${feetLogo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 230
                    }} />
            </div>
        </div>
    )
}

export default AboutReflex;