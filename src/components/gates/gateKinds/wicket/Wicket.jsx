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

import titleWicket from '../../../../images/doorhan/title_doorhan.jpg';
import panel from '../../../../images/doorhan/panel.jpeg';
import board from '../../../../images/doorhan/board.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import wood from '../../../../images/doorhan/wood.jpeg';
import stukko from '../../../../images/doorhan/stukko.jpeg';
import wicketStandart from '../../../../images/doorhan/wicketStandart.jpg';
import wicketGrid from '../../../../images/doorhan/wicketGrid.jpg';
import wicketRoundPykes from '../../../../images/doorhan/wicketRoundPykes.jpg';
import wicketPykes from '../../../../images/doorhan/wicketPykes.jpg';
import wicketRoundPykesVenzel from '../../../../images/doorhan/wicketRoundPykesVenzel.jpg';
import wicketRound from '../../../../images/doorhan/wicketRound.jpg';
import b1 from '../../../../images/doorhan/b1.jpg';
import b2 from '../../../../images/doorhan/b2.jpg';
import hiTech from '../../../../images/doorhan/hiTech.jpg';
import venge from '../../../../images/doorhan/venge.png';
import golden from '../../../../images/doorhan/golden.png';
import whiteColor from '../../../../images/doorhan/9003.png';
import greyColor from '../../../../images/doorhan/7004.png';
import silver from '../../../../images/doorhan/9006.png';
import brownColor from '../../../../images/doorhan/8014.png';
import brownRed from '../../../../images/doorhan/8017.png';
import blue from '../../../../images/doorhan/5005.png';
import green from '../../../../images/doorhan/6005.png';
import antracit from '../../../../images/doorhan/7016.png';
import beige from '../../../../images/doorhan/1014.png';
import redColor from '../../../../images/doorhan/3000.png';
import bordo from '../../../../images/doorhan/3005.png';
import other from '../../../../images/doorhan/other.png';
import doorhanRails from '../../../../images/doorhan/doorhanRails.jpg';
import wicketLock from '../../../../images/doorhan/wicketLock.jpg';
import nuova from '../../../../images/doorhan/nuova.jpg';
import dhLock from '../../../../images/doorhan/dhLock.jpg';
import doorhanHand from '../../../../images/doorhan/doorhanHand.jpg';
import pillar from '../../../../images/doorhan/pillar.jpg';


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
                            <button onClick={() => setActiveTab(2)}>doorhan</button>
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
                            <div className='content'>
                            <h2>КАЛИТКА В АЛЮМИНИЕВОЙ РАМЕ С ЗАПОЛНЕНИЕМ СЭНДВИЧ-ПАНЕЛЯМИ PSD-A</h2>
                            <img src={titleWicket} alt='калитка Дорхан'/>
                            <h4>ХАРАКТЕРИСТИКИ:</h4>
                                <div className='characteristics'>
                                    <p>Высота проема, мм</p>
                                    <p>от 1 000мм до 3 000мм</p>
                                    <p>Ширина проема, мм</p>
                                    <p>от 600мм до 1 500мм</p>
                                    <p>Просвет, мм</p>
                                    <p>от 35мм до 150мм</p>
                                </div>
                            <h4>ДИЗАЙН ПАНЕЛЕЙ</h4>
                                <div className='design'>
                                    <div>
                                        <img src={board} alt='доска'/>
                                        <p>доска</p>
                                    </div>
                                    <div>
                                        <img src={stripePanel} alt='горизонтальная полоса'/>
                                        <p>горизонтальная полоса с внутренней стороны панелей</p>
                                    </div>
                                    <div>
                                        <img src={panel} alt='филенка'/>
                                        <p>филенка</p>
                                    </div>
                                </div>
                                <h4>Тип поверхностей</h4>
                                <div className='surface'> 
                                    <div>
                                    <img src={wood} alt='под дерево'/>
                                    <p>под дерево - внешняя сторона панели</p>
                                    </div>
                                    <div>
                                    <img src={stukko} alt='stukko'/>
                                    <p>stukko - внутренняя сторона панели</p>
                                    </div>
                                </div>
                                <h4>ВАРИАНТЫ ИСПОЛНЕНИЯ ЩИТОВ</h4>
                                <div className='shield'>
                                    <div>
                                        <img src={wicketStandart} alt='Прямоугольный щит с заполнением из сэндвич-панелей'/>
                                        <p>Прямоугольный щит с заполнением из сэндвич-панелей</p>
                                    </div>
                                    <div>
                                        <img src={wicketGrid} alt='Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка'/>
                                        <p>Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка</p>
                                    </div>
                                    <div>
                                        <img src={wicketRound} alt='Арочный щит с заполнением из сэндвич-панелей + алюминиевая решетка'/>
                                        <p>Арочный щит с заполнением из сэндвич-панелей + алюминиевая решетка</p>
                                    </div>
                                    <div>
                                        <img src={wicketRoundPykes} alt='Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка + пики (арка'/>
                                        <p>Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка + пики (арка)</p>
                                    </div>
                                    <div>
                                        <img src={wicketPykes} alt='Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка с вензелями + пики'/>
                                        <p>Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка с вензелями + пики</p>
                                    </div>
                                    <div>
                                        <img src={wicketRoundPykesVenzel} alt='Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка с вензелями + пики (арка)'/>
                                        <p>Прямоугольный щит с заполнением из сэндвич-панелей + алюминиевая решетка с вензелями + пики (арка)</p>
                                    </div>
                                </div>
                                <h4>Алюминиевая облицовка PREMIUM CLASSIC</h4>
                                <div className='premium'>
                                    <div>
                                        <img src={b1} alt='Premium Classic B1, темный орех'/>
                                        <p>Premium Classic B1, темный орех</p>
                                    </div>
                                    <div>
                                        <img src={b2} alt='Premium Classic B2, темный орех'/>
                                        <p>Premium Classic B2, темный орех</p>
                                    </div>
                                    <div>
                                        <img src={hiTech} alt='Premium Hi-Tech B3'/>
                                        <p>Premium Hi-Tech B3</p>
                                    </div>
                                </div>
                                <div className='color'>   
                                    <img src={whiteColor} alt='белый'/>
                                    <img src={silver} alt='серебристый'/>
                                    <img src={greyColor} alt='серый'/>
                                    <img src={beige} alt='бежевый'/>
                                    <img src={green} alt='зеленый'/>
                                    <img src={blue} alt='синий'/>
                                    <img src={antracit} alt='антрацит'/>
                                    <img src={redColor} alt='красный'/>
                                    <img src={bordo} alt='бордовый'/>
                                    <img src={brownRed} alt='коричнево-красный'/>
                                    <img src={brownColor} alt='коричневый'/>
                                    <img src={venge} alt='венге'/>
                                    <img src={golden} alt='золотой дуб'/>
                                    <img src={other} alt='нестандартный цвет'/>
                                </div>
                                <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='baseWrapper'>
                                    <div className='base'>
                                        <img src={wicketStandart} alt='Створка калитки из сэндвич-панелей толщиной 40 мм, окантованная алюминиевыми профилями'/>
                                        <p>Створка калитки из сэндвич-панелей толщиной 40 мм, окантованная алюминиевыми профилями</p>
                                    </div>
                                    <div className='base'>
                                        <img src={doorhanRails} alt='Комплект навесных алюминиевых или стальных столбов для крепления створки к проему'/>
                                        <p>Комплект навесных алюминиевых или стальных столбов для крепления створки к проему</p>
                                    </div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={wicketLock} alt='Замок механический врезной с ручками черного цвета'/>
                                        <p>Замок механический врезной с ручками черного цвета</p>
                                    </div>
                                    <div>
                                        <img src={nuova} alt='Замок врезной электромеханический NUOVA FEB'/>
                                        <p>Замок врезной электромеханический NUOVA FEB</p>
                                    </div>
                                    <div>
                                        <img src={dhLock} alt='Замок накладной электромеханический DH-LOCK'/>
                                        <p>Замок накладной электромеханический DH-LOCK</p>
                                    </div>
                                    <div>
                                        <img src={doorhanHand} alt='Ручка алюминиевая Delta (если выбран электромеханический замок, то ручка идет в комплекте с замком)'/>
                                        <p>Ручка алюминиевая Delta (если выбран электромеханический замок, то ручка идет в комплекте с замком)</p>
                                    </div>
                                    <div>
                                        <img src={pillar} alt='Столбы'/>
                                        <p>Бетонируемые столбы из трубы 100 х 100 х 4</p>
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