import React, {useState} from 'react';
import './doubleLeaf.scss';
import SideMenu from '../../../sideMenu/SideMenu';
import colors from '../../../../images/double-leaf/colors.png';
import rasp_goriz from '../../../../images/double-leaf/rasp_goriz.jpg';
import avtocontrol from '../../../../images/double-leaf/avtocontrol.jpg';
import hand_open from '../../../../images/double-leaf/hand_open.jpg';
import rollet_goriz from '../../../../images/double-leaf/rollet_goriz.png';
import rollet_vert from '../../../../images/double-leaf/rollet_vert.png';
import alum_vert from '../../../../images/double-leaf/alum_vert.png';
import alum_goriz from '../../../../images/double-leaf/alum_goriz.png';
import sandwich_vert from '../../../../images/double-leaf/sandwich_vert.png';
import sandwich_goriz from '../../../../images/double-leaf/sandwich_goriz.png';
import combo from '../../../../images/double-leaf/combo.png';
import montage from '../../../../images/double-leaf/montage.jpg';
import deg45 from '../../../../images/double-leaf/45deg.png';
import red_girl from '../../../../images/double-leaf/red_girl.jpg';

import titleDoorhan from '../../../../images/doorhan/title_doorhan.jpg';
import panel from '../../../../images/doorhan/panel.jpeg';
import board from '../../../../images/doorhan/board.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import wood from '../../../../images/doorhan/wood.jpeg';
import stukko from '../../../../images/doorhan/stukko.jpeg';
import doubleShield from '../../../../images/doorhan/doubleShield.jpg';
import doubleShieldGrid from '../../../../images/doorhan/doubleShieldGrid.jpg';
import doubleShieldRoundPykes from '../../../../images/doorhan/doubleShieldRoundPykes.jpg';
import doubleShieldPykes from '../../../../images/doorhan/doubleShieldPykes.jpg';
import doubleShieldRoundPykesVenzel from '../../../../images/doorhan/doubleShield.jpg';
import doubleShieldRound from '../../../../images/doorhan/doubleShieldRound.jpg';
import premiumB1 from '../../../../images/doorhan/premium.jpg';
import premiumB2 from '../../../../images/doorhan/premium2.jpg';
import premiumHiTech from '../../../../images/doorhan/premium-hi.jpg';
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
import doorhanHand from '../../../../images/doorhan/doorhanHand.jpg';
import doorhanlock from '../../../../images/doorhan/doubleleafLock.jpg';
import doorhanRails from '../../../../images/doorhan/doorhanRails.jpg';
import swing2500 from '../../../../images/doorhan/Swing2500.jpg';
import pillar from '../../../../images/doorhan/pillar.jpg';
import transmitter from '../../../../images/doorhan/transmitter.jpg';
import lamp from '../../../../images/doorhan/lamp.jpg';
import photocell from '../../../../images/doorhan/photocell.jpg';
import police from '../../../../images/doorhan/police.jpg';
import key from '../../../../images/doorhan/key.jpg';


