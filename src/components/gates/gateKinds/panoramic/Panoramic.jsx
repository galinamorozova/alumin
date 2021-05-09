import React, {useState} from 'react';
import './panoramic.scss';
import SideMenu from '../../../sideMenu/SideMenu';

import titlePanoramic from '../../../../images/panoramic/title_panoramic.png';
import alp from '../../../../images/panoramic/alp.png';
import alps from '../../../../images/panoramic/alps.png';
import colorPanel from '../../../../images/panoramic/colorpanel.png';
import avtoControl_panoramic from '../../../../images/panoramic/avtoControl_panoramic.png';
import handOpen_panoramic from '../../../../images/panoramic/handOpen_panoramic.jpg';
import antipanic from '../../../../images/panoramic/antipanic.jpg';
import antiVandal from '../../../../images/panoramic/antivandal.jpg';
import sideDoor from '../../../../images/panoramic/sideDoor.jpg';
import wet from '../../../../images/panoramic/wet.jpg';
import alupro from '../../../../images/panoramic/alupro.jpg';
import alutrend from '../../../../images/panoramic/alutrend.png';
import alutherm from '../../../../images/panoramic/alutherm.jpg';
import antiDamage from '../../../../images/panoramic/antiDamage.jpg';
import warmAddition from '../../../../images/panoramic/warmAddition.jpg';
import wicket from '../../../../images/panoramic/wicket.jpg';
import fullfill from '../../../../images/panoramic/fullfill.jpg';
import rigel from '../../../../images/ind_lock.png';


import titlePanoramicDoorhan from '../../../../images/doorhan/titlePanoramicDoorhan.jpg';
import board from '../../../../images/doorhan/board.jpeg';
import stripePanel from '../../../../images/doorhan/stripe-panel1.jpeg';
import wavePanel from '../../../../images/doorhan/wave-panel.jpeg';
import widePanel from '../../../../images/doorhan/wide-panel.jpeg';
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
import other from '../../../../images/doorhan/other.png';
import combyGlass from '../../../../images/doorhan/combyGlass.jpg';
import allGlass from '../../../../images/doorhan/allGlass.jpg';
import standartGlass from '../../../../images/doorhan/standartGlass.jpg';
import withGrid from '../../../../images/doorhan/withGrid.jpg';
import oneCamera from '../../../../images/doorhan/oneCamera.jpg';
import oneGlass from '../../../../images/doorhan/oneGlass.jpg';
import tBridge from '../../../../images/doorhan/tbridge.jpg';
import railIndustrial from '../../../../images/doorhan/railIndustrial.jpeg';
import torsion from '../../../../images/doorhan/torsion.jpeg';
import ropeProtection from '../../../../images/doorhan/rope-protection.jpeg';
import springProtection from '../../../../images/doorhan/spring-protection.jpeg';
import handle from '../../../../images/doorhan/handle.jpg';
import lock from '../../../../images/doorhan/lockRSD.jpeg';
import corosion from '../../../../images/doorhan/corosion.jpeg';
import handleLock from '../../../../images/doorhan/lock1.jpeg';
import handleControl from '../../../../images/doorhan/handleControlIndustrial.jpeg';
import autoControl from '../../../../images/doorhan/autoIndustrial.jpeg';
import standartWindow from '../../../../images/doorhan/standartWindow.jpg';




