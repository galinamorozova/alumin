import React, {useState} from 'react';
import './industrial.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import protrend from './../../../../images/protrend.png';
import proplus from './../../../../images/proplus.png';
import microwave from '../../../../images/microwave.jpg';
import microwave1 from '../../../../images/microwave1.png';
import microwave2 from '../../../../images/microwave2.png';
import sgofr from '../../../../images/s-gofr.jpg';
import sgofr1 from '../../../../images/s-gofr1.png';
import sgofr2 from '../../../../images/s-gofr2.png';
import colorPanel from '../../../../images/colorProTrend.png';
import standartDoorstep from '../../../../images/standartDoorstep2.png';
import lowDoorstep from '../../../../images/low_doorstep.png';
import flatDoorstep from '../../../../images/flat_doorstep.png';
import windows1 from '../../../../images/ind_windows.png';
import windows2 from '../../../../images/ind_windows1.png';
import windows3 from '../../../../images/ind_windows2.png';
import windows4 from '../../../../images/ind_windows3.png';
import lock from '../../../../images/ind_lock.png';
import door1 from '../../../../images/ind_sideDoor.png';
import wet from '../../../../images/wet.png';
import indPanoram from '../../../../images/ind_panoram.png';
import vandal from '../../../../images/vandal.png';
import val1 from '../../../../images/1val.png';
import val2 from '../../../../images/2val.png';

import industrialDoorhan from '../../../../images/doorhan/industrial.jpeg';
import board from '../../../../images/doorhan/board.jpeg';
import lock1 from '../../../../images/doorhan/lock1.jpeg';
import lockRSD from '../../../../images/doorhan/lockRSD.jpeg';
import panel from '../../../../images/doorhan/panel.jpeg';
import wavePanel from '../../../../images/doorhan/wave-panel.jpeg';
import widePanel from '../../../../images/doorhan/wide-panel.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import corosion from '../../../../images/doorhan/corosion.jpeg';
import doorLeaf from '../../../../images/doorhan/door-leaf.jpeg';
import ropeProtection from '../../../../images/doorhan/rope-protection.jpeg';
import springProtection from '../../../../images/doorhan/spring-protection.jpeg';
import torsion from '../../../../images/doorhan/torsion.jpeg';
import doorIndustrial from '../../../../images/doorhan/doorIndustrial.jpeg';
import autoIndustrial from '../../../../images/doorhan/autoIndustrial.jpeg';
import handleControlIndustrial from '../../../../images/doorhan/handleControlIndustrial.jpeg';
import railIndustrial from '../../../../images/doorhan/railIndustrial.jpeg';
import handleIndustrial from '../../../../images/doorhan/handleIndustrial.jpeg';
import fireProtection from '../../../../images/doorhan/fireProtection.jpeg';
import wood from '../../../../images/doorhan/wood.jpeg';
import stukko from '../../../../images/doorhan/stukko.jpeg';
import window1 from '../../../../images/doorhan/window1.jpeg';
import whiteColor from '../../../../images/doorhan/9003.png';
import other from '../../../../images/doorhan/other.png';
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


