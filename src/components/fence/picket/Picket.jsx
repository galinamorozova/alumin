import React from 'react';
import './picket.scss';
import SideMenu from '../../sideMenu/SideMenu';

export default function Picket() { 
    return( 
        <section className='picket'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Заборы из евроштакетника</h3>
                    </div>
                </div>
            </div>
        </section>
    )
};