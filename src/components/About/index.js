import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import Desc from "./Desc";

const About = () => {
    return (
        <>
            <CoverPhotoShort title="About Reflexology" />
            <div style={{ margin: '30px 0px' }}>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <Desc />
                </div>
            </div>
        </>
    )
}

export default About;