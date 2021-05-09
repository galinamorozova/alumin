import React from 'react';
import './picket.scss';
import SideMenu from '../../sideMenu/SideMenu';

import picketTitle from '../../../images/fence/picketTitle.jpg';
import picketPluses from '../../../images/fence/picketPluses.jpg';
import picketPluses2 from '../../../images/fence/picketPluses2.jpg';
import round from '../../../images/fence/round.jpg';
import roundFigure from '../../../images/fence/roundfigure.jpg';
import mShape from '../../../images/fence/m.jpg';
import mShape2 from '../../../images/fence/m2.jpg';
import pShape from '../../../images/fence/p.jpg';
import pShape2 from '../../../images/fence/p2.jpg';
import halfRoundSlim from '../../../images/fence/halfroundSlim.jpg';
import halfRoundSlimFigure from '../../../images/fence/halfroundSlimFigure.jpg';
import halfround from '../../../images/fence/halfround.jpg';
import square from '../../../images/fence/square.jpg';
import square2 from '../../../images/fence/square2.jpg';
import squareFigure from '../../../images/fence/squareFigure.jpg';
import round2 from '../../../images/fence/round2.jpg';
import twin from '../../../images/fence/twin.jpg';
import twinFigure from '../../../images/fence/twinFigure.jpg';
import ral1015 from '../../../images/fence/1015.png';
import ral6005 from '../../../images/fence/6005.png';
import ral5005 from '../../../images/fence/5005.png';
import ral3005 from '../../../images/fence/3005.png';
import ral7024 from '../../../images/fence/7024.png';
import ral9005 from '../../../images/fence/9005.png';
import rr32 from '../../../images/fence/RR32.png';
import honeywood from '../../../images/fence/honeywood.png';
import chokowood from '../../../images/fence/chokowood.png';



export default function Picket() { 
    return( 
        <section className='picket'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='content'>
                            <h3>Заборы из металичесткого штакетника</h3>
                            <img src={picketTitle} alt='заборы из евроштакетника'/>
                            <div className='plusesPicket'>
                                <div>
                                    <img src={picketPluses} alt=''/>
                                    <img src={picketPluses2} alt=''/>
                                </div>
                                <ul>
                                    <li>Металлический штакетник — это тип ограждения, состоящий из металлических панелей шириной 100 - 128 мм и имеющих различные варианты профиля.</li>
                                    <li>Изготавливается из оцинкованной стали с полимерным покрытием. Наличие цинка и полимерного покрытия обеспечивают защиту металла от агрессивного воздействия внешней среды.</li>
                                    <li>Заказать можно во всех покрытиях, наиболее часто используется сталь толщиной 0,4, 0,45 и 0,5 мм.</li>
                                    <li>Срок службы - за счет толщины стали и использования алюцинка (сплав цинка и алюминия для наибольшей защиты стали) и защитного полимерного покрытия такой забор прослужит долгие годы.</li>
                                    <li>Очень просто в установке. Для этого не требуется никакого специального оборудования, возможен самостоятельный монтаж.</li>
                                    <li>Не обладает парусностью, в отличие от ограждений из профнастила. При этом продувается.</li>
                                    <li>Возможны различные варианты монтажа: в один ряд, в два и даже горизонтально.</li>
                                    <li>Для монтажа необходимо использовать столбы, которые бетонируются через каждые 2 м. Так же потребуются лаги, на которые закрепляются элементы забора с помощью саморезов. В среднем на 1 погонный метр требуется 6 шт. планок прямоугольной и круглой формы и 7 шт. планок М- и П- образной формы.</li>
                                    <li>Панели различной высоты для вашего будущего забора - от 500 мм до 3500 мм.</li>
                                </ul>
                            </div>
                            <h3>ВИДЫ ШТАКЕТНИКА</h3>
                            <div className='picketKinds'>
                                <div>
                                    <div className='picketView'>
                                        <img src={round2} alt='вид евроштакетника'/>
                                        <img src={round} alt='вид евроштакетника'/>
                                    </div>
                                    <p>1. Круглый</p>
                                </div>
                                <div>
                                    <div className='picketView'>
                                        <img src={square} alt='вид евроштакетника'/>
                                        <img src={square2} alt='вид евроштакетника'/>
                                    </div>
                                    <p>2. Прямоугольный</p>
                                </div>
                                <div>
                                    <img src={roundFigure} alt='вид евроштакетника'/>
                                    <p>3. Круглый фигурный</p>
                                </div>
                                <div>
                                    <img src={squareFigure} alt='вид евроштакетника'/>
                                    <p>4. Прямоугольный фигурный</p>
                                </div>
                                <div>
                                    <div className='picketView'>
                                        <img src={pShape} alt='вид евроштакетника'/>
                                        <img src={pShape2} alt='вид евроштакетника'/>
                                    </div>
                                    <p>5. П-образный / фигурный</p>
                                </div>
                                <div>
                                    <div className='picketView'>
                                        <img src={mShape} alt='вид евроштакетника'/>
                                        <img src={mShape2} alt='вид евроштакетника'/>
                                    </div>
                                    <p>6. М-образный / фигурный</p>
                                </div>
                                <div>
                                    <div className='picketView'>
                                        <img src={halfRoundSlim} alt='вид евроштакетника'/>
                                        <img src={halfRoundSlimFigure} alt='вид евроштакетника'/>
                                    </div>
                                    <p>7. Полукруглый Slim / Полукруглый Slim фигурный</p>
                                </div>
                                <div>
                                    <div className='picketView'>
                                        <img src={twin} alt='вид евроштакетника'/>
                                        <img src={twinFigure} alt='вид евроштакетника'/>
                                    </div>
                                    <p>8. Twin /Twin фигурный</p>
                                </div>
                                <div>
                                    <img src={halfround} alt='вид евроштакетника'/>
                                    <p>9. Полукруглый фигурный</p>
                                </div>
                            </div>
                            <h3>ОСНОВНЫЕ ЦВЕТА:</h3>
                                <div className='picketColor'>
                                    <div>
                                        <img src={ral1015} alt='цвета'/>
                                        <p>RAL 1015</p>
                                    </div>
                                    <div>
                                        <img src={ral3005} alt='цвета'/>
                                        <p>RAL 3005</p>
                                    </div>
                                    <div>
                                        <img src={ral5005} alt='цвета'/>
                                        <p>RAL 5005</p>
                                    </div>
                                    <div>
                                        <img src={ral6005} alt='цвета'/>
                                        <p>RAL 6005</p>
                                    </div>
                                    <div>
                                        <img src={ral7024} alt='цвета'/>
                                        <p>RAL 7024</p>
                                    </div>
                                    <div>
                                        <img src={ral9005} alt='цвета'/>
                                        <p>RAL 9005</p>
                                    </div>
                                    <div>
                                        <img src={rr32} alt='цвета'/>
                                        <p>RR32</p>
                                    </div>
                                    <div>
                                        <img src={honeywood} alt='цвета'/>
                                        <p>Honey Wood</p>
                                    </div>
                                    <div>
                                        <img src={chokowood} alt='цвета'/>
                                        <p>Choco Wood</p>
                                    </div>
                                </div>
                                <p>ВОЗМОЖНО ОКРАШИВАНИЕ И В ДРУГИЕ ЦВЕТА. Все подробности - у менеджеров.</p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
};