import React from 'react';
import {NavLink} from "react-router-dom";
import '../plasticConstuctions/plasticConstructions.scss';

import wallTittle1 from '../../images/plastic/walltittle.jpeg';
import doorTittle3 from '../../images/plastic/doortittle3.jpeg';
import windowTitle from '../../images/plastic/title_window.jpeg';


import SideMenu from '../sideMenu/SideMenu';

export default function PlasticConstructions() {
    return(
        <section className='plasticConstructions'>
            <div className='container'>
                <div className='menu-products'>

                    <SideMenu/>

                    <div className='products'>
                        <NavLink className='product' to='/plasticWindow'>
                            <img src={windowTitle} alt='пвх окна'></img>
                            <p>пвх окна</p>
                        </NavLink>
                        <NavLink className='product' to='/plasticDoor'>
                            <img src={doorTittle3} alt='пвх двери'></img>
                            <p>пвх двери</p>
                        </NavLink>
                        <NavLink className='product' to='/plasticWall'>
                            <img src={wallTittle1} alt='пвх перегородки'></img>
                            <p>пвх перегородки</p>
                        </NavLink>

                        </div>


                </div> 
            </div>
        </section>
        );
    }