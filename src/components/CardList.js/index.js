import React from "react";
import './style.css'

const CardList = () => {
    return (
        <div className="row">
            <div className="column">
                <div className="card">
                <h3>Classic Reflexology</h3>
                <p>Relieves stress and tension and has a deeply relaxing effect</p>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <h3>Facial Reflexology</h3>
                <p>Works the facial contours to relax tightness or stagnation</p>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <h3>Reflexology for Menopause</h3>
                <p>Regulates hormones and glandular functions of the body</p>
                </div>
            </div>
        </div>
    );
}

export default CardList;
