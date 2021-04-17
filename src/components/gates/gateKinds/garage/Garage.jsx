import React, {useState} from 'react';
import './garage.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import trend from '../../../../images/trend.jpg';
import prestige from '../../../../images/45mm.jpg';
import sgofr from '../../../../images/s-gofr.jpg';
import mgofr from '../../../../images/m-gofr.jpg';
import lgofr from '../../../../images/l-gofr.jpg';
import microwave from '../../../../images/microwave.jpg';
import filenka from '../../../../images/filenka.jpg';
import color1 from '../../../../images/color1.png';
import color2 from '../../../../images/color2.png';
import color3 from '../../../../images/color3.png';
import color4 from '../../../../images/color4.png';
import color5 from '../../../../images/color5.png';
import darkOak from '../../../../images/darkOak.png';
import cherry from '../../../../images/cherry.png';
import goldenOak from '../../../../images/goldenOak.png';
import panelColor from '../../../../images/panel_color.png';
import standartDoorstep from '../../../../images/standart_doorstep.png';
import lowDoorstep from '../../../../images/low_doorstep.png';
import flatDoorstep from '../../../../images/flat_doorstep.png';
import windows1 from '../../../../images/windows1.png';
import windows2 from '../../../../images/windows2.png';
import windows3 from '../../../../images/windows3.png';
import windows4 from '../../../../images/windows4.png';
import door1 from '../../../../images/door1.png';
import door2 from '../../../../images/door2.png';
import door3 from '../../../../images/door3.png';
import door4 from '../../../../images/kalitka_fasad.jpg';
import unblocking from '../../../../images/unblocking.png';
import lock from '../../../../images/lock.png';
import techCharacteristics1 from '../../../../images/techCharacteristics1.png';
import techCharacteristics2 from '../../../../images/techCharacteristics2.png';


import RSD01 from '../../../../images/doorhan/RSD01.jpeg';
import RSD02 from '../../../../images/doorhan/RSD02.jpeg';
import board from '../../../../images/doorhan/board.jpeg';
import lock1 from '../../../../images/doorhan/lock1.jpeg';
import lockRSD from '../../../../images/doorhan/lockRSD.jpeg';
import panel from '../../../../images/doorhan/panel.jpeg';
import wavePanel from '../../../../images/doorhan/wave-panel.jpeg';
import widePanel from '../../../../images/doorhan/wide-panel.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import corosion from '../../../../images/doorhan/corosion.jpeg';
import doorLeaf from '../../../../images/doorhan/door-leaf.jpeg';
import handle from '../../../../images/doorhan/handle.jpeg';
import rail from '../../../../images/doorhan/rail.jpeg';
import spring from '../../../../images/doorhan/springRSD.jpeg';
import ropeProtection from '../../../../images/doorhan/rope-protection.jpeg';
import springProtection from '../../../../images/doorhan/spring-protection.jpeg';
import torsion from '../../../../images/doorhan/torsion.jpeg';
import wood from '../../../../images/doorhan/wood.jpeg';
import stukko from '../../../../images/doorhan/stukko.jpeg';
import window1 from '../../../../images/doorhan/window1.jpeg';
import window2 from '../../../../images/doorhan/window2.jpeg';
import window3 from '../../../../images/doorhan/window3.jpeg';
import window4 from '../../../../images/doorhan/window4.jpeg';
import whiteColor from '../../../../images/doorhan/9003.png';
import venge from '../../../../images/doorhan/venge.png';
import other from '../../../../images/doorhan/other.png';
import goldenColor from '../../../../images/doorhan/golden.png';
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

import tittle from '../../../../images/hoermann/tittle.jpg'
import white from '../../../../images/hoermann/white.png';
import grey from '../../../../images/hoermann/grey.png';
import brown from '../../../../images/hoermann/brown.png';
import golden from '../../../../images/hoermann/golden.png';
import dark from '../../../../images/hoermann/dark.png';
import night from '../../../../images/hoermann/night.png';
import renomatic from '../../../../images/hoermann/renomatic.jpg';
import remote from '../../../../images/hoermann/remote.png';
import prolift from '../../../../images/hoermann/prolift.png';
import promatic from '../../../../images/hoermann/promatic.png';
import supra from '../../../../images/hoermann/supra.png';

