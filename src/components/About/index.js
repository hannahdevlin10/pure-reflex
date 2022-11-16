import React from "react";
import CoverPhotoShort from "../CoverPhotoShort";
import Desc from "./Desc";

const About = () => {
    return (
        <>
            <CoverPhotoShort title="About Reflexology" />
            <div style={{ margin: '46px 0px' }}>
                <div className="mainWrapper">
                    <Desc />
                </div>
            </div>
        </>
    )
}

export default About;