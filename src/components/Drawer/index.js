import React, { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Panel from "./Panel";
import './style.css';

const Drawer = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useContext(MainContext);

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
                            <Panel option="Treatments & Prices" link="/treatments_prices" icon="treatment" />
                            <Panel option="Contact" link="/contact" icon="contact" />
                            <Panel option="Terms & Conditions" link="/TC" icon="tc" />
                        </div>
                    </div>
                </SwipeableDrawer>
        </>
    )
}

export default Drawer;