import { Alert, Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './style.css';

const Form = () => {
    const [fNameVal, setFirstName] = useState('');
    const [lNameVal, setLastName] = useState('');
    const [emailVal, setEmail] = useState('');
    const [msgVal, setMsgVal] = useState('');

    const [formSuccess, setFormSuccess] = useState(false);

    const [errMsgEmail, setErrMsgEmail] = useState(null);
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const form = useRef();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
        "service_fn9zrgd",
        "template_bhr1ang",
        form.current,
        "ArN-2BoP8HQV8pbaZ"
        ).then((result) => {
            setFormSuccess(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setMsgVal('');
            setTimeout(() =>{
                setFormSuccess(false);
            }, 3000);
        },
        (error) => {
            console.log(error.text);
        }
      );
    };

    return (
        <>
            <div style={{ margin: '10px 0px' }}>
                <div style={{
                    fontSize: 22,
                    marginBottom: 28,
                    display: formSuccess ? 'none' : 'block'
                    }}>
                    <Alert id="contactAlert" severity={"info"}>
                        Please complete the contact form below
                    </Alert>
                </div>
                <div style={{
                    fontSize: 22,
                    marginBottom: 28,
                    display: formSuccess ? 'block' : 'none'
                    }}>
                    <Alert id="contactAlert" severity={"success"}>
                        Form submitted - I'll be in touch with you soon
                    </Alert>
                </div>
                <form onSubmit={handleSubmit} ref={form}>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '80%' }}
                            id="fname"
                            label="First name"
                            required
                            name="fname"
                            value={fNameVal}
                            onChange={((e) => {
                                validateReq(e.target.value, 'fname');
                                setFirstName(e.target.value);
                                })} />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '80%' }}
                            id="lname"
                            name="lname"
                            value={lNameVal}
                            label="Last name"
                            onChange={((e) => setLastName(e.target.value))} />
                    </div>
                    <div style={{ marginBottom: 40 }}>
                        <TextField
                            className="contactInput"
                            style={{ width: '80%' }}
                            required
                            id="email"
                            type="email"
                            name="email"
                            error={errMsgEmail}
                            value={emailVal}
                            onBlur={((e) => validateEmail(e.target.value))}
                            onChange={((e) => {
                                validateReq(e.target.value, 'email');
                                setEmail(e.target.value);
                            })}
                            label="Email" />
                            <div className="errorMsg" style={{ visibility: errMsgEmail ? 'visible' : 'hidden'}}>
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
                            id="message"
                            name="message"
                            value={msgVal}
                            onChange={((e) => {
                                validateReq(e.target.value, 'textarea');
                                setMsgVal(e.target.value);
                            })}
                            placeholder="Message . . ."
                            style={{
                                width: '80%',
                                height: '200px',
                                padding: 12,
                                borderColor: '#cbcbcb',
                                borderRadius: 4
                            }} />
                    </div>
                    <div style={{ margin: 'auto' }}>
                        <Button type="submit" className="buttonA">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;