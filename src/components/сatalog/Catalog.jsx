import React from 'react';
import {NavLink} from "react-router-dom";

import './catalog.scss';
import gates from '../../images/gates.png';
import barrier from '../../images/gate.png';
import rollerShutter from '../../images/window.png';
import park from '../../images/park2.jpg'



export default function Catalog() {
    return(
        <section className='catalog'>
             <div className='container'>
                <div className='catalogWrapper'>

                    <NavLink className='catalogProduct' to='/gates'>
                        <img src={gates} alt='ворота'/>
                        <p>ворота</p>
                    </NavLink>
                    <div className='catalogProduct'>
                        <img src={rollerShutter} alt='автоматика'/>
                        <p>автоматика</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={barrier} alt='шлагбаум'/>
                        <p>шлагбаум</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={rollerShutter} alt='роллеты/рольставни'/>
                        <p>роллеты/рольставни</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={gates} alt='перегрузочное оборудование'/>
                        <p>перегрузочное оборудование</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={barrier} alt='алюминиевые конструкции'/>
                        <p>алюминиевые конструкции</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={gates} alt='пластиковые конструкции'/>
                        <p>пластиковые конструкции</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={rollerShutter} alt='заборы'/>
                        <p>заборы</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={gates} alt='противопожарное оборудование'/>
                        <p>противопожарное оборудование</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={barrier} alt='автоматические двери'/>
                        <p>автоматические двери</p>
                    </div>
                </div>
                


            </div>
            <div className='pretty'>
                <img src={park} alt='' />
            </div>
        </section>
    );
}