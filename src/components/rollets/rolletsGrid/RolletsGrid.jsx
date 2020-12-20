import React, {useState} from 'react';
import './rolletsGrid.scss';
import SideMenu from '../../sideMenu/SideMenu';

import titleGrid from '../../../images/rollet/titleGrid.jpg';
import bigGrid from '../../../images/rollet/bigGrid.png';
import smallGrid from '../../../images/rollet/smallGrid.png'
import avtoControlGrid from '../../../images/rollet/avtoControlGrid.jpg';
import handOpenGrid from '../../../images/rollet/handOpenGrid.png';
import blocking from '../../../images/rollet/blocking.jpg';
import fotoElem from '../../../images/rollet/fotoelem.jpg';
import border from '../../../images/rollet/border.png';
import expl1 from '../../../images/rollet/example1.jpg';
import expl2 from '../../../images/rollet/example2.jpg';
import expl3 from '../../../images/rollet/example3.jpeg';
import colorAEG56 from '../../../images/rollet/colorAEG56.png';
import colorAEG84 from '../../../images/rollet/colorAEG84.png';




export default function RolletsGrid() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='rolletsGrid'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>doorhan</button>
                            <button onClick={() => setActiveTab(3)}>hoermann</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <h3>роллетные решетки</h3>
                                <img src={titleGrid} alt='ролетные решетки'/>
                                <h3>преимущества</h3>
                                <div className='plusWrapper'>
                                    <div>
                                        <h4>Р3-Р4 классы защиты</h4>
                                        <p>сертифицированная безопасность и защита вашего имущества.</p>
                                    </div>
                                    <img src={expl1} alt='роллетная решетка'/>
                                    <div>
                                        <h4>Защита от несанкционированного подъема</h4>
                                        <p>Специальный фиксирующий профиль обеспечивает защиту от несанкционированного подъема решетки в закрытом состоянии.</p>		
                                    </div>
                                    <img src={expl2} alt='роллетная решетка'/>
                                    <div>
                                        <h4>Разнообразие решений</h4>
                                        <p>Возможно изготовление роллетных решеток с различными размерами отверстий — 56 или 84 мм, а также мелкой перфорацией.</p>						
                                    </div>
                                    <img src={expl3} alt='роллетная решетка'/>
                                </div>
                               
                               
                               
                                <h3>Внешний вид роллетных решеток</h3>
                                <div className='typesWrapper'>
                                    <div>
                                        <img src={smallGrid} alt='AEG56'/>
                                        <h4>в профиле серии AEG56</h4>
                                        <p>мелкоячеистая перфорация</p>
                                    </div>
                                    <div>
                                        <img src={bigGrid} alt='AEG56 и AEG84'/>
                                        <h4>в профиле серии AEG56 и AEG84</h4>
                                        <p>более крупные ячейки</p>
                                    </div>
                                </div>

                                <h3>цвета профиля</h3>
                                <div className='colorWrapper'>
                                    <div>
                                        <p>цвета в профиле AEG56</p>
                                        <img src={colorAEG56} alt='цвета AEG56'/>    
                                    </div>
                                    <div>
                                        <p>цвета в профиле AEG84</p>
                                        <img src={colorAEG84} alt='цвета AEG84'/>
                                    </div>
                                </div>
                                        

                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <img src={avtoControlGrid} alt='автоматическое управление'/>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpenGrid} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> «АЛЮТЕХ» предлагает: — ленточный привод; — шнуровой привод; — воротковый привод; — пружинно-инерционный механизм.</span></p>

                                </div>  

                                <h3>Дополнительные аксессуары</h3>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={border} alt='чувствительный край'/>
                                        <h4>Система «Чувствительный край»</h4>
                                        <p>при соприкосновении с препятствием система останавливает движение полотна, а затем меняет его на противоположное</p>
                                    </div>
                                    <div>
                                        <img src={handOpenGrid} alt='система аварийного подъема'/>
                                        <h4>Система аварийного подъема</h4>
                                        <p>съемный ручной привод для экстренного открытия решеток при отключении электроэнергии</p>
                                    </div>
                                    <div>
                                        <img src={blocking} alt='система блокировки аварийного открывания'/>
                                        <h4>Система блокировки аварийного открывания</h4>
                                        <p>обеспечивает защиту от несанкционированного использования аварийного ручного подъема</p> 
                                    </div>
                                    <div>
                                        <img src={fotoElem} alt='фотоэлементы'/>
                                        <h4>Фотоэлементы TWIN-SAFE</h4>
                                        <p>позволяют обнаружить препятствия на пути движения полотна решетки и защищают от затягивания посторонних предметов в короб</p>
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