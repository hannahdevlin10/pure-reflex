import React from "react";

const Acrostic = () => {
    return (
        <div>
            <div className="acRow" style={{ display: 'flex' }}>
                <div>
                    <div style={{ borderRadius: 140, padding: 40, border: '1px solid red', fontSize: 40 }}>P</div>
                </div>
                <div style={{ margin: 'auto 3px' }}>
                    roivde time and space for yourself. When is the last time
                    you took time out for yourself?
                </div>
            </div>
            <div className="acRow" style={{ display: 'flex' }}>
                <div>
                    <h1>U</h1>
                </div>
                <div style={{ margin: 'auto 3px' }}>
                    nwind, relax and destress. 75% of disease is stress-related.
                </div>
            </div>
            <div className="acRow" style={{ display: 'flex' }}>
                <div>
                    <h1>R</h1>
                </div>
                <div style={{ margin: 'auto 3px' }}>
                    ebalance, renew, reset, recharge.
                </div>
            </div>
            <div className="acRow" style={{ display: 'flex' }}>
                <div>
                    <h1>E</h1>
                </div>
                <div style={{ margin: 'auto 3px' }}>
                    liminate toxins and waster from the body, and activate
                    your own self-healing.
                </div>
            </div>
        </div>
    )
}

export default Acrostic;