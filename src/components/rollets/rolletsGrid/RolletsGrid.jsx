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

import rhe78g from '../../../images/doorhan/rhe78g.jpg';
import rhe84mGrid from '../../../images/doorhan/rhe84mGrid.jpg';
import rhe84gm from '../../../images/doorhan/rhe84gm.jpg';
import rhe56gm from '../../../images/doorhan/RHE56GM.jpg';
import rhe78 from '../../../images/doorhan/RHE78.jpg';
import rhe84gmDesign from '../../../images/doorhan/rhe56gmGrid.jpg';
import rhe84mDesign from '../../../images/doorhan/RHE56MDesign.jpg';
import whiteColor from '../../../images/doorhan/9003.png';
import greyColor from '../../../images/doorhan/7004.png';
import silver from '../../../images/doorhan/9006.png';
import brownColor from '../../../images/doorhan/8014.png';
import blue from '../../../images/doorhan/5005.png';
import green from '../../../images/doorhan/6005.png';
import beige from '../../../images/doorhan/1014.png';
import bordo from '../../../images/doorhan/3005.png';
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

import steelPerf from '../../../images/steel/steelPerf.jpg';
import perfGrid from '../../../images/steel/perfGrid.jpg';
import p60p from '../../../images/steel/p60p.jpg';
import p75p from '../../../images/steel/p75p.jpg';
import p105p from '../../../images/steel/p105p.jpg';




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
                            <button onClick={() => setActiveTab(3)}>стальные</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <h3>роллетные решетки ALUTECH</h3>
                                <img src={titleGrid} alt='ролетные решетки'/>
                                <h3>преимущества</h3>
                                <div className='plusWrapper'>
                                    <div>
                                        <h4>Р3-Р4 классы защиты</h4>
                                        <p>сертифицированная безопасность и защита вашего имущества.</p>
                                    </div>
                                    <div><img src={expl1} alt='роллетная решетка'/></div>
                                    <div>
                                        <h4>Защита от несанкционированного подъема</h4>
                                        <p>Специальный фиксирующий профиль обеспечивает защиту от несанкционированного подъема решетки в закрытом состоянии.</p>		
                                    </div>
                                    <div><img src={expl2} alt='роллетная решетка'/></div>
                                    <div>
                                        <h4>Разнообразие решений</h4>
                                        <p>Возможно изготовление роллетных решеток с различными размерами отверстий — 56 или 84 мм, а также мелкой перфорацией.</p>						
                                    </div>
                                    <div><img src={expl3} alt='роллетная решетка'/></div>
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
                        <div className='content'>
                            <h4>РОЛЛЕТНЫЕ РЕШЕТКИ ДОРХАН</h4>
                            <div className='rolletGridDoorhan'>
                                <img src={rhe84mGrid} alt='роллетные решетки'/>
                                <div className='gridVariant'>
                                    <h4>УЛИЧНЫЕ И ГАРАЖНЫЕ РОЛЛЕТНЫЕ РЕШЕТКИ / РОЛЬВОРОТА ИЗ ОДНОСТЕННОГО ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE84M</h4>
                                    <p>Сфера применения - Частные и коммерческие объекты с шириной проема до 5,5 м: гаражные и технические проемы</p>
                                    <div className='characteristics'>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 000 до 5 000</p>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 000 до 5 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 300 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 83 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>20,5</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>7,11</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>12</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletGridDoorhan'>
                                <img src={rhe78g} alt='роллетные решетки'/>
                                <div className='gridVariant'>
                                    <h4>РОЛЛЕТНЫЕ РЕШЕТКИ / РОЛЬВОРОТА ИЗ РЕШЕТЧАТОГО ЭКСТРУДИРОВАННОГО ПРОФИЛЯ RHE78G С ПРОЗРАЧНЫМИ ВСТАВКАМИ</h4>
                                    <p>Сфера применения - Торговые центры, автомойки и автосервисы: витрины и въездные проемы</p>
                                    <div className='characteristics'>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 000 до 4 500</p>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 000 до 5 200</p>
                                        <p>Притолока, мм</p>
                                        <p>от 300 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 83 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>15</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>7,42</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>13</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletGridDoorhan'>
                                <img src={rhe56gm} alt='роллетные решетки'/>
                                <div className='gridVariant'>
                                    <h4>РОЛЬСТАВНИ ИЗ РЕШЕТЧАТЫХ ПРОФИЛЕЙ RHE56GM (ВЗЛОМОУСТОЙЧИВЫЕ)</h4>
                                    <p>Сфера применения - Банки, ювелирные салоны: большие оконные и витринные проемы</p>
                                    <div className='characteristics'>
                                        <p>Высота проема, мм</p>
                                        <p>от 500 до 5 000</p>
                                        <p>Ширина проема, мм</p>
                                        <p>от 500 до 3 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 180 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 65 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>15</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>6,12</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>18</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletGridDoorhan'>
                                <img src={rhe84gm} alt='роллетные решетки'/>
                                <div className='gridVariant'>
                                    <h4>РОЛЬСТАВНИ / РОЛЬВОРОТА ИЗ РЕШЕТЧАТЫХ ПРОФИЛЕЙ RHE84GM (ВЗЛОМОУСТОЙЧИВЫЕ)</h4>
                                    <p>Сфера применения - Банки, ювелирные салоны: большие оконные и витринные проемы</p>
                                    <div className='characteristics'>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 000 до 5 000</p>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 000 до 5 500</p>
                                        <p>Притолока, мм</p>
                                        <p>от 300 (накладной монтаж)</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 83 (накладной монтаж)</p>
                                        <p>Максимальная площадь полотна, м²</p>
                                        <p>20,5</p>
                                        <p>Материал</p>
                                        <p>алюминий</p>
                                        <p>Вес профиля, кг/м²</p>
                                        <p>6,12</p>
                                        <p>Количество ламелей на 1 м высоты полотна, шт.</p>
                                        <p>18</p>
                                    </div>
                                </div>
                            </div>
                            <div className='rolletDesign'>
                                <div>
                                    <h4>ЭКСТРУДИРОВАННЫЕ ПРОФИЛИ RHE84M</h4>
                                    <img src={rhe84mDesign} alt='дизайн роллетных решеток'/>
                                </div>
                                <div>
                                    <h4>ЭКСТРУДИРОВАННЫЕ ПРОФИЛИ RHE78G</h4>
                                    <img src={rhe78} alt='дизайн роллетных решеток'/>
                                </div>
                                <div>
                                    <h4>ЭКСТРУДИРОВАННЫЕ ПРОФИЛИ RHE56GM, RHE84GM</h4>
                                    <img src={rhe84gmDesign} alt='дизайн роллетных решеток'/>
                                </div>
                            </div>
                            <h4>ЦВЕТА РОЛЛЕТНЫХ РЕШЕТОК:</h4>
                            <div className='color'>   
                                <img src={whiteColor} alt='белый'/>
                                <img src={brownColor} alt='коричневый'/>
                                <img src={greyColor} alt='серый'/>
                                <img src={beige} alt='бежевый'/>
                                <img src={silver} alt='серебристый'/>
                                <div>
                                    <img src={blue} alt='синий'/>
                                    <p>только для профиля RHE78G</p>
                                </div>
                                <div>
                                    <img src={green} alt='зеленый'/>
                                    <p>только для профиля RHE78G</p>
                                </div>
                                <div>
                                    <img src={bordo} alt='бордовый'/>
                                    <p>только для профиля RHE78G</p>
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
                                    <p>Полотно в сборе. Полотно из экструдированного профиля с боковыми замками, предотвращающими расхождение профиля.</p>
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
                                        <p>для профиля RHE56GM - Ручной или автоматический электропривод.</p>
                                        <p>для остальных профилей RHE84M, RHE78G, RHE84GM - Электропривод внутривальный.</p>
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
                                    <p>Wi-Fi-модуль для беспроводного управления (выработки сигнала управления, NO) электроприводами</p>
                                </div>
                                <div>
                                    <img src={transmitter4} alt='пульт'/>
                                    <p>Пульт Transmitter-4 для дистанционного управления 4 автоматическими устройствами</p>
                                </div>
                                <div>
                                    <img src={lampa} alt='светодиодная лампа'/>
                                    <p>ТОЛЬКО ДЛЯ ПРОФИЛЯ RHE84M, RHE78G и RHE84GM  - Сигнальная светодиодная лампа с антенной Lamp-PRO</p>
                                </div>
                            </div>
                        </div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>
                                <h4>СТАЛЬНЫЕ РОЛЛЕТНЫЕ РЕШЕТКИ</h4>
                                <div className='steelPlus'>
                                    <img src={steelPerf} alt="стальные решетки"/>
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
                                <div className='steelGrid'>
                                    <div>
                                        <h4>Сфера применения стальных роллетных решеток</h4>
                                        <div>
                                            <li>Стальный перфорированный профиль активно используется в частных квартирах, домах на окнах, балконах и дверях. 
                                            Перфорированный профиль обладает таким же запасом прочности, но дополнительно еще и улучшенными солярными свойствами, поскольку частично пропускают свет!</li>
                                            <li>В нежилых помещениях перфорированные роллеты также активно применяются в качестве перегородок в офисах, складах, оформляют входную группу или оконные проемы в бутиках и салонах красоты, большинство торговых центров, спортивных объектов, кинотеатров и т.д.</li>
                                            <li>Перфорированные роллеты можно использовать для оформления беседок, террас, в качестве вентеляционного элемента в перегородках и т.п.</li>
                                        </div>
                                    </div>
                                    <img src={perfGrid} alt="стальные решетки"/>   
                                </div>
                            <h4>Виды профиля</h4>
                            <div className='steelDesign'>
                                <div>
                                    <p>Профиль 60П</p>
                                    <img src={p60p} alt=''/>
                                </div>
                                <div>
                                    <p>Профиль 75П</p>
                                    <img src={p75p} alt=''/>
                                </div>
                                <div>
                                    <p>Профиль 105П</p>
                                    <img src={p105p} alt=''/>
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