export default function Industrial() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='industrialGates'>
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

                            <div className='characteristicWrapper'>
                                    <div className='proTrend'>
                                        <h4>Промышленные секционные ворота серии ProTREND</h4>
                                        <ul>
                                            <li>Панели толщиной 40 мм</li>
                                            <li>Комплектующие из оцинкованной стали</li>
                                            <li>Базовый ресурс пружин до 25 000 циклов «подъема-опускания»</li>
                                            <li>Расширенный  ресурс пружин до 100 000 циклов «подъема-опускания»</li>
                                            <li>Любой размер с шагом 5 мм</li>
                                            <li>10 типов монтажа</li>
                                            <li>Максимальный размер ворот 7000х6000 мм</li>
                                            <li>Системы безопасности в базовом комплекте ворот</li>
                                            <li>Угловые стойки устанавливаются за проемом, поэтому эти элементы не контактируют с улицей, что обеспечивает сохранение тепла</li>
                                            <li>Механизм блокировки, страхующий от падения воротного полотна в случае выхода пружины из строя. В нетипичных случаях обрыва троса нижние кронштейны заблокируют полотно ворот и предотвратят падение полотна.</li>
                                            <li>Замкнутый контур стальных листов и 4 слоя металла в местах крепления саморезов, исключающее расслоение панелей на солнце</li>
                                        </ul>
                                        <img src={protrend} alt='толщина полотна ProTREND'></img>
                                    </div>
                                    <div>
                                        <h4>Промышленные секционные ворота серии ProPLUS</h4>
                                        <p>ProPLUS – улучшенная термоизоляция, повышенная прочность, устойчивость к коррозии. Рекомендовано для <em>отапливаемых помещений</em>, для помещений с <em>повышенной влажностью</em> (мойки и т.п.), для регионов с <em>холодным климатом</em>.</p>
                                        <ul>
                                            <li>Панели толщиной 45 мм</li>
                                            <li>Роликовые кронштейны типа "дуплекс" для ворот шириной более 5 м и специальные усиливающие профили, обеспечивающие дополнительную жесткость воротам </li>
                                            <li>Комплектующие из нержавеющей стали</li>
                                            <li>Базовый ресурс пружин до 25 000 циклов «подъема-опускания»</li>
                                            <li>Расширенный ресурс пружин до 100 000 циклов «подъема-опускания»</li>
                                            <li>Любой размер с шагом 5 мм</li>
                                            <li>10 типов монтажа</li>
                                            <li>Максимальный размер ворот 8000х7000 мм</li>
                                            <li>Системы безопасности в базовом комплекте ворот</li>
                                            <li>Дополнительная защита от сквозняков в виде уплотнителей из морозостойкого эластичного EPDM: двулепестковые верхний и боковые, а нижний многокамерный.</li>
                                            <li>Храповые муфты и нижние кронштейны, страхующие от падения воротного полотна</li>
                                            <li>Замкнутый контур стальных листов и 4 слоя металла в местах крепления саморезов, исключающее расслоение панелей на солнце</li>
                                        </ul>
                                        <img src={proplus} alt='толщина полотна ProPLUS'></img>
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
                                Повышенных антикоррозионных свойств панели удалось достичь за счет грунтовочного слоя (14-16 мкм) и цинкового покрытия (12 мкм).</li>
                                <li>
                                <h5>Долговечное покрытие</h5>
                                Сохранить полотно ворот в первоначальном привлекательном виде получилось благодаря полиуретановой краске с добавлением специальных полиамидных частиц (ПУР-ПА), которые повышают антикоррозийные и защитные свойства панели.</li>
                                <li>
                                <h5>Хорошая теплоизоляция</h5>
                                Хорошая теплоизоляция. 0,87 и 1,0 м² °C/Bт – коэффициент сопротивления теплопередаче в воротах производителя. Такой же величиной обладает стена из красного кирпича в 55 и 60 см соответственно.
                                </li>
                            </ul>
                            <h4>Внешний вид и цветовая палитра</h4>
                            <h5>Микроволна</h5>
                            <div className='panelWrapper'>
                                <div><img src={microwave} alt='микроволна'/></div>
                                <div><img src={microwave1} alt='микроволна'/>
                                <img src={microwave2} alt='микроволна'/></div>
                            </div>
                            <h5>S-гофр</h5>
                            <div className='panelWrapper'>
                                <div><img src={sgofr} alt='S-гофр'/></div>
                                <div><img src={sgofr1} alt='S-гофр'/>
                                <img src={sgofr2} alt='S-гофр'/></div>
                            </div>
                            <h5>Палитра базовых цветов и фактур</h5>
                            <div><img src={colorPanel} alt='цветовая схема'/></div>
                            <p>* По желанию заказчика возможно нанесение на полотно ворот индивидуальных рисунков любой степени сложности методом цифровой печати.</p>
                            <h4>ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ</h4>
                            <div className='wicket'>
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
                                        <img src={flatDoorstep} alt='с плоским порогом'/>
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
                                </div>
                         
                                <h5>Встроеные окна</h5>
                                <div className='windowsWrapper'>
                                    <img src={windows1} alt='встроеные окна'/>
                                    <img src={windows2} alt='встроеные окна'/>
                                    <img src={windows3} alt='встроеные окна'/>
                                    <img src={windows4} alt='встроеные окна'/>
                                </div>
                                <p>Применение окон в воротах позволяет экономить на освещении производственных цехов. В ассортименте «Алютех» имеются различные виды остекления промышленных ворот.</p>
                            
                                    <h5>Замок</h5>
                                    <div className='lockWrapper'>
                                        <img src={lock} alt='замок'/>
                                        <p>Для помещений без дополнительного входа предлагается ригельный замок. Он позволяет открывать и закрывать ворота как изнутри, так и снаружи.</p>
                                    </div>
                            
                                    <h5>Боковая дверь</h5>
                                    <div className='doorWrapper'>
                                        <img src={door1} alt='боковая дверь'/>
                                        <p>Боковая дверь и секционные ворота выполнены в едином стиле и гармонично вписываются в фасад здания, идеально дополняя друг друга. Калитка изготавливается из панелей с таким же рисунком и цветом, как и секционные ворота.</p>
                                    </div>
                             
                            
                                    <h5>Комплектация для особенно влажных условий*</h5>
                                    <div className='wetWrapper'>
                                        <img src={wet} alt='для влажных условий'/>
                                        <p>Для автомоек и других помещений с повышенной влажностью конструкторы «АЛЮТЕХ» предусмотрели специальный комплект деталей. Тросы, метизы и оси роликов в нем изготовили из нержавеющей стали, а систему направляющих покрыли защитным лакокрасочным покрытием. (* - только ProPlus) </p>
                                    </div>
                           
                             
                                    <h5>Панорамное остекление</h5>
                                    <div className='panoramWrapper'>
                                        <img src={indPanoram} alt='панорамное остекление'/>
                                        <p>Одна или несколько панорамных панелей – и новый облик ваших ворот готов. По сравнению со встроенными окнами, вы получите еще больший обзор и освещение.</p>
                                    </div>
                      
                                    <h5>Защита от вандалов</h5>
                                    <div className='vandalWrapper'>
                                        <img src={vandal} alt='защита от вандалов'/>
                                        <p>С устройством от поддомкрачивания ворота защищены от взлома. Устройство заблокирует полотно при его несанкционированном подъеме.</p>
                                    </div>
                           
                         
                                <h4>Технические характеристики</h4>
                                <div className='techWrapper'>
                                    <div>
                                        <img src={val1} alt='Одновальная система балансировки'/>
                                        <p>для ворот ProTREND и ProPLUS</p>
                                    </div>
                                    <div>
                                    <img src={val2} alt='Двухвальная система балансировки'/>
                                    <p>только для ворот ProPLUS</p>
                                    </div>
                                </div>
                          
                </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h3>ПРОМЫШЛЕННЫЕ СЕКЦИОННЫЕ ВОРОТА ИЗ СТАЛЬНЫХ СЭНДВИЧ-ПАНЕЛЕЙ С ТОРСИОННЫМ МЕХАНИЗМОМ ISD01</h3>
                                <div className='industrialDoorhan'>
                                    <img src={industrialDoorhan} alt="промышленные ворота Doorhan"/>
                                    <ul>
                                        <li>Теплые ворота - отсутствие "мостика холода", надежная геметизация по всему периметру.</li>
                                        <li>Высота проема от 2 000мм до 8 000мм</li>
                                        <li>Ширина проема от 2 000мм до 8 000мм</li>
                                        <li>Притолока от 150мм</li>
                                        <li>Пристенки от 120мм</li>
                                    </ul>
                                    
                                </div>


                                <h4>ДИЗАЙН ПАНЕЛЕЙ</h4>
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
                                        <p>широкая полоса</p>
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
                                    <p>под дерево - внешняя сторона панели</p>
                                    </div>
                                    <div>
                                    <img src={stukko} alt='stukko'/>
                                    <p>stukko - внутренняя сторона панели</p>
                                    </div>
                                </div>

                                <h4>Цвета лицевых поверхностей</h4>  
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
                                    <img src={other} alt='нестандартный'/>
                                </div>



                                <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>

                                <div className='baseWrapper'>
                                    <div className='base'>
                                    <img src={doorLeaf} alt=''/>
                                    <p>Полотно из энергоэффективных сэндвич-панелей толщиной 40 мм и усилением под внутренние петли и боковые опоры.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={railIndustrial} alt=''/>
                                    <p>Комплект направляющих и угловых стоек из стали толщиной 2 мм обладает повышенным запасом прочности, имеет все необходимые для монтажа перфорации.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={torsion} alt=''/>
                                    <p>Торсионный механизм рассчитан на 25 000 циклов. Долговечность конструкции ворот обеспечивает открывание и закрывание полотна без усилий.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={springProtection} alt=''/>
                                    <p>Устройство защиты от обрыва пружины блокирует вал при нештатных ситуациях, что предотвращает падение полотна ворот.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={ropeProtection} alt=''/>
                                    <p>Устройство защиты от обрыва троса устанавливается в качестве нижнего кронштейна на полотно ворот. В случае обрыва троса механизм срабатывает и предотвращает падение полотна ворот.</p>
                                    </div>
                                    <div className='base'>
                                    <img src={handleIndustrial} alt=''/>
                                    <p>Эргономичная ручка позволяет легко и удобно открывать и закрывать ворота.</p>
                                    </div>
                                </div>

                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>

                                <div className='additionWrapper'>
                                    <div>
                                    <img src={lock1} alt=''/>
                                    <p>Механическая задвижка позволяет запирать полотно изнутри помещения. Отличается простотой и надежностью.</p>
                                    </div>
                                    <div>
                                    <img src={window1} alt=''/>
                                    <p>Специальная конструкция окон (размером 627 х 327 или 607 х 202 мм) обеспечивает плотное прилегание к полотну ворот, что защищает его от промерзания и теплопотери. Окна изготавливаются с окантовкой черного цвета.</p>
                                    </div>
                                    <div>
                                    <img src={lockRSD} alt=''/>
                                    <p>Механический замок позволяет блокировать полотно ворот в закрытом положении как изнутри помещения, так и со стороны улицы.</p>
                                    </div>
                                    <div>
                                    <img src={doorIndustrial} alt=''/>
                                    <p>Калитка имеет усовершенствованную конструкцию, отличается высокой прочностью и эстетичным внешним видом. Минимальная высота щита — 2 130 мм.</p>
                                    </div>
                                    <div>
                                    <img src={autoIndustrial} alt=''/>
                                    <p>Возможность автоматизации ворот приводом и системами безопасности (см. раздел «Автоматика для ворот»).</p>
                                    </div>
                                    <div>
                                    <img src={handleControlIndustrial} alt=''/>
                                    <p>Ручной цепной привод устанавливается на промышленные ворота всех типов подъема, служит для подъема и опускания полотна ворот вручную.</p>
                                    </div>
                                    <div>
                                    <img src={torsion} alt=''/>
                                    <p>Торсионный механизм, рассчитанный на ресурс до 100 000 циклов.</p>
                                    </div>
                                    <div>
                                    <img src={corosion} alt=''/>
                                    <p>Антикоррозионный пакет комплектующих рекомендуется устанавливать в случае эксплуатации ворот в условиях высокой влажности для обеспечения надежной защиты от коррозии и стабильной работы ворот. Данный пакет обладает увеличенным ресурсом работы и включает: окрашенную пружину, окрашенные направляющие, нержавеющие боковые опоры, петли и метизы, нержавеющий трос, окрашенные боковые крышки.</p>
                                    </div>
                                    <div>
                                    <img src={fireProtection} alt=''/>
                                    <p>Искронедающее исполнение секционных ворот находит применение в промышленных помещениях со взрывоопасными средами. Конструктивные решения, используемые в данной модификации ворот позволяют исключить появление искр при эксплуатации, а так же предотвратить накопление опасных электростатических зарядов в узлах конструкции.</p>
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