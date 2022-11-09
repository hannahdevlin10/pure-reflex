import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import reflexLogo from '../../assets/reflex-logo.png';
import './style.css';

const Nav = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useContext(MainContext);

    const handleOnClick = () => {
        if (!isDrawerOpen) {
            setIsDrawerOpen(true)
        } else {
            setIsDrawerOpen(false)
        }
    }

    return (
        <div className="navWrapper">
            <div style={{ display: 'flex', margin: 'auto 0', padding: '0 15px' }}>
                <div className="navLogo" style={{ margin: 'auto 0' }}>
                    <img src={reflexLogo} alt='logo' width={24} style={{ marginTop: '1.5px' }} />
                </div>
                <Link to ='/' style={{ color: 'black', textDecoration: 'none', fontWeight: 'normal' }}>
                    <div className="navTitle">
                        Pure Reflexology
                    </div>
                </Link>
            </div>
            <div className="navMenuIcon" style={{ margin: 'auto 0' }}>
               <IconButton onClick={handleOnClick}>
                <MenuIcon sx={{ fontSize: '34px', color: 'black' }} />
               </IconButton>
            </div>
        </div>
    )
}

export default Nav;
