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

import RH75 from '../../../images/doorhan/rh75.jpg';
import RH77M from '../../../images/doorhan/rh77.jpg';
import rh77mDesign from '../../../images/doorhan/RH77M.jpg';
import rhs75Design from '../../../images/doorhan/RHS75.jpg';
import rhs75pDesign from '../../../images/doorhan/RHS75P.jpg';
import whiteColor from '../../../images/doorhan/9003.png';
import greyColor from '../../../images/doorhan/7004.png';
import silver from '../../../images/doorhan/9006.png';
import brownColor from '../../../images/doorhan/8014.png';
import blue from '../../../images/doorhan/5005.png';
import green from '../../../images/doorhan/6005.png';
import antracit from '../../../images/doorhan/7016.png';
import beige from '../../../images/doorhan/1014.png';
import bordo from '../../../images/doorhan/3005.png';
import darkOak from '../../../images/doorhan/darkOak.jpg';
import golden from '../../../images/doorhan/golden.png';
import engine from '../../../images/doorhan/engine.jpg';
import canvasEnd from '../../../images/doorhan/canvasEnd.jpg';
import box from '../../../images/doorhan/box.jpg';
import rails from '../../../images/doorhan/rails.jpg';
import canvas from '../../../images/doorhan/canvas.jpg';
import dhre from '../../../images/doorhan/dhre.jpg';
import cv from '../../../images/doorhan/CV01.jpg';
import rolletPhoto from '../../../images/doorhan/rolletPhoto.jpg';
import smartroll from '../../../images/doorhan/smartroll.jpg';
import swm from '../../../images/doorhan/SWM.jpg';
import gsm from '../../../images/doorhan/gsm.jpg';
import swb from '../../../images/doorhan/SWB.jpg';
import rolletTransmitter from '../../../images/doorhan/rolletTransmitter.jpg';
import transmitter4 from '../../../images/doorhan/Transmitter4.jpg';
import wifiModule from '../../../images/doorhan/Wi-Fi.jpg';
import lampa from '../../../images/doorhan/lampa.jpg';

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
                        <div className='content'>
                            <h4>РОЛЛЕТНЫЕ ВОРОТА ДОРХАН</h4>
                            <div className='rolletGates'>
                                <img src={RH75} alt='роллетные ворота'/>
                                <div className='gateView'>
                                    <h4>РОЛЬВОРОТА ИЗ СТАЛЬНОГО ПРОФИЛЯ(ВЗЛОМОУСТОЙЧИВЫЕ) RHS75, RHS75P</h4>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 000 до 4 000</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 000 до 4 000</p>
                                        <p>Притолока, мм</p>
                                        <p>от 300 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 90 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>16</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletGates'>
                                <img src={RH77M} alt='роллетные ворота'/>
                                <div className='gateView'>
                                <h4>УЛИЧНЫЕ И ГАРАЖНЫЕ РОЛЬВОРОТА ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH77M</h4>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 000 до 5 200</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 000 до 4 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 250 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 83 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>18</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDesign'>
                                <div>
                                    <h4>ВОРОТА ВЗЛОМОУСТОЙЧИВЫЕ RHS75, RHS75P</h4>
                                    <div>
                                        <img src={rhs75Design} alt='RHS75'/>
                                        <p>RHS75</p>
                                    </div>
                                    <div>
                                        <img src={rhs75pDesign} alt='RHS75P'/>
                                        <p>RHS75P</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>ВОРОТА ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH77M</h4>
                                    <div>
                                        <img src={rh77mDesign} alt='RH77M'/>
                                        <p>RH77M</p>
                                    </div>
                                </div>
                            </div>
                            <h4>ЦВЕТА ВЗЛОМОУСТОЙЧИВЫХ ВОРОТ и ВОРОТ ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ:</h4>
                            <div className='color'>   
                                <img src={whiteColor} alt='белый'/>
                                <img src={brownColor} alt='коричневый'/>
                                <img src={greyColor} alt='серый'/>
                                <img src={beige} alt='бежевый'/>
                                <img src={blue} alt='синий'/>
                                <img src={green} alt='зеленый'/>
                                <img src={bordo} alt='бордовый'/>
                                <img src={silver} alt='серебристый'/>
                                <img src={antracit} alt='антрацит'/>
                            </div>
                            <div className='additionalColor'>
                                <div>
                                    <h4>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА ВЗЛОМОУСТОЙЧИВЫХ ВОРОТ:</h4>
                                    <img src={greyColor} alt='серый'/>
                                    <p>оцинкованный</p>
                                </div>
                                <div>
                                    <h4>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА ВОРОТ ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ:</h4>
                                    <img src={golden} alt='серый'/>
                                    <p>golden oak</p>
                                    <img src={darkOak} alt='серый'/>
                                    <p>dark oak</p>
                                </div>
                            </div>
                            <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                            <div className='baseWrapper'>
                                <div className='base'>
                                    <img src={box} alt='Короб'/>
                                    <p>Короб в сборе. Представляет собой собранный защитный короб с боковыми крышками, валом и капсулами, механизмом управления.</p>
                                </div>
                                <div className='base'>
                                    <img src={canvas} alt='Полотно'/>
                                    <div>
                                        <p>ВЛОМОУСТОЙЧИВЫЕ ВОРОТА - Полотно в сборе. Полотно из стального профиля с боковыми замками, предотвращающими расхождение профиля. Полотно может быть комбинированным — из сплошного и перфорированного профиля.</p>
                                        <p>ВОРОТА ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ - Полотно в сборе. Полотно из пенозаполненного профиля с боковыми замками, предотвращающими расхождение профиля.</p>
                                    </div>
                                </div>
                                <div className='base'>
                                    <img src={canvasEnd} alt='Концевой профиль'/>
                                    <p>Концевой профиль с уплотнителем. В концевой профиль могут быть установлены запирающие механизмы.</p>
                                </div>
                                <div className='base'>
                                    <img src={rails} alt='Комплект направляющих профилей'/>
                                    <p>Комплект направляющих профилей с уплотнителем. Большой выбор стандартных и усиленных направляющих позволяет подобрать профили для роллетных систем, устанавливаемых на проемах любых размеров, с учетом ветровых нагрузок и требований по взломостойкости.</p>
                                </div>
                                <div className='base'>
                                    <img src={engine} alt='Привод'/>
                                    <div>
                                        <p>ВЛОМОУСТОЙЧИВЫЕ ВОРОТА - Электропривод внутривальный.</p>
                                        <p>ВОРОТА ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ - Ручной или автоматический электропривод.</p>
                                    </div>
                                </div>
                            </div>
                            <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                            <div className='additionWrapper'>
                                <div>
                                    <img src={swb} alt='Выключатель клавишный SWB'/>
                                    <p>Выключатель клавишный SWB</p>
                                </div>
                                <div>
                                    <img src={swm} alt='Ключ-кнопка SWM'/>
                                    <p>Ключ-кнопка SWM для подачи управляющей команды на блок управления электропривода с помощью поворота ключа</p>
                                </div>
                                <div>
                                    <img src={cv} alt='Блок управления CV01'/>
                                    <p>Блок управления CV01 для осуществления возможности дистанционного управления одной роллетой или группой роллет</p>
                                </div>
                                <div>
                                    <img src={smartroll} alt='Блок управления SmartRoll'/>
                                    <p>Блок управления SmartRoll для дистанционного управления внутривальными электроприводами роллет с помощью пультов DoorHan</p>
                                </div>
                                <div>
                                    <img src={dhre} alt='Внешний радиоприемник DHRE-1'/>
                                    <p>Внешний радиоприемник DHRE-1 для управления автоматикой других производителей с помощью пульта DoorHan</p>
                                </div>
                                <div>
                                    <img src={gsm} alt='GSM-модуль'/>
                                    <p>GSM-модуль для приема сигнала с мобильного телефона и передачи управляющей команды для запуска электропривода</p>
                                </div>
                                <div>
                                    <img src={rolletTransmitter} alt='Пульт для дистанционного управления'/>
                                    <p>Пульт для дистанционного управления</p>
                                </div>
                                <div>
                                    <img src={rolletPhoto} alt='Фотоэлементы'/>
                                    <p>Фотоэлементы безопасности Photocell-N, состоящие из инфракрасного передатчика и приемника</p>
                                </div>
                                <div>
                                    <img src={wifiModule} alt='Wi-Fi-модуль'/>
                                    <p>Только для ВОРОТ ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ -  Wi-Fi-модуль для беспроводного управления (выработки сигнала управления, NO) электроприводами</p>
                                </div>
                                <div>
                                    <img src={transmitter4} alt='пульт'/>
                                    <p>Только для ВОРОТ ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ - Пульт Transmitter-4 для дистанционного управления 4 автоматическими устройствами</p>
                                </div>
                                <div>
                                    <img src={lampa} alt='светодиодная лампа'/>
                                    <p>Только для ВОРОТ ИЗ ПЕНАЗАПОЛНЕННОГО ПРОФИЛЯ - Сигнальная светодиодная лампа с антенной Lamp-PRO</p>
                                </div>
                            </div>
                        </div>
                        }

                    </div>
                    

                </div>
            </div>
        </section>
    );
}