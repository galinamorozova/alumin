import React from 'react';
import {NavLink} from "react-router-dom";
import './aluConstractions.scss';

import wallTittle1 from '../../images/plastic/walltittle.jpeg';


import SideMenu from '../sideMenu/SideMenu';

export default function AluConstructions() {
    return(
        <section className='aluConstructions'>
            <div className='container'>
                <div className='menu-products'>

                    <SideMenu/>

                    <div className='products'>
                        <NavLink className='product' to='/aluFasade'>
                            <img src={wallTittle1} alt='фасады'></img>
                            <p>Алюминиевые фасады</p>
                        </NavLink>
                        <NavLink className='product' to='/aluBalcony'>
                            <img src={wallTittle1} alt='лоджии'></img>
                            <p>Алюминиевые лоджии</p>
                        </NavLink>
                        <NavLink className='product' to='/aluDoor'>
                            <img src={wallTittle1} alt='двери'></img>
                            <p>Алюминиевые двери</p>
                        </NavLink>
                        <NavLink className='product' to='/aluWindow'>
                            <img src={wallTittle1} alt='окна'></img>
                            <p>Алюминиевые окна</p>
                        </NavLink>
                        <NavLink className='product' to='/aluWall'>
                            <img src={wallTittle1} alt='перегородки'></img>
                            <p>Алюминиевые перегородки</p>
                        </NavLink>

                        </div>


                </div> 
            </div>
        </section>
        );
    }