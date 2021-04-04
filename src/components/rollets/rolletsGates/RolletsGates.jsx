import React, {useState} from 'react';
import './rolletsGates.scss';
import SideMenu from '../../sideMenu/SideMenu';

import rgtitle from '../../../images/rollet/rgtitle.png';
import prestigeRollet from '../../../images/rollet/prestigerollet.jpg';
import trendRollet from '../../../images/rollet/trendrollet.jpg';
import avtoControlGrid from '../../../images/rollet/avtoControlGrid.jpg';
import handOpenGrid from '../../../images/rollet/handOpenGrid.png';
import blocking from '../../../images/rollet/blocking.jpg';
import rolletborder from '../../../images/rollet/rolletborder.jpg';
import rolletexp1 from '../../../images/rollet/rolletexp1.jpg';
import rolletexp2 from '../../../images/rollet/rolletexpl2.jpg';
import rolik from '../../../images/rollet/rolik.png';
import EA77 from '../../../images/rollet/EA77.png';
import EV77W from '../../../images/rollet/EV77W.png';
import PD77 from '../../../images/rollet/PD77.png';
import AG77H from '../../../images/rollet/AG77H.png';
import AG77 from '../../../images/rollet/AG77.png';
import extrud from '../../../images/rollet/extrud.png';

export default function RolletsGates() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='rolletsGates'>
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
                            <h3>Роллетные (рулонные) ворота</h3>
                            <div><img src={rgtitle} alt='роллетные ворота'/></div>

                            <h3>преимущества</h3>
                            <div className='plusWrapper'>

                                <div className='imageContainer'><img src={rolletexp1} alt='роллетные ворота'/></div>
                                <div>
                                <h4>Экономия пространства</h4>
                                <p>роллетные ворота могут быть установлены на любые проемы. Они позволяют экономить пространство под потолком и оптимальны для объектов, где подъезд к гаражу занимает небольшую территорию.</p>
                                </div>
                                <div>
                                <h4>аварийная разблокировка</h4>
                                <p>в случае внезапного отключения электроэнергии роллетные ворота всегда можно открыть изнутри вручную.</p>											
                                </div>
                                <div>
                                <h4>Обнаружение препятствий</h4>
                                <p>Специальные датчики мгновенно фиксируют любое препятствие, будь то человек, животное или автомобиль, и меняют движение конструкций на противоположное.</p>
                                </div>
                                <div>
                                <h4>Стойкость к истиранию</h4>
                                <p>Уникальное полиуретановое покрытие ПУР-ПА устойчиво к истиранию, царапинам и высокой влажности.</p>
                                </div>
                                <div className='imageContainer'><img src={rolletexp2} alt='роллетные ворота'/></div>

                            </div> 

                            <h3>виды роллетных ворот</h3>
                                <div className='typeWrapper'>
                                    <div>
                                        <div><img src={prestigeRollet} alt='prestige'></img></div>
                                        <h4>Prestige</h4>
                                        <p>продукт премиум-качества для особо требовательных хозяев</p>
                                        <p>Р3 класс защиты от взлома</p>
                                        <p>Материал производства ворот - алюминий.<br/> <span>Высокая стойкость к коррозии, перепадам температур, атмосферным осадкам</span></p>
                                        <p>Сплошной, смотровой и вентиляционный профили. <span>Частичный обзор и освещенность, а также дополнительный воздухообмен</span></p>
                                        <p>Более 18 цветов</p>
                                    </div>


                                    <div>
                                        <div><img src={trendRollet} alt='trend'/></div>
                                        <h4>Trend</h4>
                                        <p>доступное решение в базовой комплектации</p>
                                        <p>Базовая антивандальная защита</p>
                                        <p>Материал производства ворот - алюминий.<br/> <span>Высокая стойкость к коррозии, перепадам температур, атмосферным осадкам</span></p>
                                        <p>Сплошной профиль</p>
                                        <p>Более 7 популярных цветов</p>
                                    </div>
                                </div>
                            
                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                        <h4>Профили роликовой прокатки</h4>
                                        <div><img src={rolik} alt='профиль роликовой прокатки'/></div>
                                        <p>цвета профиля AG/77 с мягким пенным наполнителем</p>
                                        <div><img src={AG77} alt='AG/77 с мягким пенным наполнителем'/></div>
                                        <p>цвета профиля AG/77Н с твердым пенным наполнителем</p>
                                        <div>   <img src={AG77H} alt='AG/77Н с твердым пенным наполнителем'/></div>
                                        <p>цвета профиля PD/77 с мягким пенным наполнителем</p>
                                        <div><img src={PD77} alt='PD/77 с мягким пенным наполнителем'/></div>
                                    </div>
                                    <div>
                                        <h4>Экструдированные профили</h4> 
                                        <img src={EV77W} alt='EV/77W экструдированный смотровой'/>
                                        <p>EV/77W экструдированный смотровой</p>
                                        <img src={EA77} alt='EA/77 экструдированный вентиляционный'/>
                                        <p>EA/77 экструдированный вентиляционный</p>
                                        <p>Цветовые решения</p>
                                        <img src={extrud} alt='цвета'/> 
                                    </div>

                                </div>    

                                <h3>виды управления</h3>
                                <div className='controlWrapper'>
                                    <img src={avtoControlGrid} alt='автоматическое управление'/>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpenGrid} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> - оптимальное решения для роллетных ворот с небольшой массой полотна.</span></p>
                                </div>  

                                <h3>Дополнительные аксессуары</h3>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={rolletborder} alt='чувствительный край'/>
                                        <h4>Система «Чувствительный край»</h4>
                                        <p>при соприкосновении с препятствием система останавливает движение полотна, а затем меняет его на противоположное</p>
                                    </div>
                                    <div>
                                        <img src={handOpenGrid} alt='система аварийного подъема'/>
                                        <h4>Система аварийного подъема</h4>
                                        <p>съемный ручной привод для экстренного открытия ворот при отключении электроэнергии</p>
                                    </div>
                                    <div>
                                        <img src={blocking} alt='система блокировки аварийного открывания'/>
                                        <h4>Система блокировки аварийного открывания</h4>
                                        <p>обеспечивает защиту от несанкционированного использования аварийного ручного подъема</p> 
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