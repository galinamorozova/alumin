import React from 'react';
import {NavLink} from "react-router-dom";
import './rollets.scss';


import SideMenu from '../sideMenu/SideMenu';

import standartRollet from '../../images/rollet/title1.jpg';
import rolletGrid from '../../images/rollet/example2.jpg';
import rolletGate from '../../images/rollet/prestigerollet.jpg';
import transparentRollet from '../../images/rollet/transpRollet.jpeg'


export default function Rollets() {
    return(
        <section className='rollets'>
            <div className='container'>
                <div className='menu-products'>

                    <SideMenu/>

                    <div className='products'>
                        <NavLink className='product' to='/standartRollets'>
                            <img src={standartRollet} alt='стандартные роллеты'></img>
                            <p>роллеты на окна/двери/балкон. Противовзломные роллеты</p>
                        </NavLink>
                        <NavLink className='product' to='/rolletsGrid'>
                            <img src={rolletGrid} alt='роллетные решетки'></img>
                            <p>роллетные решетки</p>
                        </NavLink>
                        <NavLink className='product' to='/rolletsGates'>
                            <img src={rolletGate} alt='Роллетные ворота'></img>
                            <p>роллетные ворота</p>
                        </NavLink>
                        <NavLink className='product' to='/transparentRollet'>
                            <img src={transparentRollet} alt='прозрачные роллеты'></img>
                            <p>прозрачные роллеты</p>
                        </NavLink>
                    </div>


                </div> 
            </div>
        </section>
        );
    }