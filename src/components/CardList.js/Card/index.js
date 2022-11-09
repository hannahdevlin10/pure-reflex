import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import './style.css';

const Card = ({ title, content, link, cardWidth, icon }) => {
    return (
        <div className="column" style={{ width: cardWidth }}>
            <div className="card">
                <div style={{ textAlign: 'center' }}>
                    {icon === 'phone' && <EmailIcon />}
                </div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card;