import React from 'react';
import "../pages/style/files.css";

// Imports
import wordIcon from '../../src/images/wordIcon.fw.png';
import zipIcon from '../../src/images/zip.png';
import codigoZip from '../../src/files/sistema/Proyecto2-master.zip';

function Codigo() {
    return (
        <div>
            <div className="containerHome">
                  <div class='containerFile'>
                    <h5>Codigo Fuente sistema implementado</h5>
                    <a href={codigoZip} download><img src={zipIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Codigo;