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
                            <button onClick={() => setActiveTab(2)}>dorhan</button>
                            <button onClick={() => setActiveTab(3)}>hermann</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                <img src={title_sliding} alt='откатные ворота'/>
                                При открытии откатных ворот створка смещается вдоль забора и не занимает территорию въезда. Поэтому такие конструкции подходят даже для небольших участков.

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