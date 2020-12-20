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
                            <button onClick={() => setActiveTab(2)}>dorhan</button>
                            <button onClick={() => setActiveTab(3)}>hermann</button>
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