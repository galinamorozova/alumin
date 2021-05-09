import React, {useState} from 'react';
import './fast.scss';
import SideMenu from '../../../sideMenu/SideMenu';


import SDC from '../../../../images/doorhan/SDC.jpg';
import SDF from '../../../../images/doorhan/SDF.jpg';
import SDI from '../../../../images/doorhan/SDI.jpg';
import SDO from '../../../../images/doorhan/SDO.jpg';
import silver from '../../../../images/doorhan/9006.png';
import blue from '../../../../images/doorhan/5005.png';
import green from '../../../../images/doorhan/6005.png';
import redColor from '../../../../images/doorhan/3000.png';
import yellowColor from '../../../../images/doorhan/yellowColor.jpg';
import orangeColor from '../../../../images/doorhan/orangeColor.jpg';
import block from '../../../../images/doorhan/block.jpg';
import val from '../../../../images/doorhan/val.jpg';
import fastRail from '../../../../images/doorhan/fastRail.jpg';
import fastFabric from '../../../../images/doorhan/fastFabric.jpg';
import photo from '../../../../images/doorhan/photo.jpg';
import sensor from '../../../../images/doorhan/sensor.jpg';
import fastBox from '../../../../images/doorhan/fastBox.jpg';
import plus from '../../../../images/doorhan/plus.jpg';
import doubleFabric from '../../../../images/doorhan/doubleFabric.jpg';
import SDCVal from '../../../../images/doorhan/SDCVal.jpg';


import whiteColor from '../../../../images/doorhan/9003.png';
import greyColor from '../../../../images/doorhan/7004.png';
import fastCarcas from '../../../../images/doorhan/fastCarcas.jpg';
import fastwave from '../../../../images/doorhan/fastWave.jpg';
import fastspiralTitle from '../../../../images/doorhan/fastSpiralTitle.jpg';
import fastWindow from '../../../../images/doorhan/fastWindow.jpg';
import fastWindow2 from '../../../../images/doorhan/fastWindow2.jpg';
import fastEngine from '../../../../images/doorhan/fastEngine.jpg';
import fastPanel from '../../../../images/doorhan/fastPanel.jpg';

