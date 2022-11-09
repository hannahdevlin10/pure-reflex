import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Contact = () => {
    return (
        <>
            <CoverPhotoShort title="Contact" />
            <div style={{ margin: '60px 0px' }}>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <div className="cardRow">
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
                    <div className="cardContact" style={{ margin: '15px 5px', fontSize: 20, textAlign: 'left', lineHeight: 1.4, letterSpacing: 0.3 }}>
                        I have always had an interest in Reflexology and experienced its  many benefits over the years.
                        Following more than 20 years in the teaching profession both in Ireland and the UK, I decided to
                        qualify as a Reflexologist. I obtained my ITEC Diploma with Distinction in Reflexology, and in
                        Anatomy and Physiology from the Holistic College Dublin. I have also completed courses in
                        Facial Reflexology and in Reflexology for Menopause. <br /> <br/> My specialty is in Women`s Health and
                        Wellbeing. I am a member of the Irish Reflexologists Institute and am fully insured. Becoming a
                        Reflexologist was the right decision for me and I look forward to the next chapter. I believe
                        that in order for us to take care of others, we need to take care of ourselves first.
                    </div>
                </div>
                <div style={{ margin: 'auto' }}>
                    <Link to='/Form'>
                        <Button className="buttonA">
                            Contact Form
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contact;