export default function Garage() {

    const [activeTab, setActiveTab] = useState(1);
  
    
    return( 
        <section className='garageGates'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>doorhan</button>
                            <button onClick={() => setActiveTab(3)}>hoermann</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>
                                
                                
                                <div className='characteristicWrapper'>
                                    <div>
                                        <h3>Гаражные ворота серии TREND</h3>
                                        <p> Гаражные ворота серии Trend выпускают с лакокрасочным покрытием угловых стоек, в нижней части которых предусмотрели полимерное основание для защиты от осадков, талых вод. Ворота Trend часто монтируют в проемы больше заказанного размера (в пределах 100 мм по ширине и 50 мм по высоте): достаточно выдвинуть угловые стойки и нащельник в проем.</p>
                                        <ul>
                                            <li>Панели толщиной 40 мм</li>
                                            <li>Комплектующие из оцинкованной стали</li>
                                            <li>Возможность выдвижения рамы в проем</li>
                                            <li>До 25 000 циклов «подъема-опускания»</li>
                                            <li>Любой размер с шагом 5 мм</li>
                                            <li>Храповые муфты, страхующие от падения воротного полотна</li>
                                            <li>Замкнутый контур стальных листов и 4 слоя металла в местах крепления саморезов, исключающее расслоение панелей на солнце</li>
                                            <li>5 рисунков панелей</li>
                                            <li>До 10 базовых цветов RAL и 3 цветов «под дерево»</li>
                                        </ul>
                                        <img src={trend} alt='толщина полотна TREND'></img>
                                    </div>
                                    <div>
                                        <h3>Гаражные ворота серии PRESTIGE</h3>
                                        <p>Prestige – улучшенная термоизоляция, повышенная прочность, устойчивость к коррозии. Рекомендовано для <em>отапливаемых помещений</em>, для помещений с <em>повышенной влажностью</em> (мойки и т.п.), для регионов с <em>холодным климатом</em>.</p>
                                        <ul>
                                            <li>Панели толщиной 45 мм</li>
                                            <li>Двойные ролики </li>
                                            <li>Комплектующие из нержавеющей стали</li>
                                            <li>До 25 000 циклов «подъема-опускания»</li>
                                            <li>Любой размер с шагом 5 мм</li>
                                            <li>Клик-система крепления торсионного вала</li>
                                            <li>Храповые муфты, страхующие от падения воротного полотна</li>
                                            <li>Замкнутый контур стальных листов и 4 слоя металла в местах крепления саморезов, исключающее расслоение панелей на солнце</li>
                                            <li>5 рисунков панелей</li>
                                            <li>До 10 базовых цветов RAL и 3 цветов «под дерево»</li>
                                            <li>Нанесение индивидуальных рисунков любой сложности на полотно ворот</li>
                                        </ul>
                                        <img src={prestige} alt='толщина полотна PRESTIGE'></img>
                                    </div>
                                </div>
                                <h4>ВОРОТНОЕ ПОЛОТНО отличного качества на долгие годы</h4>
                                <ul>
                                    <li>
                                    <h5>Замкнутый контур стальных листов</h5>
                                    Специальная система соединения внутреннего и лицевого стальных листов защищает панель от расслоения, которое возможно при нагреве панели на солнце. Их соединяют внизу и вверху в 4 слоя при помощи саморезов. Так, покупатели ворот с темным цветом полотна могут быть уверены в долговечности изделия.</li>
                                    <li>
                                    <h5>Защита от защемления пальцев</h5>
                                    В панели «Алютех» реализовали одну из главных норм европейской безопасности: исключили защемление пальцев (соответствие EN 12604).</li>
                                    <li>
                                    <h5>Отличное сцепление стальных листов с пеной</h5>
                                    Хорошее сцепление стальных листов с пеной получили за счет слоя адгезионного лака (12 мкм). Тем самым конструкторы полностью исключили вздутие нагретого на солнце полотна.</li>
                                    <li>
                                    <h5>Высокие антикоррозийные свойства</h5>
                                    Повышенных антикоррозионных свойств панели удалось достичь за счет грунтовочного слоя (14-16 мкм) и цинкового покрытия (16 мкм).</li>
                                    <li>
                                    <h5>Долговечное покрытие</h5>
                                    Сохранить полотно ворот в первоначальном привлекательном виде получилось благодаря полиуретановой краске с добавлением специальных полиамидных частиц (ПУР-ПА), которые повышают антикоррозийные и защитные свойства панели.</li>
                                    <li>
                                    <h5>Хорошая теплоизоляция</h5>
                                    Хорошая теплоизоляция. 0,74 и 1,0 м² °C/Bт – коэффициент сопротивления теплопередаче в воротах производителя. Такой же величиной обладает стена из красного кирпича в 55 и 60 см соответственно.
                                    </li>
                                </ul>
                                <h4>ВНЕШНИЙ ВИД И ЦВЕТОВАЯ ПАЛИТРА</h4>
                                <h5>Виды рисунков сэндвич-панелей</h5>
                                <div className='panelWrapper'>
                                    <div>
                                        <p>S-гофр</p>
                                        <img src={sgofr} alt='s-гофр'></img> 
                                    </div>
                                    <div>
                                        <p>M-гофр</p>
                                        <img src={mgofr} alt='m-гофр'></img>
                                    </div>
                                    <div>
                                        <p>L-гофр</p>
                                        <img src={lgofr} alt='l-гофр'></img>
                                    </div>
                                    <div>
                                        <p>Микроволна</p>
                                        <img src={microwave} alt='микроволна'></img>
                                    </div>
                                    <div>
                                        <p>Филенка</p>
                                        <img src={filenka} alt='филенка'></img>
                                    </div>
                                </div>
                                <h5>10 стандартных цветов гаражных ворот с рисунком микроволна, S-гофр</h5>
                                <div className='colors'>
                                    <img src={color1} alt='стандартный цвет'/>
                                    <img src={color2} alt='стандартный цвет'/>
                                    <img src={color3} alt='стандартный цвет'/>
                                    <img src={color4} alt='стандартный цвет'/>
                                    <img src={color5} alt='стандартный цвет'/>
                                </div>
                                <h5>Ворота "под дерево"</h5>
                                <div className='woodColor'>
                                    <img src={darkOak} alt='цвет Темный дуб'/>
                                    <img src={cherry} alt='цвет Темная вишня'/>
                                    <img src={goldenOak} alt='цвет Золотой дуб'/>
                                </div>
                                <p>* По желанию заказчика возможно нанесение на полотно ворот индивидуальных рисунков любой степени сложности методом цифровой печати.</p>
                                <div className='panelColor'>
                                    <h5>Палитра базовых цветов и фактур</h5>
                                    <div><img src={panelColor} alt='соотношение базовых цветов и фактур'/></div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ</h4>
                                
                                    <h5>Калитка в полотне</h5>
                                    <p>Этот вид калитки заказывают, если хозяину нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в гараж без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
                                    <p>В ассортименте «АЛЮТЕХ» представлены 3 варианта калиток:</p>
                                    <div className='wicketWrapper'>
                                        <div><img src={standartDoorstep} alt='со стандартным порогом'/></div>
                                        <div>
                                            <p>Со стандартным порогом 145 мм</p>
                                            <p>(для ворот с размерами ширины от 4,5 м до 6 м)</p>
                                            <ul>
                                                <li>- Линейный доводчик;</li>
                                                <li>- Встроенный датчик положения калитки;</li>
                                                <li>- Противодождевой козырек;</li>
                                                <li>- Надежные металлические ручки;</li>
                                                <li>- Специальный ловитель, исключающий провисание створки.</li>
                                            </ul>
                                        </div>
                                        <div><img src={lowDoorstep} alt='с низким порогом'/></div>
                                        <div>
                                            <p>С низким порогом 100 мм</p>
                                            <p>(для ворот с размерами ширины до 4,5 м)</p>
                                            <ul>
                                                <li>- Линейный доводчик;</li>
                                                <li>- Встроенный датчик положения калитки;</li>
                                                <li>- Противодождевой козырек;</li>
                                                <li>- Надежные металлические ручки;</li>
                                                <li>- Специальный ловитель, исключающий провисание створки.</li>
                                            </ul>
                                        </div>
                                        <div><img src={flatDoorstep} alt='с плоским порогом'/></div>
                                        <div>
                                            <p>С плоским порогом 20 мм</p>
                                            <p>(для ворот с размерами ширины до 5 м)</p>
                                            <ul>
                                                <li>- Линейный доводчик;</li>
                                                <li>- Встроенный датчик положения калитки;</li>
                                                <li>- Противодождевой козырек;</li>
                                                <li>- Надежные металлические ручки;</li>
                                                <li>- Специальный ловитель, исключающий провисание створки.</li>
                                            </ul>
                                        </div>
                                    </div>
                               
                                
                                    <h5>Встроеные окна</h5>
                                    <div className='windowsWrapper'>
                                        <img src={windows1} alt='встроеные окна'/>
                                        <img src={windows2} alt='встроеные окна'/>
                                        <img src={windows3} alt='встроеные окна'/>
                                        <img src={windows4} alt='встроеные окна'/>
                                    </div>
                                    <p>Сократить потребление электричества и дать доступ к дневному свету - вот какие задачи решат встроенные окна. Кроме того, такие гаражные ворота запомнят по их необычному оформлению.</p>
                                
                                
                                    <h5>Замок</h5>
                                    <div className='lockWrapper'>
                                        <img src={lock} alt='замок'/>
                                        <p>Для запирания ворот в гараже без дополнительного входа необходим замок. В замке реализована возможность подключения устройства разблокировки электропривода. (При высоком типе монтажа ворот конструкция замка отличается от приведенной на изображении)</p>
                                    </div>
                          
                               
                                    <h5>Боковая дверь</h5>
                                    <div className='doorWrapper'>
                                        <img src={door1} alt='боковая дверь'/>
                                        <img src={door2} alt='боковая дверь'/>
                                        <img src={door3} alt='боковая дверь'/>
                                        <img src={door4} alt='боковая дверь'/>
                                    </div>
                                    <p>Стиль двери по умолчанию делают единым с гаражными воротами. За счет идентичного рисунка и цвета изделие отлично впишется в фасад любого здания. Так, одинаковые цвет и рисунок смотрятся как единое целое.</p>
                                
                                
                                    <h5>Разблокировка автоматики</h5>
                                    <div className='unblockingWrapper'>
                                        <img src={unblocking} alt='разблокировка автоматики'/>
                                        <p>Для автоматизированных ворот необходимо предусмотреть возможность аварийной разблокировки привода снаружи гаража, например, в случае отключения электроэнергии. Удобный и компактный механизм разблокировки обеспечит легкое переключение ворот с автоматического на ручной режим управления.</p>
                                    </div>
                                
                                <div className='techCharacteristics'>
                                    <h4>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h4>
                                    <p>Отличие конструкций подъёмных ворот PRESTIGЕ – в способе балансировки воротного полотна.</p>
                                    <div className='techWrapper'>
                                        <div><img src={techCharacteristics1} alt='C пружинами растяжения'/></div>
                                        <div><img src={techCharacteristics2} alt='C торсионными пружинами'/></div>
                                    </div>
                                    <div className='techTable'>
                                        <p>Система балансировки</p>
                                        <p>Пружины растяжения</p>
                                        <p>Торсионные пружины</p>
                                        <p>Толщина сэндвич-панэли</p>
                                        <p>45мм</p>
                                        <p>45мм</p>
                                        <p>Комплектующие (петли промежуточные и роликовые кронштейны)</p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Ходовые ролики</p>
                                        <p>Сдвоенные ролики с подшипником</p>
                                        <p>Сдвоенные ролики с подшипником</p>
                                        <p>Размеры ворот (max)</p>
                                        <p>Ширина 3500 мм, высота 3085 мм</p>
                                        <p>Ширина 6000 мм, высота 3250 мм</p>
                                        <p>Высота перемычки (min) </p>
                                        <p>100мм - для ворот без электропривода, 125-140мм - для автоматических ворот</p>
                                        <p>100мм - для ворот без электропривода, 125-140мм - для автоматических ворот</p>
                                        <p>Тип монтажа</p>
                                        <p>-</p>
                                        <p>Низкий, стандартный и высокий</p>
                                        <p>Базовый ресурс пружин</p>
                                        <p>25 000 циклов «открытие / закрытие»</p>
                                        <p>25 000 циклов «открытие / закрытие»</p>
                                    </div>
                                </div>



                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>

                                <h3>Секционные алюминиевые ворота RSD01LUX с пружинами растяжения</h3>
                                <div className='RSD01'>
                                    <div><img src={RSD01} alt='Секционные алюминиевые ворота RSD01LUX с пружинами растяжения'/></div>
                                    <ul>
                                        <li>Размеры проема: ширина - от 2 000 до 3 000 мм; Высота - от 2000 до 2 750 мм</li>
                                        <li>За счет низкого типа подъема, данная серия имеет минимальные требования к параметрам проема — может быть установлена в помещениях, имеющих пристенки от 100 мм и притолоку от 110 мм.</li>
                                        <li>Легкая и прочная панель из алюминия обладает высокой коррозионной стойкостью</li>
                                        <li>Конструкция ворот термоэффективна, прочна и проста в монтаже</li>
                                    </ul>
                                </div>

                                <h4>Дизайн панелей</h4>
                                <div className='design'>
                                    <div>
                                    <img src={board} alt='панель снаружи'/>
                                    <p>панель снаружи</p>
                                    </div>
                                    <div>
                                    <img src={stripePanel} alt='панель внутри'/>
                                    <p>панель внутри</p>
                                    </div>
                                </div>


                                <h4>Тип поверхностей</h4>
                                <div className='surface'> 
                                    <div>
                                    <img src={wood} alt='под дерево'/>
                                    <p>под дерево</p>
                                    </div>
                                    <div>
                                    <img src={stukko} alt='stukko'/>
                                    <p>stukko</p>
                                    </div>
                                </div>
                                

                                <h4>Цвета лицевых поверхностей</h4>  
                                <div className='color'>  
                                <div>
                                    <img src={whiteColor} alt='белый'/>
                                    <p>белый</p>
                                </div>
                                <div>
                                    <img src={brownRed} alt='коричнево-красный'/>
                                    <p>коричнево-красный</p>
                                </div>
                                </div>

                                <div className='baseWrapper'>
                                    <h4>Базовая комплектация</h4>
                                    <div className='base'>
                                        <img src={doorLeaf} alt='полотно'/>
                                        <p>Полотно из энергоэффективных алюминиевых сэндвич-панелей толщиной 40 мм и усилением под внутренние петли и боковые опоры.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={rail} alt='направляющие'/>
                                        <p>Направляющие обладают упрощенной конструкцией и имеют все необходимые для монтажа перфорации.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={spring} alt='пружины растяжения'/>
                                        <p>Оцинкованные пружины растяжения. Количество циклов балансировочного механизма — не менее 25 000.</p>
                                    </div>
                                </div>

                                <h4>Дополнительная комплектация</h4>   
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={lock1} alt='Механическая задвижка'/>  
                                        <p>позволяет блокировать ворота изнутри помещения. Отличается простотой и надежностью.</p>
                                    </div>
                                    <div>
                                        <img src={lockRSD} alt='Механический замок'/>  
                                        <p>Механический замок позволяет блокировать полотно ворот в закрытом положении — как изнутри помещения, так и со стороны улицы.</p>
                                    </div>

                                </div>
                                       

                                <h3>Секционные стальные ворота RSD02 с торсионным механизмом</h3>
                                <div className='RSD02'>
                                    <div><img src={RSD02} alt='RSD02'/></div>
                                    <ul>
                                        <li>Размеры проема: ширина — от 2 000 до 6 000 мм; высота — от 1 800 до 3 500 мм</li>
                                        <li>могут быть установлены в помещения с притолокой от 150 мм и боковыми расстояниями (от края проема до стены) от 120 мм</li>
                                        <li>Легкая и прочная панель из стали обладает высокой коррозионной стойкостью</li>
                                        <li>Конструкция ворот термоэффективна, прочна и проста в монтаже</li>
                                    </ul>
                                </div>
                                <h4>Дизайн панелей</h4>
                                <div className='design'>
                                <div>
                                    <img src={board} alt='доска'/>
                                    <p>доска</p>
                                </div>
                                <div>
                                    <img src={stripePanel} alt='горизонтальная полоса'/>
                                    <p>горизонтальная полоса</p>
                                </div>
                                <div>
                                    <img src={widePanel} alt='широкая центральная полоса'/>
                                    <p>широкая центральная полоса</p>
                                </div>
                                <div>
                                    <img src={panel} alt='филенка'/>
                                    <p>филенка</p>
                                </div>
                                <div>
                                    <img src={wavePanel} alt='волна'/>
                                    <p>волна</p>
                                </div>
                                <div>
                                    <img src={stripePanel} alt='панель внутри'/>
                                    <p>панель внутри</p>
                                    </div>
                                </div>

                                <h4>Тип поверхностей</h4>
                                <div className='surface'> 
                                    <div>
                                    <img src={wood} alt='под дерево'/>
                                    <p>под дерево</p>
                                    </div>
                                    <div>
                                    <img src={stukko} alt='stukko'/>
                                    <p>stukko</p>
                                    </div>
                                </div>


                                <h4>Цвета лицевых поверхностей</h4>  
                                <div className='color'>
                                    <div>   
                                    <img src={whiteColor} alt='белый'/>
                                    <p>белый</p>
                                    </div>
                                    <div>
                                    <img src={silver} alt='серебристый'/>
                                    <p>серебристый</p>
                                    </div>
                                    <div>
                                    <img src={greyColor} alt='серый'/>
                                    <p>серый</p>
                                    </div>
                                    <div>
                                    <img src={beige} alt='бежевый'/>
                                    <p>бежевый</p>
                                    </div>
                                    <div>
                                    <img src={green} alt='зеленый'/>
                                    <p>зеленый</p>
                                    </div>
                                    <div>
                                    <img src={blue} alt='синий'/>
                                    <p>синий</p>
                                    </div>
                                    <div>
                                    <img src={antracit} alt='антрацит'/>
                                    <p>антрацит</p>
                                    </div>
                                    <div>
                                    <img src={redColor} alt='красный'/>
                                    <p>красный</p>
                                    </div>
                                    <div>
                                    <img src={bordo} alt='бордовый'/>
                                    <p>бордовый</p>
                                    </div>
                                    <div>
                                    <img src={brownColor} alt='коричневый'/>
                                    <p>коричневый</p>
                                    </div>
                                    <div>
                                    <img src={goldenColor} alt='золотой дуб'/>
                                    <p>золотой дуб</p>
                                    </div>
                                    <div>
                                    <img src={venge} alt='венге'/>
                                    <p>венге</p>
                                    </div>
                                    <div>
                                    <img src={other} alt='нестандартный'/>
                                    <p>нестандартный</p>
                                    </div>
                                    <div>
                                    <img src={brownRed} alt='коричнево-красный'/>
                                    <p>коричнево-красный</p>
                                    </div>
                                </div>

                                <h4>Базовая комплектация</h4>
                                <div className='baseWrapper'>
                                    <div className='base'>
                                        <img src={doorLeaf} alt='полотно'/>
                                        <p>Полотно из энергоэффективных алюминиевых сэндвич-панелей толщиной 40 мм и усилением под внутренние петли и боковые опоры.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={rail} alt='направляющие'/>
                                        <p>Комплект направляющих и угловых стоек из оцинкованной стали толщиной 1,5–2 мм обладает повышенной прочностью, имеет все необходимые для монтажа перфорации.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={torsion} alt='торсионный механизм'/>
                                        <p>Торсионный механизм, рассчитанный на 25 000 циклов. Долговечность конструкции обеспечивает открывание и закрывание полотна ворот без усилий.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={handle} alt='ручка'/>
                                        <p>Новая ручка эргономичной формы выступает изящным декоративным дополнением к дизайнерскому исполнению полотна ворот.</p>
                                    </div>
                                </div>

                                <h4>Дополнительная комплектация</h4>   
                                <div className='additionWrapper'>
                                    
                                    <div>
                                        <img src={springProtection} alt='Устройство защиты от обрыва пружины'/>  
                                        <p>Устройство защиты от обрыва пружины блокирует вал, предотвращая падение полотна ворот.</p>
                                    </div>
                                    <div>
                                        <img src={ropeProtection} alt='Устройство защиты от обрыва троса'/>  
                                        <p>Устройство защиты от обрыва троса устанавливается в качестве нижнего кронштейна на полотно ворот. В случае обрыва троса механизм срабатывает и не дает полотну ворот упасть.</p>
                                    </div>
                                    <div>
                                        <img src={corosion} alt='Антикоррозионный пакет'/>  
                                        <p>Антикоррозионный пакет комплектующих рекомендуется устанавливать в случае эксплуатации ворот в условиях высокой влажности для обеспечения надежной защиты от коррозии и стабильной работы ворот. Данный пакет обладает увеличенным ресурсом работы и включает окрашенную пружину, окрашенные направляющие, нержавеющие боковые опоры, петли и метизы, нержавеющий трос, окрашенные боковые крышки.</p>
                                    </div>
                                    <div>
                                        <div className='windows'>
                                            <img src={window1} alt='окно'/>  
                                            <img src={window2} alt='окно'/>  
                                            <img src={window3} alt='окно'/>  
                                            <img src={window4} alt='окно'/>  
                                        </div>
                                        <p>Окно акриловое. Специальная конструкция обеспечивает плотное прилегание к полотну ворот, что защищает его от промерзания и теплопотери. Окантовка черного цвета.</p>
                                    </div>
                                    <div>
                                        <img src={lock1} alt='Механическая задвижка'/>  
                                        <p>позволяет блокировать ворота изнутри помещения. Отличается простотой и надежностью.</p>
                                    </div>
                                    <div>
                                        <img src={lockRSD} alt='Механический замок'/>  
                                        <p>Механический замок позволяет блокировать полотно ворот в закрытом положении — как изнутри помещения, так и со стороны улицы.</p>
                                    </div>

                                </div>
                            </div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>
                            
                            <img src={tittle} alt='Гаражные ворота Hörmann'/>
                            <p>Компания Hörmann уже более 80 лет занимается производством гаражных и промышленных ворот. Hörmann - это немецкое качество за разумные деньги!</p> 
                            <div className='hoermannFeatures'>
                                <p>На текущий момент самой популярной серией ворот для гаражей являются ворота серии <span>Hörmann Renomatic 42 LPU42</span>. Двустенные гаражные секционные ворота LPU 42 с секциями толщиной 42 мм позволяют обеспечить очень хорошую теплоизоляцию.</p>
                                <img src={renomatic} alt='Гаражные ворота Hörmann'/>    
                            </div>
                            <h3>готовые решения</h3>
                            <p>Ворота Hörmann Renomatic 42 поставляются <span>готовыми комплектами</span> для установки на проёмы стандартных размеров. Доступно 14 вариантов размеров проёма.</p>
                            <p>Указан размер проёма, первая цифра — ширина в мм, вторая — высота в мм.</p>
                            <div className='sizes'>
                                <div>2500×2125</div> 
                                <div>2500×2250</div> 
                                <div>2500×2500</div>
                                <div>2750×2125</div>
                                <div>2750×2250</div> 
                                <div>2750×2500</div> 
                                <div>3000×2125</div> 
                                <div>3000×2250</div> 
                                <div>3000×2500</div> 
                                <div>3000×3000</div> 
                                <div>4000×2500</div> 
                                <div>5000×2125</div> 
                                <div>5000×2250</div> 
                                <div>5000×2500</div>
                            </div>
                            
                            <h3>6 вариантов отделки внешней поверхности панелей ворот</h3>
                            <h4>Дизайн — M-гофр</h4>
                            <img src={mgofr} alt='М-гофр Hörmann'/> 
                            <h4>Поверхность WoodGrain</h4>
                            <div className='woodgrain'>
                                <div>
                                    <p>цвет RAL9016 (белый)</p>
                                    <img src={white} alt='woodgrain белый'/> 
                                </div>
                                <div>
                                    <p>RAL8028 (коричневый)</p>
                                    <img src={brown} alt='woodgrain коричневый'/> 
                                </div>
                                <div>
                                    <p>RAL7016 (серый антрацит)</p>
                                    <img src={grey} alt='woodgrain серый антрацит'/> 
                                </div>
                            </div>
                            
                            <h4>поверхность DecoColor</h4>
                            <p>поверхность металла без тиснения (гладкая), но лако-красочное покрытие имитирует дерево</p>
                            <div className='decocolor'>
                                <div>
                                    <p>Золотой дуб (Golden Oak)</p>
                                    <img src={golden} alt='decocolor золотой дуб'/> 
                                </div>
                                <div>
                                    <p>Тёмный дуб (Dark Oak)</p>
                                    <img src={dark} alt='decocolor темный дуб'/> 
                                </div>
                                <div>
                                    <p>Ночной дуб (Night Oak)</p>
                                    <img src={night} alt='decocolor ночной дуб'/> 
                                </div>
                            </div>
                            
                            <h3>Покрытие внутренней поверхности панелей ворот.</h3>
                            <p>Тыльная сторона панелей выполнена из оцинкованного металла финишное лакокрасочное покрытие у Renomatic 42 — бесцветный лак.</p>
                            
                            <p>Ворота Hoermann Renomatic 42 поставляются <span>сразу с электроприводом от Hoermann</span>, что обеспечивает идеальное сочетание изделий с учетом всех особенностей.</p>
                            <p>Ворота Hormann Renomatic 42 можно приобрести с приводом ProLift или ProMatic (ворота 5000×2500 только с приводом SupraMatic).</p>
                            <p>Рекомендуем комплектовать ворота приводом ProMatic. С него и начнём.</p>

                            <h4>Привод Hormann ProMatic</h4>
                            <div className='promatic'>
                                <img src={promatic} alt='Hormann ProMatic'/> 
                                <p>При выборе комплекта ворот Renomatic 42 с приводом ProMatic, дополнительно к воротам поставляется привод ProMatic 3, направляющая шина FS 10 и 4-клавишный пульт ДУ HSE 4 BS (в комплекте 1 шт., дополнительно можно приобрести неограниченное количество).</p>
                            </div>
                            <h4>Привод Hormann ProLift</h4>
                            <div className='prolift'>
                                <img src={prolift} alt='Hormann ProLift'/> 
                                <p>При выборе комплекта ворот Renomatic 42 с приводом ProLift, дополнительно к воротам поставляется привод ProLift 700, направляющая шина FS 10 и 2-клавишный пульт ДУ RSC2 (в комплекте 2 шт., дополнительно можно приобрести неограниченное количество).</p>
                            </div>
                            <h4>Привод Hormann SupraMatic</h4>
                            <div className='supra'>
                                <img src={supra} alt='Hormann SupraMatic'/> 
                                <p>Если размер проёма 5000×2500 мм, то дополнительно к воротам поставляется привод SupraMatic E, направляющая шина FS 10 и 5-клавишный пульт ДУ HS 5 BS (в комплекте 1 шт., дополнительно можно приобрести неограниченное количество).</p>
                            </div>
                            <h3>Радиоуправление</h3>
                            <div className='remote'>
                                <img src={remote} alt='управление'/> 
                                <p>Управление воротами, оборудованными приводами Hormann ProLift, ProMatic и SupraMatic можно дистанционно при помощи пультов. Важно отметить, что радиоканал привода ProLift отличается от радиоканалов приводов ProMatic и SupraMatic, и, как следствие пульты от ProLift не подходят к ProMatic и SupraMatic, и наоборот, пульты от ProMatic и SupraMatic не подходят к ProLift.</p>
                            </div>
                        </div>
                        }
                    </div>
                    

                </div>
            </div>
        </section>
    );
}