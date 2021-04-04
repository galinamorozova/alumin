import React from 'react';
import './aluWindow.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';

import aluminWindowTitle from '../../../images/alumConstructions/aluWindow.jpeg';
import warmAl from '../../../images/alumConstructions/warmAl.png';
import coldAl from '../../../images/alumConstructions/coldAl.png';
import archWindow from '../../../images/alumConstructions/archWindow.jpg';
import panoramicWindow from '../../../images/alumConstructions/panoramicWindow.png';
import unstandartWindow from '../../../images/alumConstructions/unstandartWindow.jpg';
import standartWindow from '../../../images/alumConstructions/standartWindow.jpeg';
import variantToOpen1 from '../../../images/alumConstructions/variantToOpen1.jpeg';
import variantToOpen2 from '../../../images/alumConstructions/variantToOpen2.jpeg';
import variantToOpen3 from '../../../images/alumConstructions/variantToOpen3.jpeg';
import variantToOpen4 from '../../../images/alumConstructions/variantToOpen4.jpeg';

export default function AluWindow() { 
    return( 
        <section className='aluWindow'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Алюминиевые окна</h3>

                    <div className='aluminWindowTitle'>
                        <img src={aluminWindowTitle} alt='алюминиевые окна'/>
                        <p>Окна из алюминиевого профиля приобретают всю большую популярность. Они невосприимчивы к химическим составам, не гниют, не плавятся при высоких температурах. Гибкость материала наравне с его прочностью позволяет архитекторам воплощать в жизнь проекты повышенной сложности – округлые, трапециевидные оконные блоки, профили для витражного или ленточного остекления.</p>
                    </div>

                    <p>Наша компания занимается изготовлением и монтажом алюминиевых конструкций разных видов (фасады, лоджии, окна, перегородки) как из теплого алюминия так и из холодного.</p>
                    <p>Для начала необходимо разобраться в разнице <span>"холодного"</span> и <span>"теплого"</span> алюминия.</p>
                    <p>Алюминий характеризуется высокой теплопроводностью, что может быть и недостатком в определенных обстоятельствах - перегородки из алюминия промерзали бы при минусовых температурах. Однако, современные технологии позволяют избежать этих недостатков при производстве изделий из алюминия.</p>
                    <h3>Отличие теплого от холодного алюминия</h3>
                    <div className='coldWarmAl'>
                        <div className='kind'>
                            <div><img src={warmAl} alt='теплый алюминий'/></div>
                            <h3>Теплый алюминий и его преимущества</h3>
                            <p>Теплый алюминиевый профиль имеет две составляющие - металлические детали в нем чередуются с пластмассовыми вставками. Их называют термомостом или терморазрывом. Созданы они из стеклонасыщенного полиамида. Предназначение вставки – создание преграды на пути тепловой энергии, идущей из комнаты или кабинета на улицу (вне здания).</p>
                            <p>Алюминий с полиамидной вставкой закреплены по системе «паз-гребень». Она обеспечивает герметичность конструкции, плотное прилегание элементов. Такая система защищает помещение от сквозняков. С легкостью выносит ветровые нагрузки. Другое их наименование – многокамерные окна. Через стеклопакеты и каркас не проходит холод. Низкие температуры задерживаются. Изделия не промерзают. Теплоизоляция таких алюминиевых профилей схожа с аналогичными параметрами рам из дерева и ПВХ.</p>
                        </div>
                        <div className='kind'>
                            <div><img src={coldAl} alt='холодный алюминий'/></div>
                            <h3>Холодный алюминий и его преимущества</h3>
                            <p>Структура холодных рам однородна, неразрывна. Целостность конструкции делает ее максимально герметичной. Она защищает помещение от атмосферных осадков, пыли, влаги. Теплопотери при таком остеклении существенны из-за отсутствия полиамидной вставки. Однако холодный алюминиевый профиль обладает рядом преимуществ:</p>
                            <ul>
                                <li>Легкий вес, что дает возможность установить окна даже в сооружения без несущих стен и основательного фундамента;</li>
                                <li>Простота сборки, что делает холодные металлоконструкции актуальными для обустройства веранды или хозяйственных построек;</li>
                                <li>Дешевизна. Поэтому такие конструкции особенно востребованы для нежилых помещений, например, лоджии, неотапливаемых технических сооружений.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3>Алюминиевый профиль позволяет изготовлять окна разных размеров и форм:</h3>
                    <div className='windowForms'>
                        <div>    
                            <h4>Стандартные</h4> 
                            <img src={standartWindow} alt='стандартные окна'/>
                        </div>
                        <div>
                            <h4>Арочные</h4>
                            <img src={archWindow} alt='арочные окна'/>
                        </div>
                        <div>
                            <h4>Панорамные</h4>
                            <img src={panoramicWindow} alt='панорамные окна'/>
                        </div>
                        <div>
                            <h4>Нестандартные</h4>
                            <img src={unstandartWindow} alt='нестандартные окна'/>
                        </div>
                    </div>

                    <h3>Виды открывания створок</h3>
                    <div className='AlBalconyVariants'>
                        <div>
                            <h4>Глухая</h4>
                            <img src={variantToOpen1} alt='глухая створка'/>
                        </div>
                        <div>
                            <h4>Поворотная</h4>
                            <img src={variantToOpen2} alt='поворотная створка'/>
                        </div>
                        <div>
                            <h4>Раздвижная</h4>
                            <img src={variantToOpen3} alt='раздвижная створка'/>
                        </div>
                        <div>
                            <h4>Откидная</h4>
                            <img src={variantToOpen4} alt='откидная створка'/>
                        </div>
                    </div>
                    <FindPrice/>
                    
                    
                    </div>
                </div>
            </div>
        </section>
    )
};