export default function DoubleLeaf() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='doubleLeaf'>
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
                                <img src={rasp_goriz} alt='Распашные ворота'/>
                                <p>Распашные ворота позволяют экономить площади возле забора - идеальное решение для установки на участке, где вдоль периметра забора посажены деревья, кустарники или установлена беседка.</p>


                                <h3>преимущества</h3>
                                <div className='plusWrapper'>
                            
                                    <div><img src={red_girl} alt='преимущества распашных ворот'/></div>
                                    <p>Все основные элементы конструкции распашных ворот для дачи изготавливаются из алюминиевого профиля с полимерным покрытием, что надежно защищает полотно ворот от неблагоприятного воздействия атмосферы, исключает коррозию и увеличивает срок эксплуатации изделий.</p>
                                    <div><img src={deg45} alt='преимущества распашных ворот'/> </div>
                                    <p>Профили рамы обрабатываются под углом 45˚. При сборке угловых соединений используется кнопочный стягивающий уголок и алюминиевый угловой соединитель. Все это обеспечивает высокую надежность соединения и исключает возможное провисание створок в процессе эксплуатации распашных ворот.</p>
                                    <div> <img src={montage} alt='преимущества распашных ворот'/> </div>
                                    <p>Скрытый крепеж гарантирует высокую степень защиты от несанкционированного доступа.</p>

                                </div>


                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                        <h4>алюминиевый профиль</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={alum_goriz} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={alum_vert} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>сендвич-панель</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={sandwich_goriz} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={sandwich_vert} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>роллетный профиль</h4>
                                        <p>горизонтальное исполнение</p>
                                        <img src={rollet_goriz} alt='горизонтальное исполнение'/>
                                        <p>вертикальное исполнение</p>
                                        <img src={rollet_vert} alt='вертикальное исполнение'/>
                                    </div>
                                    <div>
                                        <h4>комбинированное исполнение</h4>
                                        <p>вертикальное исполнение</p>
                                        <img src={combo} alt='горизонтальное исполнение'/>
                                    </div>

                                </div>

                                <h3>цветовые решения</h3>
                                <img src={colors} alt='цвета'/>

                                <div className='doubleleafDescription'>
                                <p> <i class="fas fa-award"></i>Сэндвич-панель «АЛЮТЕХ» – одна из самых прочных панелей в Европе. Ее толщина 45 мм, что определяет устойчивость въездных ворот и калиток к ветровым и ударным нагрузкам.</p>
                                <p> <i class="fas fa-award"></i>Каждая сэндвич-панель снабжена полимерным EPDM-уплотнителем, сохраняющим высокую механическую прочность и эластичность при низких температурах. Уплотнитель исключает появление зазоров между панелями.</p>
                                <p> <i class="fas fa-award"></i>По всему периметру заполнения между штапиком и сэндвич-панелью устанавливается резиновый уплотнитель FRK12 на основе полимерного каучука.</p>
                                </div>

                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <div><img src={avtocontrol} alt='автоматическое управление'/></div>
                                    <p><strong>Автоматическое управление</strong> - комфорт в использовании и минимум 15 лет работы привода.</p>
                                    <div><img src={hand_open} alt='ручное управление'/></div>
                                    <p><strong>Ручное управление</strong> - в распашных воротах серии Prestige предусмотрена возможность открытия ворот вручную при помощи ручки.</p>

                                </div>


                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h2>РАСПАШНЫЕ ВОРОТА В АЛЮМИНИЕВОЙ РАМЕ С ЗАПОЛНЕНИЕМ СЭНДВИЧ-ПАНЕЛЯМИ SWG-A</h2>
                                <img src={titleDoorhan} alt='распашные ворота Дорхан'/>
                                <h4>ХАРАКТЕРИСТИКИ:</h4>
                                <div className='characteristics'>
                                    <p>Высота проема, мм</p>
                                    <p>от 1 000мм до 3 000мм</p>
                                    <p>Ширина проема, мм</p>
                                    <p>от 2 000мм до 5 000мм</p>
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
                                        <img src={doubleShield} alt='Щит с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={doubleShieldGrid} alt='Щит c решеткой с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит решетчатый с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={doubleShieldPykes} alt='Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={doubleShieldRoundPykesVenzel} alt='Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит с пиками и вензелями с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={doubleShieldRoundPykes} alt='Щит арочный с пиками с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит арочный с пиками с вертикальным расположением сэндвич-панелей.</p>
                                    </div>
                                    <div>
                                        <img src={doubleShieldRound} alt='Щит арочный с решеткой с вертикальным расположением сэндвич-панелей'/>
                                        <p>Щит арочный с решеткой с вертикальным расположением сэндвич-панелей.</p>
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
                                <h4>ЦВЕТА:</h4>
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
                                        <img src={doubleShield} alt='Щит ворот (2 створки) из сэндвич-панелей толщиной 40 мм наполненных пенополиуретаном, окантованный алюминиевым профилем'/>
                                        <p>Щит ворот (2 створки) из сэндвич-панелей толщиной 40 мм наполненных пенополиуретаном, окантованный алюминиевым профилем.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={doorhanHand} alt='Ручка алюминиевая, соответствующая цвету окантовки'/>
                                        <p>Ручка алюминиевая, соответствующая цвету окантовки.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={doorhanlock} alt='Задвижка в землю'/>
                                        <p>Задвижка в землю.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={doorhanRails} alt='Комплект алюминиевых столбов для крепления к проему'/>
                                        <p>Комплект алюминиевых столбов для крепления к проему.</p>
                                    </div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={swing2500} alt='Электропривод'/>
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
                                    <div>
                                        <img src={pillar} alt='Столб бетонируемый 100 × 100 × 4'/>
                                        <p>Столб бетонируемый 100 × 100 × 4</p>
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