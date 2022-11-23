import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import './style.css';

const Treatments = () => {
    return (
        <>
            <CoverPhotoShort title="Treatments & Prices" />
            <div style={{ margin: '30px 0px' }}>
                <div className="mainWrapper">
                    <div style={{ marginBottom: 45, marginTop: 45 }}>
                        <div className="priceItem">
                            <div className="leftItem">
                                <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Classic Reflexology</div>
                                <span className="duration">Duration: 45 mins</span>
                            </div>
                            <div className="rightItem">
                                <span id="price">€60</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }} className="definition">
                        Is performed on the feet. Treatment starts with some relaxation techniques.
                        Reflexology then follows, using gentle but firm pressure over the entire foot.
                        In addition to relaxing the body, reflexology also relaxes the mind.
                        It's a natural, non- invasive therapy and can help clients to cope better with
                        life's demands. Did you know 75% of disease is estimated to be stress related?
                        </div>
                    </div>
                    <div style={{ marginBottom: 45 }}>
                        <div className="priceItem">
                            <div className="leftItem">
                                <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Facial Reflexology</div>
                                <span className="duration">Duration: 45 mins</span>
                            </div>
                            <div className="rightItem">
                                <span id="price">€60</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }} className="definition">
                            Is performed on a cleansed face and neck.
                            Reflexology and massage techniques  are used to stimulate and
                            rebalance vital points on the face. A facial roller is used in
                            this treatment to smooth out skin and enhance the complexion.
                            Some of the many benefits of facial reflexology include, improved muscle tone,
                            congestion relief, reduced tension and stiffness in the muscles of the face
                            and head. Skin is left glowing and radiant.
                        </div>
                    </div>
                    <div>
                        <div className="priceItem">
                            <div className="leftItem">
                                <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Reflexology for Menopause</div>
                                <span className="duration">Duration: 45 mins</span>
                            </div>
                            <div className="rightItem">
                                <span id="price">€60</span>
                            </div>
                        </div>
                        <div style={{ textAlign: 'left', fontSize: 18, color: '#666666' }} className="definition">
                            Is performed on the feet. Treatment begins with relaxing techniques.
                            A gentle reflexology sequence follows focusing on the Nervous, Endocrine,
                            and Reproductive systems to help balance and calm. 85% of women experience
                            menopausal symptoms, of which there are many. Reflexology can give women
                            the opportunity to help themselves by providing a quiet, soothing environment
                            to relax, ground and heal themselves during this challenging time.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Treatments;