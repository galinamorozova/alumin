import React from 'react';
import './fence3d.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';

import tittle1 from '../../../images/fence/tittle1.jpg';
import tittle2 from '../../../images/fence/tittle2.jpg';
import tittle3 from '../../../images/fence/tittle3.jpg';
import sample from '../../../images/fence/sample.jpg';

export default function fence3d() { 
    return( 
        <section className='fence3d'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>3D сетка</h3>
                    <div className='fenceTittle'>
                        <img src={tittle1} alt='3d сетка'/>
                        <img src={tittle2} alt='3d сетка'/>
                        <img src={tittle3} alt='3d сетка'/>
                    </div>
                    <p>Все большую популярность набирают заборы из так называемой 3D сетки. Такой забор собирается из соответствущих панелей, которые крепятся к оцинокованным столбам.</p>

                    <h3>Особенности такой сетки:</h3>
                    <div className='featureFence'>
                        <img src={sample} alt='3d сетка'/>
                        <ul>
                            <li>Панель изготовлена из стальных оцинкованных окрашенных прутков толщиной 4 мм или 3,5 мм.</li>
                            <li>При окраске панель проходит специальную подготовку к покраске увеличивает коррозионную стойкость и срок службы изделия.</li>
                            <li>Размер ячейки 200мм X 55мм.</li>
                            <li>Ширина панели от 2,1м до 3,1м.</li>
                            <li>Высота панели от 0,63м до 3,33м.</li>
                            <li>Толщина прутков 3,5мм и 4мм.</li>
                            <li>Оцинковые столбы подкрываются специльным полимерным покрытием.</li>
                            <li>Гарантии на технические характеристики 50 лет.</li>
                            <li>Гарантия на сохранность внешнего вида 10 лет.</li>
                            <li>Установка возможна как посредством бетонирования столбов, так и с использованием винтовых опор, что позволяет монтировать на любом грунте и в любых климатических зонах.</li>
                        </ul>
                    </div>
                    <FindPrice/>
                    </div>
                </div>
            </div>
        </section>
    )
};