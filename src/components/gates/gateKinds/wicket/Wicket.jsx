import React, {useState} from 'react';
import './wicket.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import wicket_title from '../../../../images/wicket/wicket_title.jpeg';
import wicket1 from '../../../../images/wicket/wicket1.png';
import wicket2 from '../../../../images/wicket/wicket2.png';
import wicket3 from '../../../../images/wicket/wicket3.png';
import wicket4 from '../../../../images/wicket/wicket4.png';
import wicket5 from '../../../../images/wicket/wicket5.png';
import wicket6 from '../../../../images/wicket/wicket6.png';
import wicket7 from '../../../../images/wicket/wicket7.png';
import closer from '../../../../images/wicket/closer.png';
import latch from '../../../../images/wicket/latch.png';


export default function Wicket() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='wicket'>
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
                                <h3>отдельная калитка</h3>
                                <div className='plusWrapper'>
                                    <img src={wicket_title} alt='калитка'/>
                                    <div>
                                        <p>Конструкции рамы и материалы заполнения калитки Prestige аналогичны применяемым во въездных воротах.</p>
                                        <p>Алюминиевая конструкция и отсутствие сварных элементов гарантируют защиту от появления коррозии минимум 15 лет.</p>
                                        <p>ЕДИНСТВО СТИЛЯ - калитка прекрасно сочетается с воротами и секциями ограждения серии Prestige.</p>
                                        <p>СКРЫТЫЙ КРЕПЕЖ - создает дополнительную защиту от попадания влаги и эстетичный внешний вид.</p>
                                        <p> ТРЕХСЕКЦИОННЫЕ ПЕТЛИ - регулировка петель в трех направлениях позволяет минимизировать зазор между створками, предотвращая их провисание.</p>
                                    </div>
                                </div>

                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                        <h4>алюминиевый профиль</h4>
                                        <p>горизонтальное исполнение, профиль 82</p>
                                        <img src={wicket1} alt='горизонтальное исполнение, профиль 82'/>
                                        <p>вертикальное исполнение, профиль 82</p>
                                        <img src={wicket2} alt='вертикальное исполнение, профиль 82'/>
                                        <p>горизонтальное исполнение, профиль 37+82</p>
                                        <img src={wicket3} alt='горизонтальное исполнение, профиль 37+82'/>
                                        <p>вертикальное исполнение, профиль 37+82</p>
                                        <img src={wicket4} alt='вертикальное исполнение, профиль 37+82'/>
                                    </div>
                                    <div>
                                        <h4>сендвич-панель</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={wicket5} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={wicket6} alt='вертикальное исполнение'/>
                                        <p>филенка</p>
                                        <img src={wicket7} alt='филенка'/>
                                    </div>
                                </div>
								<h3>Дополнительные аксессуары</h3>	
                                <div className='additionWrapper'>
                                    <div>
                                        <h4>Автоматическая защелка </h4>
                                        <img src={latch} alt='защелка'/>
                                        <p>Делает возможным открытие калитки не выходя из дома</p>
                                    </div>
                                    <div>
                                        <h4>Доводчик калитки</h4>
                                        <img src={closer} alt='доводчик'/>
                                        <p>Обеспечивает плавное и комфортное закрытие калитки</p>
                                    </div>
                                </div>

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