export default function Panoramic() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='panoramicGates'>
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
                                <h3>панорамные ворота</h3>
                                <img src={titlePanoramic} alt='панорамные ворота'/>
                                <p><i class="fas fa-award"/>Максимальная обзорность. Цельное остекление для ворот шириной до 3 м</p>
                                <p><i class="fas fa-award"/>Презентабельный внешний вид. Защита остекления от царапин и помутнения</p>
                                <p><i class="fas fa-award"/>Широкий выбор решений по теплоизоляции</p>
                                <p><i class="fas fa-award"/>Разнообразие цветовых решений - возможность подобрать ворота под любой экстерьер и в соответствии с фирменным стилем компании</p>
                                <h3>виды</h3>
                                <div className='typeWrapper'>
                                    <div>
                                        <img src={alutherm} alt='alutherm'/>
                                        <h4>AluTherm</h4>	
                                        <p>Высокая энергоэффективность, премиальное качество</p>
                                        <p>Панели 45 мм с терморазрывом.<br/> <span>Для объектов с высокими требованиями к теплоизоляции</span></p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Двойное или тройное остекление, альтернативное заполнение.<br/> <span>Максимальная теплоизоляция конструкции</span></p>
                                        <p>4 стандартных цвета</p>
                                    </div>
                                    <div>
                                        <img src={alupro} alt='alupro'/>
                                        <h4>AluPro</h4>	
                                        <p>Максимальная функциональность и разнообразие вариантов оформления</p>
                                        <p>Панели 45 мм без терморазрыва.<br/> <span>Для объектов, где не требуется повышенная теплоизоляция</span></p>
                                        <p>Нержавеющая сталь</p>
                                        <p>Одинарное или двойное остекление, альтернативное заполнение.<br/> <span>Разнообразие дизайна — прозрачное или композитное заполнение, тянутые решетки или перфорированные листы</span></p>
                                        <p>10 стандартных цветов </p>
                                    </div>

                                    <div>
                                        <img src={alutrend} alt='alutrend'/>
                                        <h4>AluTrend</h4>	
                                        <p>Экономичное решение отличного качества</p>
                                        <p>Панели 40 мм без терморазрыва.<br/> <span>Для объектов, где не требуется повышенная теплоизоляция</span></p>
                                        <p>Оцинкованная сталь</p>
                                        <p>Одинарное или двойное остекление, альтернативное заполнение.<br/> <span>Разнообразие дизайна — прозрачное или композитное заполнение, тянутые решетки или перфорированные листы</span></p>
                                        <p>10 стандартных цветов</p>
                                    </div>
                                </div>

                                <h3>варианты исполнения</h3>
                                <div className='variantWrapper'>
                                    <div>
                                    <h4>Тип профиля - АЛП</h4>
                                    <img src={alp} alt='АЛП'/>
                                    </div>
                                    <div>
                                    <h4>Тип профиля - АЛПC</h4>
                                    <img src={alps} alt='АЛПС'/>
                                    </div>
                                </div>

                                <h3>цветовые решения</h3>
                                <img src={colorPanel} alt='цвета'/>


                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <div><img src={avtoControl_panoramic} alt='автоматическое управление'/></div>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpen_panoramic} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> - на полотне ворот устанавливают ручку для подъема-опускания, на массивных воротах — блок или цепной редуктор. Ворота удобны в использовании: вес даже габаритных конструкций оптимально сбалансирован пружинами. Так, вы прилагаете минимальные усилия для управления.</span></p>

                                </div>

                                <h3>Дополнительные аксессуары</h3>	
                                <div className='additionWrapper'>
                                    <div className='addition'>
                                        <div><img src={wicket} alt='калитка'/></div>
                                        <h4>Встроенная калитка</h4>
                                        <p>для удобного и быстрого входа-выхода. Калитка экономит ресурс ворот, продлевая срок их службы</p>
                                    </div>
                                    <div className='addition'> 
                                        <div><img src={antiDamage} alt='Покрытие, стойкое к царапинам'/></div>
                                        <h4>Покрытие, стойкое к царапинам</h4>
                                        <p>прозрачность остекления на долгие годы даже после многократной чистки</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={sideDoor} alt='Боковая дверь'/></div>
                                        <h4>Боковая дверь</h4>
                                        <p>для отдельного входа-выхода. Гармонично сочетается с воротами, придавая фасаду завершенный вид</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={fullfill} alt='Альтернативное заполнение секций'/></div>
                                        <h4>Альтернативное заполнение секций</h4>
                                        <p>решетчатое — для проветривания и регулировки влажности, композитное — для удобства ухода</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={rigel} alt='Ригельный замок'/></div>
                                        <h4>Ригельный замок</h4>
                                        <p>надежное запирание ворот изнутри и снаружи</p>
                                    </div>
                                    <div className='addition'>
                                       <div><img src={wet} alt='Комплект для особо влажных помещений'/></div>
                                        <h4>Комплект для особо влажных помещений</h4>
                                        <p>повышение стойкости к коррозии для сохранения вида и функциональности ворот в условиях влажного климата</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={warmAddition} alt='Двойной контур герметизации'/></div>
                                        <h4>Двойной контур герметизации</h4>
                                        <p>для защиты от образования конденсата внутри светопрозрачных вставок</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={antipanic} alt='Замки «анти-паник»'/></div>
                                        <h4>Замки «анти-паник»</h4>
                                        <p>для эвакуации из помещений в экстренных ситуациях</p>
                                    </div>
                                    <div className='addition'>
                                        <div><img src={antiVandal} alt='Система защиты от поддомкрачивания'/></div>
                                        <h4>Система защиты от поддомкрачивания</h4>
                                        <p>защита от проникновения злоумышленников</p>
                                    </div>
                                </div>

                            </div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>
                                <h4>ПРОМЫШЛЕННЫЕ СЕКЦИОННЫЕ ВОРОТА ИЗ АЛЮМИНИЕВЫХ ПАНОРАМНЫХ ПАНЕЛЕЙ С ТОРСИОННЫМ МЕХАНИЗМОМ ISD02</h4>
                                <img src={titlePanoramicDoorhan} alt='панорамные Doorhan'/>
                                <h4>ХАРАКТЕРИСТИКИ:</h4>
                                <div className='characteristics'>
                                    <p>Ширина проема, мм</p>
                                    <p>от 2 000 до 6 100</p>
                                    <p>Высота проема, мм</p>
                                    <p>от 2 000 до 6 000</p>
                                    <p>Притолока, мм</p>
                                    <p>от 150</p>
                                    <p>Пристенки, мм</p>
                                    <p>от 120</p>
                                    <p>Высота светового проема ячеек, мм</p>
                                    <p>от 370 до 720</p>
                                    <p>Ширина светового проема ячеек, мм</p>
                                    <p>не более 3 000</p>
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
                                        <p>широкая центральная полоса</p>
                                    </div>
                                    <div>
                                        <img src={wavePanel} alt='волна'/>
                                        <p>волна</p>
                                    </div>
                                    <div>
                                        <img src={stripePanel} alt='горизонтальная полоса'/>
                                        <p>горизонтальная полоса с внутренней стороны панелей</p>
                                    </div>
                                </div>
                                <h4>ТИП ПОВЕРХНОСТЕЙ</h4>
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
                                <h4>ТИП ПАНЕЛЕЙ</h4>
                                <div className='panels'>
                                    <div>
                                        <img src={tBridge} alt='панорамная панель'/>
                                        <p>Панорамная панель с сиcтемой профилей T-bridge (с терморазрывом)</p>
                                    </div>
                                    <div>
                                        <img src={oneCamera} alt='панорамная панель'/>
                                        <p>Панорамная панель с однокамерным стеклопакетом</p>
                                    </div>
                                    <div>
                                        <img src={oneGlass} alt='панорамная панель'/>
                                        <p>Панорамная панель с однослойным стеклом</p>
                                    </div>
                                    <div>
                                        <img src={withGrid} alt='панорамная панель'/>
                                        <p>Панорамная панель с алюминиевым перфорированным листом</p>
                                    </div>
                                </div>
                                <h4>ВАРИАНТЫ ИСПОЛНЕНИЯ ПОЛОТНА</h4>
                                <div className='glass'>
                                    <div>
                                        <img src={standartGlass} alt='Стандартное остекление'/>
                                        <p>Стандартное остекление</p>
                                    </div>
                                    <div>
                                        <img src={allGlass} alt='Сплошное остекление'/>
                                        <p>Сплошное остекление</p>
                                    </div>
                                    <div>
                                        <img src={combyGlass} alt='Комбинированное полотно из панорамных и сэндвич-панелей'/>
                                        <p>Комбинированное полотно из панорамных и сэндвич-панелей</p>
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
                                    <img src={other} alt='нестандартный'/>   
                                </div>
                                <h4>БАЗОВАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='baseWrapper'>
                                    <div className='base'>
                                        <img src={standartWindow} alt='Полотно'/>
                                        <p>Полотно из панорамных панелей. В качестве остекления используется небьющийся, ударопрочный поликарбонат. Это единственный на российском рынке надежный материал.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={railIndustrial} alt='Комплект направляющих и угловых стоек из стали'/>
                                        <p>Комплект направляющих и угловых стоек из стали толщиной 2 мм обладает повышенным запасом прочности, имеет все необходимые для монтажа перфорации.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={torsion} alt='Торсионный механизм'/>
                                        <p>Торсионный механизм, рассчитанный на 25 000 циклов, обеспечивает долговечность конструкции ворот.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={ropeProtection} alt='Устройство защиты от обрыва троса'/>
                                        <p>Устройство защиты от обрыва троса устанавливается в качестве нижнего кронштейна на полотно ворот. В случае обрыва троса механизм срабатывает и предотвращает аварийное падение полотна ворот.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={springProtection} alt='Устройство защиты от обрыва пружины'/>
                                        <p>Устройство защиты от обрыва пружины блокирует вал, что предотвращает аварийное падение полотна ворот.</p>
                                    </div>
                                    <div className='base'>
                                        <img src={handle} alt='Эргономичная ручка'/>
                                        <p>Эргономичная ручка позволяет легко и удобно открывать ворота.</p>
                                    </div>
                                </div>
                                <h4>ДОПОЛНИТЕЛЬНАЯ КОМПЛЕКТАЦИЯ</h4>
                                <div className='additionWrapper'>
                                    <div>
                                        <img src={lock} alt='Механический замок'/>
                                        <p>Механический замок позволяет блокировать полотно ворот в закрытом положении как изнутри помещения, так и со стороны улицы.</p>
                                    </div>
                                    <div>
                                        <img src={handleLock} alt='Механическая задвижка'/>
                                        <p>Механическая задвижка позволяет запирать полотно изнутри помещения. Отличается простотой и надежностью.</p>
                                    </div>
                                    <div>
                                        <img src={handleControl} alt='Ручной цепной привод'/>
                                        <p>Ручной цепной привод устанавливается на промышленные ворота всех типов подъема, служит для подъема и опускания полотна ворот вручную.</p>
                                    </div>
                                    <div>
                                        <img src={corosion} alt='Антикоррозионный пакет'/>
                                        <p>Антикоррозионный пакет комплектующих рекомендуется устанавливать в случае эксплуатации ворот в условиях высокой влажности для обеспечения надежной защиты от коррозии и стабильной работы. Данный пакет обладает увеличенным ресурсом работы и включает: окрашенную пружину, окрашенные направляющие, нержавеющие боковые опоры, петли и метизы, нержавеющий трос, окрашенные боковые крышки.</p>
                                    </div>
                                    <div>
                                        <img src={tBridge} alt='Возможность использования панелей из алюминиевых профилей T-bridge'/>
                                        <p>Возможность использования панелей из алюминиевых профилей T-bridge (опция) с термовставкой из полиамида повышает энергоэффективность ворот и предотвращает промерзание профилей.</p>
                                    </div>
                                    <div>
                                        <img src={withGrid} alt='перфорированный алюминиевый лист'/>
                                        <p>Возможность использования в качестве заполнения перфорированного алюминиевого листа — стильное и практичное решение с созданием барьера ограниченной видимости.</p>
                                    </div>
                                    <div>
                                        <img src={torsion} alt='Торсионный механизм, рассчитанный на ресурс до 100 000 циклов.'/>
                                        <p>Торсионный механизм, рассчитанный на ресурс до 100 000 циклов.</p>
                                    </div>
                                    <div>
                                        <img src={autoControl} alt='привод и системы безопасности'/>
                                        <p>Возможность автоматизации ворот приводом и системами безопасности (см. раздел «Автоматика для ворот»).</p>
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