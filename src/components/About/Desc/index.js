import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';

const Desc = () => {
    return (
        <>
            <div style={{ margin: 'auto' }}>
                <SpaIcon style={{ color: '#47c0bc' }} />
            </div>
            <div style={{ marginTop: 18, fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                Reflexology is a Hollistic Therapy which works on the reflex points of the feet that relate to
                all the organs / systems of the body. By using percise finger techniques a reflexologist can help
                in inducing relaxtion, thus enabling the body to internally balance or Homeostasis as we know it.
            </div>
            <div style={{ marginTop: 44, textAlign: 'left' }}>
                <div style={{ fontSize: 24, letterSpacing: 0.3, fontWeight: 600 }}>
                    Benefits
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ width: '40%', marginTop: 10, fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                        <ul style={{ textAlign: 'left' }}>
                            <li>Improve circulation</li>
                            <li>Induces relaxtion</li>
                            <li>Reduces stress and anxiety</li>
                        </ul>
                    </div>
                    <div style={{ width: '40%', marginTop: 10, fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                        <ul style={{ textAlign: 'left' }}>
                            <li>Improves energy</li>
                            <li>Regulates hormones</li>
                            <li>Strengthens the immnune system</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desc;