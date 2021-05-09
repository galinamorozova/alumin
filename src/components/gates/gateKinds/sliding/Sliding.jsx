import React, {useState} from 'react';
import './sliding.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import title_sliding from '../../../../images/sliding/title_sliding.jpg';
import colors from '../../../../images/double-leaf/colors.png';
import deg45_sliding from '../../../../images/sliding/45deg_sliding.png';
import chassis from '../../../../images/sliding/chassis.png';
import rolik from '../../../../images/sliding/rolik.png';
import plus from '../../../../images/sliding/plus.jpg';
import avto_control_sliding from '../../../../images/sliding/avto_control_sliding.png';
import hand_opening from '../../../../images/sliding/hand_opening.jpg';
import combo_s from '../../../../images/sliding/combo_s.png';
import alum_gor_slid from '../../../../images/sliding/alum_gor_slid.png';
import alum_vert_slid from '../../../../images/sliding/alum_vert_slid.png';
import rollet_gor_slid from '../../../../images/sliding/rollet_gor_slid.png';
import rollet_vert_slid from '../../../../images/sliding/rollet_vert_slid.png';
import sand_gor_slid from '../../../../images/sliding/sand_gor_slid.png';
import sand_vert_slid from '../../../../images/sliding/sand_vert_slid.png';
import complect from '../../../../images/sliding/complect.png';

import doorhanTitle from '../../../../images/doorhan/title_sliding.jpg';
import panel from '../../../../images/doorhan/panel.jpeg';
import board from '../../../../images/doorhan/board.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import standartShield from '../../../../images/doorhan/shieldStandart.jpg';
import gridShield from '../../../../images/doorhan/gridShield.jpg';
import gridShieldPykes from '../../../../images/doorhan/gridShieldPykes.jpg';
import shieldRoundPykes from '../../../../images/doorhan/shieldRoundPykes.jpg';
import shieldRound from '../../../../images/doorhan/roundShield.jpg';
import shieldRoundOpen from '../../../../images/doorhan/shieldRoundOpen.jpg';
import premiumB1 from '../../../../images/doorhan/premium.jpg';
import premiumB2 from '../../../../images/doorhan/premium2.jpg';
import premiumHiTech from '../../../../images/doorhan/premium-hi.jpg';
import catcher from '../../../../images/doorhan/catcher.jpg';
import rail from '../../../../images/doorhan/rail.jpg';
import roller from '../../../../images/doorhan/rolik.jpg';
import venge from '../../../../images/doorhan/venge.png';
import golden from '../../../../images/doorhan/golden.png';
import wood from '../../../../images/doorhan/wood.jpeg';
import stukko from '../../../../images/doorhan/stukko.jpeg';
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
import sliding from '../../../../images/doorhan/sliding1300.jpg';
import transmitter from '../../../../images/doorhan/transmitter.jpg';
import lamp from '../../../../images/doorhan/lamp.jpg';
import photocell from '../../../../images/doorhan/photocell.jpg';
import police from '../../../../images/doorhan/police.jpg';
import key from '../../../../images/doorhan/key.jpg';
import base from '../../../../images/doorhan/base.jpg';


