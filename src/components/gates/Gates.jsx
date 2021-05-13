import React from 'react';
import {NavLink} from "react-router-dom";
import './gates.scss';

import SideMenu from '../sideMenu/SideMenu';
import garazh from '../../images/garazh_vorota.jpg';
import prom_vorota from '../../images/prom_vorota.jpg';
import panoram_vorota from '../../images/panoram_vorota.jpg';
import raspash_vorota from '../../images/raspash_vorota.jpg';
import otkat_vorota from '../../images/otkat_vorota.jpg';
import otd_kalitka from '../../images/otd_kalitka.jpg';
import plenoch_vorota from '../../images/plenoch_vorota.jpg';
import rolletGates from '../../images/rollet/prestigerollet.jpg'

export default function Gates() {
    return(
        <section className='gates'>
            <div className='container'>

            <div className='menu-products'>

                <SideMenu/>
                
                <div className='products'>
                    <NavLink className='product' to='/garage'>
                        <div><img src={garazh} alt='Гаражные ворота'/></div>
                        <p>гаражные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/industrial'>
                        <div><img src={prom_vorota} alt='Промышленные ворота'/></div>
                        <p>промышленные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/doubleLeaf'>
                    <div><img src={raspash_vorota} alt='Распашные ворота'></img></div>
                        <p>въездные распашные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/sliding'>
                    <div><img src={otkat_vorota} alt='Откатные ворота'></img></div>
                        <p>въездные откатные ворота</p>
                    </NavLink>
                     <NavLink className='product' to='/rolletsGates'>
                     <div><img src={rolletGates} alt='Роллетные ворота'></img></div>
                        <p>роллетные ворота</p>
                     </NavLink>
                     <NavLink className='product' to='/panoramic'>
                     <div><img src={panoram_vorota} alt='Панорамные ворота'></img></div>
                        <p>панорамные ворота</p>
                     </NavLink>
                     <NavLink className='product' to='/fast'>
                     <div><img src={plenoch_vorota} alt='Скоростные ПВХ ворота'></img></div>
                        <p>скоростные ворота</p>
                     </NavLink>
                     <NavLink className='product' to='/wicket'>
                     <div><img src={otd_kalitka} alt='Отдельная калитка'></img></div>
                        <p>отдельная калитка</p>
                     </NavLink>
                     
                    
                    
                </div>

            </div>

            </div>
        </section>
    );
}