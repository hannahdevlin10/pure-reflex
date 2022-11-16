import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import './style.css';

const AboutMe = () => {
    return (
        <>
            <CoverPhotoShort title="About Me" />
            <div style={{ margin: '30px 0px' }}>
                <div className="mainWrapper">
                    <div className="aboutMeCard">
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
            </div>
        </>
    )
}

export default AboutMe;