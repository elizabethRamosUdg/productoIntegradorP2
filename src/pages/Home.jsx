import React from 'react';
import "../pages/style/files.css";

// Imports
import wordIcon from '../../src/images/wordIcon.fw.png';
import zipIcon from '../../src/images/zip.png';
import a1 from '../../src/files/actividades/a1.docx';
import a2 from '../../src/files/actividades/a2.docx';
import a3 from '../../src/files/actividades/a3.docx';
import a4 from '../../src/files/actividades/a4.docx';
import a5 from '../../src/files/actividades/a5.docx';
import a6 from '../../src/files/actividades/a6.docx';
import all from '../../src/files/actividades/SCRUM.zip';

function Home() {
    return (
        <div>
            <div className="containerHome">
                <div class='containerFile'>
                    <h5>Actividad 1. Metodología ágil SCRUM</h5>
                    <a href={a1} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Actividad 1. Primera fase de desarrollo, revisión y ajuste de los Sprints</h5>
                    <a href={a2} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Actividad 1. Reunión de revisión inicial</h5>
                    <a href={a3} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Actividad 2. El product backlog</h5>
                    <a href={a4} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Actividad 2. El sprint Shedule</h5>
                    <a href={a5} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Actividad integradora. Producto final U3</h5>
                    <a href={a6} download><img src={wordIcon} />
                    </a>
                </div>

                <div class='containerFile'>
                    <h5>Todos los archivos</h5>
                    <a href={all} download><img src={zipIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;