import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';
import './style.css';

const Desc = () => {
    return (
        <>
            <div style={{ marginTop: 18, fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                Reflexology is a Holistic Therapy which works on the reflex points of the feet that relate to
                all the organs / systems of the body. By using precise finger techniques a reflexologist can help
                in inducing relaxation, thus enabling the body to internally balance or Homeostasis as we know it.
            </div>
            <div style={{ marginTop: 44, textAlign: 'left' }}>
                <div style={{ fontSize: 24, letterSpacing: 0.3, fontWeight: 600, marginBottom: 14 }}>
                    Benefits
                </div>
                <div className='row'>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Improves circulation</div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Induces relaxation</div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Helps the body to eliminate toxins</div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Reduces stress and anxiety</div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Regulates hormones</div>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='card' id="aboutCard">
                            <SpaIcon style={{ color: '#47c1bc' }} />
                            <div id="aboutCardText">Strengthens the immune system</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desc;