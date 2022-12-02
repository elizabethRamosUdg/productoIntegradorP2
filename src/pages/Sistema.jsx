import React from 'react';

import "../pages/style/sistema.css";

import i1 from '../../src/files/sistema/i1.png';
import i2 from '../../src/files/sistema/i2.png';
import i3 from '../../src/files/sistema/i3.png';

function Sistema() {
    return (
        <div className="mainContainer">
            <div>
                <div class='sistemaimage'>
                    <img src={i1} />
                </div>
                <div class='sistemaimage'>
                    <img src={i2} />
                </div>
                <div class='sistemaimage'>
                    <img src={i3} />
                </div>
            </div>
            <h1>https://github.com/elizabethRamosUdg/Proyecto2</h1>
        </div >
    );
}

export default Sistema;

