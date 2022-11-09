import React from "react";
import CardList from "../CardList.js";

const options = [
    {
        title: 'Classic Reflexology',
        cardWidth: '33.3%',
        content: 'Improves blood circulation and helps to release tension',
        link: '/'
    },
    {
        title: 'Facial Reflexology',
        cardWidth: '33.3%',
        content: 'Works the facial contours to relax tightness or stagnation',
        link: '/'
    },
    {
        title: 'Reflexology for Menopause',
        cardWidth: '33.3%',
        content: 'Regulates hormones and glandular functions of the body',
        link: '/'
    }
]

const Dashboard = () => {
    return (
        <div>
            <div style={{ margin: '16px 0' }}>
                <CardList options={options} />
            </div>
        </div>
    )
}

export default Dashboard;