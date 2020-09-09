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
import kalitka_fasad from '../../images/kalitka_fasad.jpg';
import plenoch_vorota from '../../images/plenoch_vorota.jpg';

export default function Gates() {
    return(
        <section className='gates'>
            <div className='container'>

            <div className='menu-products'>

                <SideMenu/>
                
                <div className='products'>
                    <NavLink className='product' to='/garage'>
                        <img src={garazh} alt='Гаражные ворота'></img>
                        <p>гаражные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/industrial'>
                        <img src={prom_vorota} alt='Промышленные ворота'></img>
                        <p>промышленные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/doubleLeaf'>
                        <img src={raspash_vorota} alt='Распашные ворота'></img>
                        <p>въездные распашные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/sliding'>
                        <img src={otkat_vorota} alt='Откатные ворота'></img>
                        <p>въездные откатные ворота</p>
                    </NavLink>
                    <NavLink className='product' to='/panoramic'>
                        <img src={panoram_vorota} alt='Панорамные ворота'></img>
                        <p>панорамные ворота</p>
                     </NavLink>
                     <NavLink className='product' to='/fast'>
                        <img src={plenoch_vorota} alt='Скоростные ПВХ ворота'></img>
                        <p>скоростные ворота</p>
                     </NavLink>
                     <NavLink className='product' to='/wicket'>
                        <img src={otd_kalitka} alt='Отдельная калитка'></img>
                        <p>отдельная калитка</p>
                     </NavLink>
                     <NavLink className='product' to='/fasadeWicket'>
                        <img src={kalitka_fasad} alt='Калитка в фасаде'></img>
                        <p>калитка в фасаде</p>
                     </NavLink>
                    
                    
                </div>

            </div>

            </div>
        </section>
    );
}