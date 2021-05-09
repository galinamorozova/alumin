import React from 'react';
import {NavLink} from "react-router-dom";
import './fence.scss';

import wallTittle1 from '../../images/fence/tittle1.jpg';
import picketTitle from '../../images/fence/picketTitle.jpg';


import SideMenu from '../sideMenu/SideMenu';

export default function Fence() {
    return(
        <section className='fence'>
            <div className='container'>
                <div className='menu-products'>

                    <SideMenu/>

                    <div className='products'>
                        <NavLink className='product' to='/3d'>
                            <img src={wallTittle1} alt='3d сетка'></img>
                            <p>3d сетка</p>
                        </NavLink>
                        <NavLink className='product' to='/picket'>
                            <img src={picketTitle} alt='из евроштакетника'></img>
                            <p>Заборы из евроштакетника</p>
                        </NavLink>
                    </div>


                </div> 
            </div>
        </section>
        );
    }