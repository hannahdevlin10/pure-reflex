import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import lotusPic from '../../assets/water-lily-dark.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
                <div
                    className="location"
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                        }}>
                    <div>
                        <LocationOnIcon style={{ fontSize: 25 }} />
                    </div>
                    <div style={{ marginLeft: 3 }}>
                       Terenure, South Dublin
                    </div>
                </div>
                <div className="buttonsWrapper">
                    <Link to='/contact'>
                        <Button className="buttonA">
                            Make Appointment
                        </Button>
                    </Link>
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