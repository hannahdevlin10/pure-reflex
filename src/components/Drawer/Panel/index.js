import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SpaIcon from '@mui/icons-material/Spa';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import './style.css'

const Panel = ({ option, icon, link }) => {
    return (
        <div className="panelWrapper">
            <div className="icon">
                {icon === 'home' &&
                <HomeIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'about' &&
                <InfoIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'contact' &&
                <ContactPageIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'tc' &&
                <AssignmentIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'treatment' &&
                <SpaIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'form' &&
                <MailIcon sx={{ fontSize: '30px', color: 'white' }} />}
                {icon === 'aboutme' &&
                <AccountCircleIcon sx={{ fontSize: '30px', color: 'white' }} />}
            </div>
            <div className="option">
                <Link to={link}>{option}</Link>
            </div>
        </div>
    )
}

export default Panel;