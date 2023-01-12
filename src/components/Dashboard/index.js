import React from "react";
import CardList from "../CardList.js";
import AboutReflex from "./AboutReflex/index.js";

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
            <div style={{ margin: '16px 0 40px 0' }}>
                <CardList options={options} />
                <div className="mainWrapper" style={{ marginTop: 100, marginBottom: 100 }}>
                    <AboutReflex />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;