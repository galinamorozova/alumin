import React from 'react';
import {NavLink} from "react-router-dom";
import './aluConstractions.scss';

import aluFasade from '../../images/alumConstructions/aluFasade.jpeg';
import aluminBalcony from '../../images/alumConstructions/aluminBalcony.jpeg';
import alDoor from '../../images/alumConstructions/alDoor.jpeg';
import alWindow from '../../images/alumConstructions/unstandartWindow.jpg';
import alWall from '../../images/alumConstructions/wallTask.jpeg';


import SideMenu from '../sideMenu/SideMenu';

export default function AluConstructions() {
    return(
        <section className='aluConstructions'>
            <div className='container'>
                <div className='menu-products'>

                    <SideMenu/>

                    <div className='products'>
                        <NavLink className='product' to='/aluFasade'>
                            <img src={aluFasade} alt='фасады'></img>
                            <p>Алюминиевые фасады</p>
                        </NavLink>
                        <NavLink className='product' to='/aluBalcony'>
                            <img src={aluminBalcony} alt='лоджии'></img>
                            <p>Алюминиевые лоджии</p>
                        </NavLink>
                        <NavLink className='product' to='/aluDoor'>
                            <img src={alDoor} alt='двери'></img>
                            <p>Алюминиевые двери</p>
                        </NavLink>
                        <NavLink className='product' to='/aluWindow'>
                            <img src={alWindow} alt='окна'></img>
                            <p>Алюминиевые окна</p>
                        </NavLink>
                        <NavLink className='product' to='/aluWall'>
                            <img src={alWall} alt='перегородки'></img>
                            <p>Алюминиевые перегородки</p>
                        </NavLink>

                        </div>


                </div> 
            </div>
        </section>
        );
    }