export default function Fast() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='fastGates'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>Скоростные ПВХ ворота DOORHAN</button>
                            <button onClick={() => setActiveTab(2)}>Скоростные спиральные ворота DOORHAN</button>
                        </div>
                        {activeTab === 1 && 
                        <div className='content'>
                            <div className='PVHGates'>
                                <img src={SDI} alt='SDI'/>
                                <div className='gateView'>
                                    <h4>СКОРОСТНЫЕ РУЛОННЫЕ ВОРОТА ДЛЯ ВНУТРЕННЕГО ИСПОЛЬЗОВАНИЯ СЕРИИ SPEEDROLL SDI</h4>
                                    <p>ЗОНА ПРИМЕНЕНИЯ: складские комплексы, производственные помещения</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 600 до 5 700</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 800 до 5 800</p>
                                        <p>Притолока, мм</p>
                                        <p>от 600</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 225 до 475</p>
                                    </div>
                                </div>
                            </div>
                            <div className='PVHGates'>
                                <img src={SDO} alt='SDO'/>
                                <div className='gateView'>
                                <h4>СКОРОСТНЫЕ РУЛОННЫЕ ВОРОТА ДЛЯ НАРУЖНОГО ИСПОЛЬЗОВАНИЯ СЕРИИ SPEEDROLL SDO</h4>
                                <p>ЗОНА ПРИМЕНЕНИЯ: складские комплексы, промышленные объекты</p>
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 600 до 5 700</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 800 до 5 800</p>
                                        <p>Притолока, мм</p>
                                        <p>от 600</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 225 до 475</p>
                                    </div>
                                </div>
                            </div>
                            <div className='PVHGates'>
                                <img src={SDF} alt='SDF'/>
                                <div className='gateView'>
                                <h4>СКОРОСТНЫЕ РУЛОННЫЕ ВОРОТА ДЛЯ ПИЩЕВОЙ ПРОМЫШЛЕННОСТИ СЕРИИ SPEEDROLL SDF</h4>
                                <p>ЗОНА ПРИМЕНЕНИЯ: складские комплексы, помещения с высокими требованиями санитарных норм</p>   
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 1 600 до 3 800</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 1 700 до 3 800</p>
                                        <p>Притолока, мм</p>
                                        <p>от 550</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 175 до 400</p>
                                    </div>
                                </div>
                            </div>
                            <div className='PVHGates'>
                                <img src={SDC} alt='SDC'/>
                                <div className='gateView'>
                                    <h4>СКОРОСТНЫЕ РУЛОННЫЕ ВОРОТА ДЛЯ МОРОЗИЛЬНЫХ КАМЕР СЕРИИ SPEEDROLL SDC</h4>
                                    <p>ЗОНА ПРИМЕНЕНИЯ: морозильные камеры, складские комплексы с низкими температурами, места, где требуется соблюдение низкотемпературного режима</p>   
                                    <div className='characteristics'>
                                        <p>Ширина проема, мм</p>
                                        <p>от 2 000 до 3 750</p>
                                        <p>Высота проема, мм</p>
                                        <p>от 2 000 до 3 000</p>
                                        <p>Притолока, мм</p>
                                        <p>от 1 100</p>
                                        <p>Пристенки, мм</p>
                                        <p>от 220 до 440</p>
                                    </div>
                                </div>
                            </div>
                            <h4>ТИП ПОВЕРХНОСТИ</h4>
                            <div className='fastDesign'>
                                <div>
                                    <h4>ВОРОТА SPEEDROLL SDI и SDO</h4>
                                    <div>
                                        <img src={greyColor} alt='Каркас ворот без покраски из оцинкованной стали'/>
                                        <p>Каркас ворот без покраски из оцинкованной стали</p>
                                    </div>
                                    <div>
                                        <img src={greyColor} alt='Каркас ворот из нержавеющей стали ASIS 304'/>
                                        <p>Каркас ворот из нержавеющей стали ASIS 304</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>ВОРОТА SPEEDROLL SDF</h4>
                                    <div>
                                        <img src={greyColor} alt='Каркас ворот из нержавеющей стали ASIS 304'/>
                                        <p>Каркас ворот из нержавеющей стали ASIS 304</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>ВОРОТА SPEEDROLL SDC</h4>
                                    <div>
                                        <img src={greyColor} alt='Каркас ворот без покраски из оцинкованной стали'/>
                                        <p>Каркас ворот без покраски из оцинкованной стали</p>
                                    </div>
                                </div>
                            </div>
                            <h4>ЦВЕТА КАРКАСА/ПОЛОТНА СКОРОСТНЫХ РУЛОННЫХ ВОРОТ:</h4>
                            <div className='fastColor'>   
                                <img src={whiteColor} alt='белый'/>
                                <img src={blue} alt='синий'/>
                                <img src={green} alt='зеленый'/>
                                <img src={silver} alt='серебристый'/>
                                <img src={yellowColor} alt='желтый'/>
                                <img src={redColor} alt='красный'/>
                                <img src={orangeColor} alt='оранжевый'/>
                            </div>
                            <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ ВОРОТ SDI SDO и SDF</h4>
                            <div className='baseWrapper'>
                                <div className='base'>
                                    <img src={fastBox} alt='Стойки и короба'/>
                                    <div>
                                        <p>1. Стойки и короба из оцинкованной стали у ворот SDI и SDO</p>
                                        <p>2. Стойки и короба из нержавеющей стали AISI304 у ворот SDF</p>
                                    </div>
                                </div>
                                <div className='base'>
                                    <img src={val} alt='Вал из оцинкованной стали диаметром 90/130 мм'/>
                                    <p>Вал из оцинкованной стали диаметром 90/130 мм</p>
                                </div>
                                <div className='base'>
                                    <img src={fastRail} alt='Направляющие — экструдированный полиэтилен'/>
                                    <p>Направляющие — экструдированный полиэтилен</p>
                                </div>
                                <div className='base'>
                                    <img src={fastFabric} alt='Полотно — непрозрачный армированный ПВХ плотностью 900–1 200 г/м²'/>
                                    <p>Полотно — непрозрачный армированный ПВХ плотностью 900–1 200 г/м²</p>
                                </div>
                                <div className='base'>
                                    <img src={block} alt='Блок управления'/>
                                    <p>Блок управления — корпус стальной окрашенный 300 х 400 х 150 мм; класс защиты — IP54; с частотным преобразователем</p>
                                </div>
                                <div className='base'>
                                    <img src={photo} alt='фотоэлементы'/>
                                    <p>Фотоэлементы устанавливаются на высоте 500 мм от пола, а также в верхних точках боковых стоек для выявления некорректной размотки полотна при открывании</p>
                                </div>
                            </div>
                            <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ ВОРОТ SDC (для морозильных камер)</h4>
                            <div className='baseWrapper'>
                                <div className='base'>
                                    <img src={SDCVal} alt='Стойки и короба сделаны из оцинкованной стали'/>
                                    <p>Стойки и короба сделаны из оцинкованной стали</p>
                                </div>
                                <div className='base'>
                                    <img src={val} alt='Вал выполнен из оцинкованной стали диаметром 130 мм'/>
                                    <p>Вал выполнен из оцинкованной стали диаметром 130 мм</p>
                                </div>
                                <div className='base'>
                                    <img src={fastRail} alt='Направляющие — экструдированный полиэтилен'/>
                                    <p>Направляющие — экструдированный полиэтилен</p>
                                </div>
                                <div className='base'>
                                    <img src={fastFabric} alt='Полотно — непрозрачный армированный ПВХ плотностью 900–1 200 г/м²'/>
                                    <p>Полотно — непрозрачный армированный ПВХ плотностью 900–1 200 г/м²</p>
                                </div>
                                <div className='base'>
                                    <img src={block} alt='Блок управления — корпус стальной окрашенный 300 х 400 х 150 мм; класс защиты — IP54; с частотным преобразователем'/>
                                    <p>Блок управления — корпус стальной окрашенный 300 х 400 х 150 мм; класс защиты — IP54; с частотным преобразователем</p>
                                </div>
                                <div className='base'>
                                    <img src={photo} alt='Фотоэлементы'/>
                                    <p>Фотоэлементы устанавливаются на высоте 500 мм от пола, а также датчики антизаклинивания полотна в верхних точках боковых стоек для выявления некорректной размотки полотна при открытии</p>
                                </div>
                                <div className='base'>
                                    <img src={doubleFabric} alt='Подогрев привода и стоек, а также пространства между полотнами'/>
                                    <p>Подогрев привода и стоек, а также пространства между полотнами</p>
                                </div>
                            </div>
                            <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={block} alt='Корпус блока управления из нержавеющей стали AISI304'/>
                                        <p>Корпус блока управления из нержавеющей стали AISI304</p>
                                    </div>
                                    <div>
                                        <img src={plus} alt='Подогрев привода и стоек'/>
                                        <p>Подогрев привода и стоек</p>
                                    </div>
                                    <div>
                                        <img src={sensor} alt='Сенсоры'/>
                                        <p>При закрывании, в случае прикосновения чувствительной нижней кромки к препятствию, с сенсора по радиоканалу передается сигнал в блок управления на открывание ворот; в случае отключения электричества ворота открываются автоматически с помощью противовеса</p>
                                    </div>
                                    <div>
                                        <img src={val} alt='Вал из нержавеющей стали AISI304'/>
                                        <p>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ ДЛЯ ВОРОТ SDF - Вал из нержавеющей стали AISI304</p>
                                    </div>
                                </div>
                        </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h2>СКОРОСТНЫЕ СПИРАЛЬНЫЕ ВОРОТА СЕРИИ HSSD</h2>
                                <div className='spiralGates'>
                                    <img src={fastspiralTitle} alt='спиральные ворота'/>
                                    <p>Скоростные спиральные ворота сочетают в себе лучшие качества рулонных ПВХ-ворот и секционных ворот. Они предназначены для перекрытия внутренних и наружных проемов, применяются на автомобильных парковках, производственных и складских объектах.</p>
                                </div>
                                <h4>ХАРАКТЕРИСТИКИ:</h4>
                                <div className='characteristics'>
                                    <p>Высота проема, мм</p>
                                    <p>от 1 600мм до 4 500мм</p>
                                    <p>Ширина проема, мм</p>
                                    <p>от 1 800мм до 5 000мм</p>
                                    <p>Пристенки, мм</p>
                                    <p>от 350мм</p>
                                    <p>Притолока, мм</p>
                                    <p>от 700мм</p>
                                    <p>Скорость открывания, м/с (* в зависимости от типа полотна и размера ворот)</p>
                                    <p>до 2,5 *</p>
                                    <p>Скорость закрывания, м/с</p>
                                    <p>0,8</p>
                                    <p>Сопротивление ветровой нагрузке, Па, класс (ГОСТ 31174)</p>
                                    <p>CLASS3 до 25 кв. м</p>
                                    <p>Сопротивление ветровой нагрузке, Па, класс (ГОСТ 31174)</p>
                                    <p>CLASS2 свыше 25 кв. м</p>
                                    <p>Диапазон рабочих температур, °С</p>
                                    <p>от -25 до +45</p>
                                    <p>Уровень теплоизоляции, Вт / м² *°С</p>
                                    <p>0,76</p>
                                    <p>Ресурс, циклов (* в зависимости от типа полотна и размера ворот, но не более 250 000 циклов ежегодно)</p>
                                    <p>до 1 500 000*</p>
                                </div>
                                <h4>ДИЗАЙН ПАНЕЛЕЙ</h4>
                                <div className='design'>
                                    <div>
                                        <img src={fastwave} alt='волна'/>
                                        <p>волна</p>
                                    </div>
                                </div>
                                <h4>ЦВЕТА ПАНЕЛЕЙ:</h4>
                                <div className='color'>   
                                    <img src={whiteColor} alt='белый'/>
                                    <img src={greyColor} alt='серый'/>
                                </div>
                                <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='baseWrapper'>
                                    <div className='base'>
                                        <img src={fastPanel} alt='Полотно из сэндвич-панелей толщиной 40 мм'/>
                                        <p>Полотно из сэндвич-панелей толщиной 40 мм</p>
                                    </div>
                                    <div className='base'>
                                        <img src={fastCarcas} alt='Каркас ворот из оцинкованной стали'/>
                                        <p>Каркас ворот из оцинкованной стали</p>
                                    </div>
                                    <div className='base'>
                                        <img src={fastEngine} alt='Двигатель'/>
                                        <p>Двигатель</p>
                                    </div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={fastWindow} alt='Прозрачное окно'/>
                                        <p>Прозрачное окно</p>
                                    </div>
                                    <div>
                                        <img src={fastWindow2} alt='Прозрачная панель'/>
                                        <p>Прозрачная панель</p>
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