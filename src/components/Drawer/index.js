import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MainContext } from "../../context/MainContext";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import Panel from "./Panel";
import './style.css';

const Drawer = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useContext(MainContext);
    const location = useLocation();

    const handleOnOpen = () => {
        if (!isDrawerOpen) {
            setIsDrawerOpen(true)
        } else {
            setIsDrawerOpen(false)
        }
    }

    const handleOnClose = () => {
        setIsDrawerOpen(false)
    }

    useEffect(() => {
        setIsDrawerOpen(false);
        // eslint-disable-next-line
    }, [location]);

    return (
        <>
            <SwipeableDrawer
                anchor="right"
                open={isDrawerOpen}
                onOpen={() => {}}
                onClose={handleOnOpen}
                BackdropProps={{ invisible: true }}
                variant="persistent">
                    <div style={{ textAlign: 'center', width: '40vh', padding: '8px 20px' }}>
                        <div style={{ margin: '-20px -8px auto auto', textAlign: 'right' }}>
                            <Button style={{ color: 'white' }} onClick={handleOnClose}>
                                <CloseIcon style={{ fontSize: '38px', padding: '0px' }}/>
                            </Button>
                        </div>
                        <div className="drawerContent" style={{ marginTop: 15 }}>
                            <Panel option="Home" link="/" icon="home" />
                            <Panel option="About Reflexology" link="/about" icon="about" />
                            <Panel option="About Me" link="/about_me" icon="aboutme" />
                            <Panel option="Treatments & Prices" link="/treatments_prices" icon="treatment" />
                            <Panel option="Contact" link="/contact" icon="contact" />
                            <Panel option="Terms & Conditions" link="/TC" icon="tc" />
                        </div>
                        <div style={{ position: 'absolute', left: 24, bottom: 36, color: 'white', fontSize: 14 }}>
                            &copy; Copyright PureReflexology
                        </div>
                        <div style={{ position: 'absolute', right: 26, bottom: 26 }}>
                            <a href='https://www.facebook.com/profile.php?id=100087459316089' style={{ textDecoration: 'none' }}>
                                <FacebookIcon style={{ color: 'white', fontSize: '30px', padding: '0px' }}/>
                            </a>
                        </div>
                    </div>
                </SwipeableDrawer>
        </>
    )
}

export default Drawer;