import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CoverPhotoShort from "../CoverPhotoShort";
import './style.css';

const Form = () => {
    const [errMsgEmail, setErrMsgEmail] = useState(null);
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const validateReq = (val, type) => {
        if (type === 'email' && !val) {
            setErrMsgEmail('Email is required')
        } else {
            setErrMsgEmail('')
        }
    }

    const validateEmail = (emailVal) => {
        if (emailVal && !emailVal.toLowerCase().match(emailFormat)) {
            setErrMsgEmail('Email format is incorrect')
        }
    }

    return (
        <>
            <CoverPhotoShort title="Contact Form" />
            <div style={{ margin: '30px 0px' }}>
                <div style={{ width: '70%', margin: 'auto' }}>
                    <div style={{ fontSize: 21, marginBottom: 60 }}>
                        Please fill out the information below and I will
                        be in touch with you soon.
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '50%' }}
                            id="fname"
                            label="First name"
                            onChange={((e) => validateReq(e.target.value, 'fname'))} />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '50%' }}
                            id="lname"
                            label="Last name" />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '50%' }}
                            required
                            id="email"
                            type="email"
                            error={errMsgEmail}
                            onBlur={((e) => validateEmail(e.target.value))}
                            onChange={((e) => validateReq(e.target.value, 'email'))}
                            label="Email" />
                            <div
                                className="errorMsg"
                                style={{
                                    visibility: errMsgEmail ? 'visible' : 'hidden'
                                    }}>
                                        {errMsgEmail}
                             </div>
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextareaAutosize
                            className="enquiryyBox"
                            aria-label="minimum height"
                            minRows={3}
                            required
                            maxLength={600}
                            onChange={((e) => validateReq(e.target.value, 'textarea'))}
                            placeholder="Message . . ."
                            style={{
                                width: '50%',
                                height: '200px',
                                padding: 12,
                                borderColor: '#cbcbcb',
                                borderRadius: 4
                            }} />
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <Link to='/Form'>
                            <Button className="buttonA">
                                Submit
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;