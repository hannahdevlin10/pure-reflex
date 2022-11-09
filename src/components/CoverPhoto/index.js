import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import lotusPic from '../../assets/water-lily-dark.png'
import './style.css';

const CoverPhoto = () => {
    return (
        <div
            className="coverPhotoWrapper"
            style={{
                background: `url(${lotusPic})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
                }}>
            <div className="innerWrapper">
                <div className="title">
                    Welcome to Pure Reflexology
                </div>
                <div className="slogan">
                    Relax | Rebalance | Restore
                </div>
                <div className="buttonsWrapper">
                    <Button className="buttonA">Make Appointment</Button>
                    <Link to='/treatments_prices'>
                        <Button className="buttonB">
                            View Treatments
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoverPhoto;