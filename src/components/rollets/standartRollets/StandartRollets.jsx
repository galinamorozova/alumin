import React, {useState} from 'react';
import './standartRollets.scss';
import SideMenu from '../../sideMenu/SideMenu';

import title1 from '../../../images/rollet/title1.jpg';
import title2 from '../../../images/rollet/title2.jpg';
import title3 from '../../../images/rollet/title3.jpg';
import pluses from '../../../images/rollet/pluses.jpg';
import prestige from '../../../images/rollet/prestige.png';
import security from '../../../images/rollet/security.jpg';
import trend from '../../../images/rollet/trend.jpg';
import avtoRollet from '../../../images/rollet/avtoRollet.jpg';
import handOpenRollet from '../../../images/rollet/handOpenRollet.jpg';


import rh58n from '../../../images/doorhan/RH58N.jpg';
import rhe56m from '../../../images/doorhan/RHE56M.jpg';
import rhe45m from '../../../images/doorhan/RHE45M.jpg';
import rh41n from '../../../images/doorhan/RH41N.jpg';
import rh45pn from '../../../images/doorhan/RH45PN.jpg';
import rhe58m from '../../../images/doorhan/RHE58M.jpg';
import rh41nDesign from '../../../images/doorhan/RH41NDesign.jpg';
import rh45pnDesign from '../../../images/doorhan/RH45PNDesign.jpg';
import rhe45mDesign from '../../../images/doorhan/RHE45MDesign.jpg';
import rhe56mDesign from '../../../images/doorhan/RHE56MDesign.jpg';
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

import steelRollet from '../../../images/steel/steelRollet.jpg';
import p60 from '../../../images/steel/p60.jpg';
import p60p from '../../../images/steel/p60p.jpg';
import p75 from '../../../images/steel/p75.jpg';
import p75p from '../../../images/steel/p75p.jpg';
import p105 from '../../../images/steel/p105.jpg';
import p105p from '../../../images/steel/p105p.jpg';
import p115 from '../../../images/steel/p115.jpg';
import akaciaSt from '../../../images/steel/akacia-standart.jpg';
import akaciaTm from '../../../images/steel/akacia-temnaya.jpg';
import california from '../../../images/steel/california.jpg';
import dub3D from '../../../images/steel/dub-3d.jpg';
import dubSv from '../../../images/steel/dub-svetlii.jpg';
import dubTm from '../../../images/steel/dub-temnii.jpg';
import evergrin from '../../../images/steel/evergrin.jpg';
import grusha from '../../../images/steel/grusha.jpg';
import kashtan from '../../../images/steel/kashtan.jpg';
import kedr from '../../../images/steel/kedr.jpg';
import sosna from '../../../images/steel/sosna.jpg';
import vishnya from '../../../images/steel/vishnya.jpg';
import venge from '../../../images/steel/venge.jpg';
import vyaz from '../../../images/steel/vyaz.jpg';

export default function StandartRollets() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='standartRollets'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>doorhan</button>
                            <button onClick={() => setActiveTab(3)}>стальные</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <h3>Роллеты для окон, дверей, балконов. Противовзломные роллеты</h3>
                                <div className='titleImage'>
                                <img src={title3} alt='роллета на окно'/>
                                <img src={title2} alt='роллета на дверь'/>
                                <img src={title1} alt='роллета на балкон'/>
                                </div>

                                <h3>преимущества</h3>
                                <div className='pluses'>
                                    <img src={pluses} alt='преимущества'/>
                                    <div>
                                        <h4>Защита от взлома</h4>
                                        <p>рольставни станут дополнительной преградой на пути злоумышленников</p>
                                    </div>
                                    <div>
                                        <h4>Шумоизоляция</h4>
                                        <p>уличный шум больше не помешает приятному отдыху и продуктивной работе</p>
                                    </div>
                                    <div>
                                        <h4>Защита от солнца</h4>
                                        <p>Цвет входной двери надолго останется насыщенным, а в доме удастся сохранить прохладу летом</p>
                                    </div>
                                </div>
                                <h3>виды рольставен</h3>
                                <div className='typeWrapper'>
                                    <div>
                                        <img src={prestige} alt='prestige'></img>
                                        <h4>Prestige</h4>
                                        <p>рольставни премиум-качества для эксклюзивных дизайнерских экстерьеров</p>
                                        <p>P1 класс взломостойкости</p>
                                        <p>Оптимальная защита от ветра</p>
                                        <p>Перфорированный и неперфорированный профили. <span>Перфорированные позволяют регулировать степень освещенности помещения</span></p>
                                        <p>Более 19 цветов</p>
                                        <p>Формы коробов: встроенные, круглые, полукруглые, 20° и 45°</p>
                                        <p>Рольставни со встроенной антимоскитной сеткой</p>
                                    </div>

                                    <div>
                                        <img src={security} alt='security'/>
                                        <h4>ПРОТИВОВЗЛОМНЫЕ Security</h4>
                                        <p>специализированные решения для объектов с высокими требованиями к безопасности</p>
                                        <p>P3-P5 классы защиты от взлома. <span>значительно больше безопасности</span></p>
                                        <p>Выдерживают ураганные ветры</p>
                                        <p>Перфорированный и неперфорированный профили. <span>Перфорированные позволяют регулировать степень освещенности помещения</span></p>
                                        <p>Более 18 цветов</p>
                                        <p>Формы коробов: встроенные, круглые, полукруглые, 20° и 45°</p>
                                        <p>Роллетные решетки как дополнительная опция</p>
                                    </div>

                                    <div>
                                        <img src={trend} alt='trend'/>
                                        <h4>Trend</h4>
                                        <p>доступное решение с базовыми функциями защиты</p>
                                        <p>Базовая антивандальная защита</p>
                                        <p>Базовый запас прочности</p>
                                        <p>Неперфорированный</p>
                                        <p>Более 7 популярных цветов</p>
                                        <p>Формы коробов: встроенные и 45°</p>
                                    </div>
                                </div>


                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <img src={avtoRollet} alt='автоматическое управление'/>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpenRollet} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> «АЛЮТЕХ» предлагает: — ленточный привод; — шнуровой привод; — воротковый привод; — пружинно-инерционный механизм.</span></p>

                                </div>  


                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                            <h4>РОЛЛЕТЫ ДЛЯ ОКОН, ДВЕРЕЙ, БАЛКОНОВ. ПРОТИВОВЗЛОМНЫЕ РОЛЛЕТЫ ДОРХАН</h4>
                            <div className='rolletDoorhan'>
                                <img src={rh41n} alt='роллеты'/>
                                <div className='rolletVariant'>
                                    <h4>РОЛЬСТАВНИ ДЛЯ ОКОННЫХ ПРОЕМОВ (ЭНЕРГОСБЕРЕГАЮЩИЕ) ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH41N, RH45N</h4>
                                    <p>Сфера применения - частный сектор: оконные и дверные проемы</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 400 до 3 000</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 125 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 53 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>7</p>
                                        <p>Материал</p>
                                        <p>алюминий, пена</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>RH41N - 1,85; RH45N - 1,9</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>RH41N - 24; RH45N - 22</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDoorhan'>
                                <img src={rh58n} alt='роллеты'/>
                                <div className='rolletVariant'>
                                    <h4>РОЛЬСТАВНИ ВИТРИННЫЕ ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH58N</h4>
                                    <p>Сфера применения - Большие оконные проемы в частном секторе, витринные проемы торговых павильонов, Оконные и дверные проемы</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 400 до 3 500</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 165 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 65 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>11</p>
                                        <p>Материал</p>
                                        <p>алюминий, пена</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>2,20</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>17</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDoorhan'>
                                <img src={rh45pn} alt='роллеты'/>
                                <div className='rolletVariant'>
                                    <h4>РОЛЬСТАВНИ ИЗ ПЕРФОРИРОВАННОГО ПРОФИЛЯ (ЧАСТИЧНОЕ ПРОПУСКАНИЕ СВЕТА) RH45PN</h4>
                                    <p>Сфера применения - частный сектор, торговые павильоны: оконные и дверные проемы</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 400 до 3 050</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 125 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 53 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>7</p>
                                        <p>Материал</p>
                                        <p>алюминий, пена</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>1,65</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>22</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDoorhan'>
                                <img src={rhe45m} alt='роллеты'/>
                                <div className='rolletVariant'>
                                    <h4>РОЛЬСТАВНИ ДЛЯ ОКОННЫХ ПРОЕМОВ (ВЗЛОМОУСТОЙЧИВЫЕ) ИЗ ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE45M</h4>
                                    <p>Сфера применения - частный сектор: оконные и дверные проемы</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 500 до 4 000</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 000</p>
                                        <p>Притолока, мм</p>
                                        <p>от 137 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 53 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>9</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>4,5</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>22</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDoorhan'>
                                <img src={rhe58m} alt='роллеты'/>
                                <div className='rolletVariant'>
                                    <h4>РОЛЬСТАВНИ ВИТРИННЫЕ (ВЗЛОМОУСТОЙЧИВЫЕ) ИЗ ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE58M</h4>
                                    <p>Сфера применения - Большие оконные и витринные проемы в торговых и развлекательных центрах, в частном секторе</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 600 до 5 000</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 000</p>
                                        <p>Притолока, мм</p>
                                        <p>от 180 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 65 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>14</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>5,5</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>17</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDoorhan'>
                                <img src={rhe56m} alt='роллеты'/>
                                <div className='rolletVariant'>
                                <h4>РОЛЬСТАВНИ ВИТРИННЫЕ (ВЗЛОМОУСТОЙЧИВЫЕ) ИЗ ОДНОСТЕННОГО ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE56M</h4>
                                <p>Сфера применения - Большие оконные и витринные проемы в торговых и развлекательных центрах, в частном секторе</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 500 до 3 500</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 000</p>
                                        <p>Притолока, мм</p>
                                        <p>от 180 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 65 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>14</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>сплошной RHE56M - 8,2; решетчатый RHE56GM - 6,12</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>18</p>
                                    </div>
                                </div>
                            </div>

                            <div className='rolletDesign'>
                                <div>
                                    <h4>ПЕНОЗАПОЛНЕННЫЕ СТАНДАРТНЫЕ ПРОФИЛИ</h4>
                                    <img src={rh41nDesign} alt='дизайн роллет'/>
                                    <p> RH41N, RH45N, RH58N</p>
                                </div>
                                <div>
                                    <h4>ПЕНОЗАПОЛНЕННЫЕ ПЕРФОРИРОВАННЫЕ ПРОФИЛИ</h4>
                                    <img src={rh45pnDesign} alt='дизайн роллет'/>
                                    <p>RH45PN</p>
                                </div>
                                <div>
                                    <h4>ВЗЛОМОУСТОЙЧИВЫЕ ЭКСТРУДИРОВАННЫЕ ПРОФИЛИ</h4>
                                    <img src={rhe45mDesign} alt='дизайн роллет'/>
                                    <p>RHE45M, RHE58M</p>
                                </div>
                                <div>
                                    <h4>ВЗЛОМОУСТОЙЧИВЫЕ ЭКСТРУДИРОВАННЫЕ ПРОФИЛИ </h4>
                                    <img src={rhe56mDesign} alt='дизайн роллет'/>
                                    <p>RHE56M / RHE56GM</p>
                                </div>
                            </div>
                            <h4>ЦВЕТА РОЛЬСТАВЕН ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH41N, RH45N, RH58N И ВЗОМОУСТОЙЧИВОГО ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE45M и RHE58M:</h4>
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
                            <h4>ДОПОЛНИТЕЛЬНЫЕ ЦВЕТА РОЛЬСТАВЕН ИЗ ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH41N, RH45N:</h4>
                            <div className='color'>
                                <div>   
                                    <img src={golden} alt='золотой дуб'/>
                                    <p>golden oak</p>
                                </div>
                                <div>
                                    <img src={darkOak} alt='темный дуб'/>
                                    <p>dark oak - только для RH41N</p>
                                </div>
                            </div>
                            <h4>ЦВЕТА РОЛЬСТАВЕН ИЗ ПЕРФОРИРОВАННОГО ПЕНОЗАПОЛНЕННОГО ПРОФИЛЯ RH45PN И ВЗОМОУСТОЙЧИВОГО ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE56M / RHE56GM:</h4>
                            <div className='color'>   
                                <img src={whiteColor} alt='белый'/>
                                <img src={brownColor} alt='коричневый'/>
                                <img src={greyColor} alt='серый'/>
                                <img src={beige} alt='бежевый'/>
                                <img src={silver} alt='серебристый'/>
                            </div>
                            <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                            <div className='baseWrapper'>
                                <div className='base'>
                                    <img src={box} alt='Короб'/>
                                    <p>Короб в сборе. Представляет собой собранный защитный короб с боковыми крышками, валом и капсулами, механизмом управления.</p>
                                </div>
                                <div className='base'>
                                    <img src={canvas} alt='Полотно'/>
                                    <p>Полотно в сборе. Полотно из пенозаполненного или экструдированного профиля с боковыми замками, предотвращающими расхождение профиля.</p>
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
                                    <p>Ручной или автоматический электропривод.</p>
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
                                    <p>Wi-Fi-модуль для беспроводного управления (выработки сигнала управления, NO) электроприводами</p>
                                </div>
                                <div>
                                    <img src={transmitter4} alt='пульт'/>
                                    <p>Пульт Transmitter-4 для дистанционного управления 4 автоматическими устройствами</p>
                                </div>
                            </div>
                        </div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>
                            <h4>СТАЛЬНЫЕ ПРОТИВОВЗЛОМНЫЕ РОЛЛЕТЫ ДЛЯ ОКОН, ДВЕРЕЙ, БАЛКОНОВ</h4>
                            <div className='steelPlus'>
                                <img src={steelRollet} alt="стальные ворота"/>
                                <div>
                                    <h4>Преимущества стальных роллетных систем</h4>
                                    <div>
                                        <li>Стальный профиль предполагает бОльшую противовзломную защиту за счет прочности самого материала (стали) по сравнению с более "мягкими" металлами. 
                                        Особенности конструкции роллет в сочетании со свойствами стали дают существенный антивандальный и противовзломный эффект. Чтобы их "вскрыть" - потребуется не один час.</li>
                                        <li>Роллеты из стали обладают улучшенными противопожарными свойствами, поскольку сталь - материал негорючий.</li>
                                        <li>Стальные рольставни и ворота изготовляются из оцинкованной холоднокатаной стали 0,8–1,2 мм методом роликовой прокатки, гибки в валках</li>
                                        <li>Изделия обрабатываются качественной порошковой покраской с отличными защитными свойствами</li>
                                    </div>
                                </div>
                            </div>
                            <h4>Виды профиля</h4>
                            <div className='steelDesign'>
                                <div>
                                    <p>Профиль 60</p>
                                    <img src={p60} alt=''/>
                                    <p>Профиль 60П</p>
                                    <img src={p60p} alt=''/>
                                </div>
                                <div>
                                    <p>Профиль 75</p>
                                    <img src={p75} alt=''/>
                                    <p>Профиль 75П</p>
                                    <img src={p75p} alt=''/>
                                </div>
                                <div>
                                    <p>Профиль 105</p>
                                    <img src={p105} alt=''/>
                                    <p>Профиль 105П</p>
                                    <img src={p105p} alt=''/>
                                </div>
                                <div>
                                    <p>Профиль 115</p>
                                    <img src={p115} alt=''/>
                                </div>
                            </div>
                            <h4>СТАНДАРТНЫЕ ЦВЕТА ОКРАСКИ:</h4>
                            <p> Внимание! Цвета на экране Вашего монитора могут не совпадать с истинным цветом изделий. Ориентируйтесь на кодовые обозначения по палитре RAL.</p>
                            <div className='steelColor'>
                                <div>
                                    <div className='ral r9006'/>
                                    <p>RAL 9006 (алюм-металлик)</p>
                                </div>
                                <div>
                                <div className='ral r9016'/>
                                    <p>RAL 9016 (стандартный белый)</p>
                                </div>
                                <div>
                                <div className='ral r9010'/>
                                    <p>RAL 9010 (молочно-белый)</p>
                                </div>
                                <div>
                                <div className='ral r1015'/>
                                    <p>RAL 1015 (стандартный бежевый)</p>
                                </div>
                                <div>
                                <div className='ral r1001'/>
                                    <p>RAL 1001 (тяжелый бежевый)</p>
                                </div>
                                <div>
                                <div className='ral r7035'/>
                                    <p>RAL 7035 (стандартный серый)</p>
                                </div>
                                <div>
                                <div className='ral r7004'/>
                                    <p>RAL 7004 (тяжелый серый)</p>
                                </div>
                                <div>
                                <div className='ral r5003'/>
                                    <p>RAL 5003 (темно синий)</p>
                                </div>
                                <div>
                                <div className='ral r6005'/>
                                    <p>RAL 6005 (темно зеленый)</p>
                                </div>
                                <div>
                                    <div className='ral r7047'/>
                                    <p>RAL 7047 (светло-серый)</p>
                                </div>
                                <div>
                                <div className='ral r5017'/>
                                    <p>RAL 5017 (стандартный синий)</p>
                                </div>
                                <div>
                                <div className='ral r8017'/>
                                    <p>RAL 8017 (коричневый шоколад)</p>
                                </div>
                                <div>
                                <div className='ral r8014'/>
                                    <p>RAL 8014 (стандартный коричневый)</p>
                                </div>
                                <div>
                                <div className='ral r6029'/>
                                    <p>RAL 6029 (стандартный зеленый)</p>
                                </div>
                                <div>
                                <div className='ral r3005'/>
                                    <p>RAL 3005 (вишня)</p>
                                </div>
                                <div>
                                <div className='ral r3002'/>
                                    <p>RAL 3002 (стандартный красный)</p>
                                </div>
                                <div>
                                <div className='ral r1018'/>
                                    <p>RAL 1018 (стандартно желтый)</p>
                                </div>
                                <div>
                                <div className='ral r9005'/>
                                    <p>RAL 9005 (стандартно черный)</p>
                                </div>
                            </div>

                            <h4>ОКРАСКА ПОД ФАКТУРУ ДЕРЕВА:</h4>
                            <div className='steelWood'>
                                <div>
                                    <img src={akaciaSt} alt='цвет окрашивания'/>
                                    <p>Акация стандарт</p>
                                </div>
                                <div>
                                    <img src={dubSv} alt='цвет окрашивания'/>
                                    <p>Дуб светлый</p>
                                </div>
                                <div>
                                    <img src={dubTm} alt='цвет окрашивания'/>
                                    <p>Дуб тёмный</p>
                                </div>
                                <div>
                                    <img src={dub3D} alt='цвет окрашивания'/>
                                    <p>Дуб 3D</p>
                                </div>
                                <div>
                                    <img src={kedr} alt='цвет окрашивания'/>
                                    <p>Кедр</p>
                                </div>
                                <div>
                                    <img src={venge} alt='цвет окрашивания'/>
                                    <p>Венге</p>
                                </div>
                                <div>
                                    <img src={kashtan} alt='цвет окрашивания'/>
                                    <p>Каштан</p>
                                </div>
                                <div>
                                    <img src={akaciaTm} alt='цвет окрашивания'/>
                                    <p>Акация тёмная</p>
                                </div>
                                <div>
                                    <img src={sosna} alt='цвет окрашивания'/>
                                    <p>Сосна</p>
                                </div>
                                <div>
                                    <img src={evergrin} alt='цвет окрашивания'/>
                                    <p>Эвергрин</p>
                                </div>
                                <div>
                                    <img src={vishnya} alt='цвет окрашивания'/>
                                    <p>Вишня</p>
                                </div>
                                <div>
                                    <img src={vyaz} alt='цвет окрашивания'/>
                                    <p>Вяз</p>
                                </div>
                                <div>
                                    <img src={grusha} alt='цвет окрашивания'/>
                                    <p>Груша</p>
                                </div>
                                <div>
                                    <img src={california} alt='цвет окрашивания'/>
                                    <p>Калифорния</p>
                                </div>
                            </div>
                            <h4>ВАРИАНТЫ УПРАВЛЕНИЯ РОЛЛЕТНОЙ СИСТЕМОЙ:</h4>
                            <div className='steelControl'>
                                <div>
                                    <img src={swb} alt='управление'/>
                                    <p>клавишный переключатель</p>
                                </div>
                                <div>
                                    <img src={swm} alt='управление'/>
                                    <p>замковый переключатель</p>
                                </div>
                                <div>
                                    <img src={transmitter4} alt='управление'/>
                                    <p>дистанционный пульт</p>
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