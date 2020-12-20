import React, {useState} from 'react';
import './panoramic.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import titlePanoramic from '../../../../images/panoramic/title_panoramic.png';
import alp from '../../../../images/panoramic/alp.png';
import alps from '../../../../images/panoramic/alps.png';
import colorPanel from '../../../../images/panoramic/colorpanel.png';
import avtoControl_panoramic from '../../../../images/panoramic/avtoControl_panoramic.png';
import handOpen_panoramic from '../../../../images/panoramic/handOpen_panoramic.jpg';
import antipanic from '../../../../images/panoramic/antipanic.jpg';
import antiVandal from '../../../../images/panoramic/antivandal.jpg';
import sideDoor from '../../../../images/panoramic/sideDoor.jpg';
import wet from '../../../../images/panoramic/wet.jpg';
import alupro from '../../../../images/panoramic/alupro.jpg';
import alutrend from '../../../../images/panoramic/alutrend.png';
import alutherm from '../../../../images/panoramic/alutherm.jpg';
import antiDamage from '../../../../images/panoramic/antiDamage.jpg';
import warmAddition from '../../../../images/panoramic/warmAddition.jpg';
import wicket from '../../../../images/panoramic/wicket.jpg';
import fullfill from '../../../../images/panoramic/fullfill.jpg';
import rigel from '../../../../images/ind_lock.png';



export default function Panoramic() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='panoramicGates'>
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
                                <h3>панорамные ворота</h3>
                                <img src={titlePanoramic} alt='панорамные ворота'/>
                                <p><i class="fas fa-award"/>Максимальная обзорность. Цельное остекление для ворот шириной до 3 м</p>
                                <p><i class="fas fa-award"/>Презентабельный внешний вид. Защита остекления от царапин и помутнения</p>
                                <p><i class="fas fa-award"/>Широкий выбор решений по теплоизоляции</p>
                                <p><i class="fas fa-award"/>Разнообразие цветовых решений - возможность подобрать ворота под любой экстерьер и в соответствии с фирменным стилем компании</p>

                                <div className='typeWrapper'>
                                    <div>
                                        <img src={alutherm} alt='alutherm'/>
                                        <h4>AluTherm</h4>	
                                        <p>Высокая энергоэффективность, премиальное качество</p>
                                        <p>Панели 45 мм с терморазрывом.<br/> <span>Для объектов с высокими требованиями к теплоизоляции</span></p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Двойное или тройное остекление, альтернативное заполнение.<br/> <span>Максимальная теплоизоляция конструкции</span></p>
                                        <p>4 стандартных цвета</p>
                                    </div>
                                
                                    <div>
                                        <img src={alupro} alt='alupro'/>
                                        <h4>AluPro</h4>	
                                        <p>Максимальная функциональность и разнообразие вариантов оформления</p>
                                        <p>Панели 45 мм без терморазрыва.<br/> <span>Для объектов, где не требуется повышенная теплоизоляция</span></p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Одинарное или двойное остекление, альтернативное заполнение.<br/> <span>Разнообразие дизайна — прозрачное или композитное заполнение, тянутые решетки или перфорированные листы</span></p>
                                        <p>10 стандартных цветов </p>
                                    </div>

                                    <div>
                                        <img src={alutrend} alt='alutrend'/>
                                        <h4>AluTrend</h4>	
                                        <p>Экономичное решение отличного качества</p>
                                        <p>Панели 40 мм без терморазрыва.<br/> <span>Для объектов, где не требуется повышенная теплоизоляция</span></p>
                                        <p>Оцинкованная сталь</p>
                                        <p>Одинарное или двойное остекление, альтернативное заполнение.<br/> <span>Разнообразие дизайна — прозрачное или композитное заполнение, тянутые решетки или перфорированные листы</span></p>
                                        <p>10 стандартных цветов</p>
                                    </div>
                                </div>

                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                    <h4>Тип профиля - АЛП</h4>
                                    <img src={alp} alt='АЛП'/>
                                    </div>
                                    <div>
                                    <h4>Тип профиля - АЛПC</h4>
                                    <img src={alps} alt='АЛПС'/>
                                    </div>
                                </div>

                                <h3>цветовые решения</h3>
                                <img src={colorPanel} alt='цвета'/>


                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <div><img src={avtoControl_panoramic} alt='автоматическое управление'/></div>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpen_panoramic} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> - на полотне ворот устанавливают ручку для подъема-опускания, на массивных воротах — блок или цепной редуктор. Ворота удобны в использовании: вес даже габаритных конструкций оптимально сбалансирован пружинами. Так, вы прилагаете минимальные усилия для управления.</span></p>

                                </div>

                                <h3>Дополнительные аксессуары</h3>	
                                <div className='additionWrapper'>
                                    <div>
                                        <h4>Встроенная калитка</h4>
                                        <img src={wicket} alt='калитка'/>
                                        <p>для удобного и быстрого входа-выхода. Калитка экономит ресурс ворот, продлевая срок их службы</p>
                                    </div>
                                    <div>
                                        <h4>Покрытие, стойкое к царапинам</h4>
                                        <img src={antiDamage} alt='Покрытие, стойкое к царапинам'/>
                                        <p>прозрачность остекления на долгие годы даже после многократной чистки</p>
                                    </div>
                                    <div>
                                        <h4>Боковая дверь</h4>
                                        <img src={sideDoor} alt='Боковая дверь'/>
                                        <p>для отдельного входа-выхода. Гармонично сочетается с воротами, придавая фасаду завершенный вид</p>
                                    </div>
                                    <div>
                                        <h4>Альтернативное заполнение секций</h4>
                                        <img src={fullfill} alt='Альтернативное заполнение секций'/>
                                        <p>решетчатое — для проветривания и регулировки влажности, композитное — для удобства ухода</p>
                                    </div>
                                    <div>
                                        <h4>Ригельный замок</h4>
                                        <img src={rigel} alt='Ригельный замок'/>
                                        <p>надежное запирание ворот изнутри и снаружи</p>
                                    </div>
                                    <div>
                                        <h4>Комплект для особо влажных помещений</h4>
                                        <img src={wet} alt='Комплект для особо влажных помещений'/>
                                        <p>повышение стойкости к коррозии для сохранения вида и функциональности ворот в условиях влажного климата</p>
                                    </div>
                                    <div>
                                        <h4>Двойной контур герметизации</h4>
                                        <img src={warmAddition} alt='Двойной контур герметизации'/>
                                        <p>для защиты от образования конденсата внутри светопрозрачных вставок</p>
                                    </div>
                                    <div>
                                        <h4>Замки «анти-паник»</h4>
                                        <img src={antipanic} alt='Замки «анти-паник»'/>
                                        <p>для эвакуации из помещений в экстренных ситуациях</p>
                                    </div>
                                    <div>
                                        <h4>Система защиты от поддомкрачивания</h4>
                                        <img src={antiVandal} alt='Система защиты от поддомкрачивания'/>
                                        <p>защита от проникновения злоумышленников</p>
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