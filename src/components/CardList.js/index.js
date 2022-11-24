import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const CardList = () => {
    return (
        <div className="row">
            <Link to="/treatments_prices">
                <div className="column">
                    <div className="card">
                    <h3>Classic Reflexology</h3>
                    <p style={{ fontWeight: 'lighter' }}>Relieves stress and tension and has a deeply relaxing effect</p>
                    </div>
                </div>
            </Link>

            <Link to="/treatments_prices">
                <div className="column">
                    <div className="card">
                    <h3>Facial Reflexology</h3>
                    <p style={{ fontWeight: 'lighter' }}>Works the facial contours to relax tightness or stagnation</p>
                    </div>
                </div>
            </Link>

            <Link to="/treatments_prices">
                <div className="column">
                    <div className="card">
                    <h3>Reflexology for Menopause</h3>
                    <p style={{ fontWeight: 'lighter' }}>Regulates hormones and calms the central nervous system</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardList;
