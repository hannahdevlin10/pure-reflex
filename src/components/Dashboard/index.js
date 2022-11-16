import React from "react";
import CardList from "../CardList.js";

const options = [
    {
        title: 'Classic Reflexology',
        cardWidth: '33.3%',
        content: 'Relieves stress and tension and has a deeply relaxing effect',
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
        content: 'Regulates hormones and calms the nervous system',
        link: '/'
    }
]

const Dashboard = () => {
    return (
        <div>
            <div style={{ margin: '16px 0' }}>
                <CardList options={options} />
                {/* <div style={{ margin: '16px' }}>
                    <Acrostic />
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard;