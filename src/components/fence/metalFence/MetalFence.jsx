import React from 'react';
import './metalFence.scss';
import SideMenu from '../../sideMenu/SideMenu';

export default function MetalFence() { 
    return( 
        <section className='metalFence'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Заборы из профлиста</h3>
                    </div>
                </div>
            </div>
        </section>
    )
};