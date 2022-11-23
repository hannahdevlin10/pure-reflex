import React, { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SpaIcon from '@mui/icons-material/Spa';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MainContext } from "../../../context/MainContext";
import { Link } from "react-router-dom";
import './style.css'

const Panel = ({ option, icon, link }) => {
    const { activePage } = useContext(MainContext);

    return (
        <div className="panelWrapper" style={{ color: activePage === link ? '#20736f' : 'white' }}>
            <div className="icon">
                {icon === 'home' &&
                <HomeIcon sx={{ fontSize: '30px', color: activePage === '/' ? '#20736f' : 'white' }} />}
                {icon === 'about' &&
                <InfoIcon sx={{ fontSize: '30px', color: activePage === '/about' ? '#20736f' : 'white' }} />}
                {icon === 'contact' &&
                <ContactPageIcon sx={{ fontSize: '30px', color: activePage === '/contact' ? '#20736f' : 'white' }} />}
                {icon === 'tc' &&
                <AssignmentIcon sx={{ fontSize: '30px', color: activePage === '/TC' ? '#20736f' : 'white' }} />}
                {icon === 'treatment' &&
                <SpaIcon sx={{ fontSize: '30px', color: activePage === '/treatments_prices' ? '#20736f' : 'white' }} />}
                {icon === 'aboutme' &&
                <AccountCircleIcon sx={{ fontSize: '30px', color: activePage === '/about_me' ? '#20736f' : 'white' }} />}
            </div>
            <div className="option">
                <Link to={link} style={{ color: activePage === link ? '#20736f' : 'white' }}>
                    {option}
                </Link>
            </div>
        </div>
    )
}

export default Panel;