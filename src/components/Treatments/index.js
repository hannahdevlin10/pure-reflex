import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import './style.css';

const Treatments = () => {
    return (
        <>
            <CoverPhotoShort title="Treatments & Prices" />
            <div style={{ margin: '30px 0px' }}>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <div style={{ marginBottom: 40 }}>
                        <div className="priceItem">
                            <div className="leftItem">
                                <h4>Classic Reflexology</h4>
                            </div>
                            <div className="rightItem">
                                €60
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }}>
                            Relieves stress and tension and has a deeply relaxing effect (45 mins)
                        </div>
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <div className="priceItem">
                            <div className="leftItem">
                                <h4>Facial Reflexology</h4>
                            </div>
                            <div className="rightItem">
                                €60
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }}>
                            Works the facial contours to relax tightness or stagnation (45 mins)
                        </div>
                    </div>
                    <div style={{ marginBottom: 30 }}>
                        <div className="priceItem">
                            <div className="leftItem">
                                <h4>Reflexology for Menopause</h4>
                            </div>
                            <div className="rightItem">
                                €60
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }}>
                            Regulates hormones and glandular functions of the body (45 mins)
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Treatments;