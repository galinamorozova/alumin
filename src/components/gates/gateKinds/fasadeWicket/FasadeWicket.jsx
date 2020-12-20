import React, {useState} from 'react';
import './fasadeWicket.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import fasadeDoor1 from '../../../../images/door1.png';
import fasadeDoor2 from '../../../../images/door2.png';
import fasadeDoor3 from '../../../../images/door3.png';
import fasadeDoor4 from '../../../../images/kalitka_fasad.jpg';


export default function FasadeWicket() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='fasadeWicket'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>dorhan</button>
                            <button onClick={() => setActiveTab(3)}>hermann</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <h2>калитка в фасаде</h2>
                                <div className='fasadeWrapper'>
                                    <img src={fasadeDoor1} alt='калитка в фасаде'/>
                                    <img src={fasadeDoor2} alt='калитка в фасаде'/>
                                    <img src={fasadeDoor3} alt='калитка в фасаде'/>
                                    <img src={fasadeDoor4} alt='калитка в фасаде'/>
                                </div>
                                <p>У Вас всегда есть возможность заказать калитку в фасаде/ боковую дверь с тем, чтобы получить весь комплект ворот (гаражных/ въездных) и дверей в едином стилевом исполнении. Стиль двери по умолчанию делают единым с гаражными воротами. За счет идентичного рисунка и цвета изделие отлично впишется в фасад любого здания. Так, одинаковые цвет и рисунок смотрятся как единое целое.</p>
                                <p>Фасадные калитки также как и ворота изготовляются из сендвич-панелей, что обеспечивает прекрасную шумо- и теплоизоляцию. Кроме того, калитки ALUTECH отличаются фирменным качество фурнитуры.</p>
                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>контент2</div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>контент3</div>
                        }
                    </div>
                    

                </div>
            </div>
        </section>
    );
}