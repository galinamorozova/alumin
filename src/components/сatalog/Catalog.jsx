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
                    <NavLink className='catalogProduct' to='/automation'>
                        <img src={rollerShutter} alt='автоматика'/>
                        <p>автоматика</p>
                    </NavLink>
                    <div className='catalogProduct'>
                        <img src={barrier} alt='шлагбаум'/>
                        <p>шлагбаум</p>
                    </div>
                    <NavLink className='catalogProduct' to='/rollets'>
                        <img src={rollerShutter} alt='роллеты/рольставни'/>
                        <p>роллеты/рольставни</p>
                    </NavLink>
                    <div className='catalogProduct'>
                        <img src={gates} alt='перегрузочное оборудование'/>
                        <p>перегрузочное оборудование</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={barrier} alt='алюминиевые конструкции'/>
                        <p>алюминиевые конструкции</p>
                    </div>
                    <NavLink className='catalogProduct' to='/plasticConstructions'>
                        <img src={gates} alt='пластиковые конструкции'/>
                        <p>пластиковые конструкции</p>
                    </NavLink>
                    <div className='catalogProduct'>
                        <img src={rollerShutter} alt='заборы'/>
                        <p>заборы</p>
                    </div>
                    <div className='catalogProduct'>
                        <img src={gates} alt='противопожарное оборудование'/>
                        <p>противопожарное оборудование</p>
                    </div>
                    <NavLink className='catalogProduct' to='/automaticDoor'>
                        <img src={barrier} alt='автоматические двери'/>
                        <p>автоматические двери</p>
                    </NavLink>
                </div>
                


            </div>
            <div className='pretty'>
                <img src={park} alt='' />
            </div>
        </section>
    );
}