export default function Sliding() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='slidingGates'>
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
                                <img src={title_sliding} alt='откатные ворота'/>
                                <p>При открытии откатных ворот створка смещается вдоль забора и не занимает территорию въезда. Поэтому такие конструкции подходят даже для небольших участков.</p>

                                <h3>преимущества</h3>
                                <div className='plusWrapper'>
                            
                                    <div><img src={plus} alt='преимущества откатных ворот'/></div>
                                    <p>Все основные элементы конструкции откатных ворот изготавливаются из алюминиевого профиля с полимерным покрытием, которое надежно защищает полотно ворот от неблагоприятного воздействия атмосферы, исключает коррозию и увеличивает срок эксплуатации изделий.</p>
                                    <div><img src={chassis} alt='преимущества откатных ворот'/> </div>
                                    <p>Профиль шины и рамы выполняется единым элементом без использования сварки, что увеличивает жесткость конструкции и исключает перекосы, винтообразность направляющей шины и продлевает срок службы ворот.</p>
                                    <div> <img src={deg45_sliding} alt='преимущества откатных ворот'/> </div>
                                    <p><strong>Угловой соединитель</strong> предназначен для соединения профильной системы рамы откатных ворот Prestige.</p>
                                    <div> <img src={rolik} alt='преимущества откатных ворот'/> </div>
                                    <p><strong>Роликовые опоры</strong> предназначен для соединения профильной системы рамы откатных ворот Prestige.</p>

                                </div>

                                <h2>Набор комплектующих для откатных ворот</h2>
                                <div className='complectWrapper'>
                                    <div><img src={complect} alt='комплект для откатных ворот'/></div>
                                    <div>
                                    <p>Если у Вас <span>уже есть ворота</span>, которые нужно транформировать в откатные.</p>
                                    <p>Если Ваши ворота изготовляются по индивидуальному дизайну из специальных, подходящих только для Вас материалов, и Вам <span>нужна лишь система откатной автоматики</span>.</p>
                                    <p>Если Вы ищите способ <span>разумной экономии</span>.</p>
                                    </div>
                                </div>
                                

                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                        <h4>алюминиевый профиль</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={alum_gor_slid} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={alum_vert_slid} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>сендвич-панель</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={sand_gor_slid} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={sand_vert_slid} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>роллетный профиль</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={rollet_gor_slid} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={rollet_vert_slid} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>комбинированное исполнение</h4>
                                        <p>вертикальное исполнение</p>
                                        <img src={combo_s} alt='горизонтальное исполнение'/>
                                    </div>

                                </div>

                                <h3>цветовые решения</h3>
                                <img src={colors} alt='цвета'/>

                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <div><img src={avto_control_sliding} alt='автоматическое управление'/></div>
                                    <p><strong>Автоматическое управление</strong> - комфорт в использовании и минимум 15 лет работы привода.</p>
                                    <div><img src={hand_opening} alt='ручное управление'/></div>
                                    <p><strong>Ручное управление</strong> - распашных воротах серии Prestige предусмотрена возможность открытия ворот вручную при помощи ручки.</p>

                                </div>


                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h2>Откатные ворота в алюминиевой раме с заполнением сэндвич-панелями SLG-A</h2>
                                <img src={doorhanTitle} alt='откатные ворота Дорхан'/>
                                <h4>ХАРАКТЕРИСТИКИ:</h4>
                                <div className='characteristics'>
                                    <p>Высота проема, мм</p>
                                    <p>от 1 000мм до 3 200мм</p>
                                    <p>Ширина проема, мм</p>
                                    <p>от 2 000мм до 7 500мм</p>
                                    <p>Просвет, мм</p>
                                    <p>100мм</p>
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
                                        <img src={standartShield} alt='Щит с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={gridShield} alt='Щит c решеткой с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит c решеткой с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={gridShieldPykes} alt='Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={shieldRoundOpen} alt='Щит арочный с пиками с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит арочный с пиками с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={shieldRound} alt='Щит арочный с решеткой с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит арочный с решеткой с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={shieldRoundPykes} alt='Щит арочный с пиками и вензелями с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит арочный с пиками и вензелями с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                </div>
                                <h4>Алюминиевая облицовка PREMIUM CLASSIC</h4>
                                <div className='premium'>
                                    <div>
                                        <img src={premiumB1} alt='Premium Classic B1, темный орех'/>
                                        <p>Premium Classic B1, темный орех</p>
                                    </div>
                                    <div>
                                        <img src={premiumB2} alt='Premium Classic B2, темный орех'/>
                                        <p>Premium Classic B2, темный орех</p>
                                    </div>
                                    <div>
                                        <img src={premiumHiTech} alt='Premium Hi-Tech B3'/>
                                        <p>Premium Hi-Tech B3</p>
                                    </div>
                                </div>
                                <h4>ЦВЕТА ЛИЦЕВЫХ ПОВЕРХНОСТЕЙ</h4>  
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
                                </div>
                                <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='baseWrapper'>
                                    <div className='base'>
                                        <img src={standartShield} alt='Полотно из сэндвич-панелей толщиной 40 мм'/>
                                        <p>Полотно из сэндвич-панелей толщиной 40 мм</p>
                                    </div>
                                    <div className='base'>
                                        <img src={catcher} alt='Комплект ловителей'/>
                                        <p>Комплект ловителей</p>
                                    </div>
                                    <div className='base'>
                                        <img src={rail} alt='Устройство направляющее'/>
                                        <p>Устройство направляющее</p>
                                    </div>
                                    <div className='base'>
                                        <img src={roller} alt='Крышки для балки'/>
                                        <p>Крышки для балки</p>
                                    </div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={base} alt='Комплект силовой рамы'/>
                                        <p>Комплект силовой рамы (предназначен для крепления автоматики и элементов подвеса полотна ворот)</p>
                                    </div>
                                    <div>
                                        <img src={sliding} alt='Электропривод'/>
                                        <p>Электропривод (позволяет автоматизировать открытие/закрытие сдвижных ворот)</p>
                                    </div>
                                    <div>
                                        <img src={police} alt='Лежачий полицейский'/>
                                        <p>«Лежачий полицейский» (обеспечивает легкость прокладки электропроводки между столбами — без штробления дорожного покрытия; изготавливается из износостойкого искусственного каучука)</p>
                                    </div>
                                    <div>
                                        <img src={photocell} alt='Фотоэлементы безопасности'/>
                                        <p>Фотоэлементы безопасности (предназначены для обнаружения людей, животных и посторонних предметов в проеме ворот при движении полотна для исключения травматизма)</p>
                                    </div>
                                    <div>
                                        <img src={lamp} alt='Сигнальная лампа'/>
                                        <p>Сигнальная лампа (сигнализирует о движении ворот в течение всего цикла открытия и закрытия)</p>
                                    </div>
                                    <div>
                                        <img src={transmitter} alt='Дистанционное управление'/>
                                        <p>Дистанционное управление (современный дизайн, небольшие размеры пультов)</p>
                                    </div>
                                    <div>
                                        <img src={key} alt='Ключ-кнопка'/>
                                        <p>Ключ-кнопка (защита ключом, компактный корпус, надежный механизм, механическая блокировка)</p>
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