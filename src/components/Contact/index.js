import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.css';
import Form from "../Form";

const Contact = () => {
    return (
        <>
            <CoverPhotoShort title="Contact" />
            <div style={{ margin: '30px 0px' }}>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <div className="cardRow" style={{ marginBottom: 25 }}>
                        <div className="cardColumn">
                            <div className="cardContact">
                                <div style={{ marginBottom: 15 }}>
                                    <FacebookIcon style={{ fontSize: 32 }} />
                                </div>
                                <div className="contactText" style={{ fontSize: 22 }}>
                                    <a href='https://www.facebook.com/profile.php?id=100087459316089' style={{ textDecoration: 'none', fontWeight: 'lighter' }}>Facebook Page</a>
                                </div>
                            </div>
                        </div>
                        <div className="cardColumn">
                            <div className="cardContact">
                                <div style={{ marginBottom: 15 }}>
                                    <EmailIcon style={{ fontSize: 32 }} />
                                </div>
                                <div className="contactText" style={{ fontSize: 22 }}>
                                    jenniferamd54@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className="cardColumn">
                            <div className="cardContact">
                                <div style={{ marginBottom: 15 }}>
                                    <LocationOnIcon style={{ fontSize: 32 }} />
                                </div>
                                <div className="contactText" style={{ fontSize: 22 }}>
                                    South Dublin, Ireland
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div style={{ margin: 'auto', marginTop: 35 }}>
                    <Form />
                </div> */}
            </div>
        </>
    )
}

export default Contact;