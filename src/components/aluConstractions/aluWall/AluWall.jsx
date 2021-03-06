import React from 'react';
import './aluWall.scss';
import SideMenu from '../../sideMenu/SideMenu';
import FindPrice from '../../findPrice/FindPrice';

import warmAl from '../../../images/alumConstructions/warmAl.png';
import coldAl from '../../../images/alumConstructions/coldAl.png';
import aluWallTitle from '../../../images/alumConstructions/aluWall.jpeg';
import wallTask from '../../../images/alumConstructions/wallTask.jpeg';
import aluWall1 from '../../../images/alumConstructions/aluWall1.jpeg';
import aluWall2 from '../../../images/alumConstructions/aluWall2.jpeg';
import aluWall3 from '../../../images/alumConstructions/aluWall3.jpeg';
import aluWall4 from '../../../images/alumConstructions/aluWall4.jpeg';

export default function AluWall() { 
    return( 
        <section className='aluWall'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                    <h3>Алюминиевые перегородки</h3>
                    <img src={aluWallTitle} alt='алюминиевые перегородки'/>

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


                    <p>Перегородки, оснащенные профилем из алюминия, характеризуются разнообразными формами, конфигурациями, размерами, поэтому их устанавливают в доме, в административных учреждениях, в торговых, офисных центрах.</p>
                    <h3>Алюминиевые перегородки решают следующие задачи:</h3>
                    <div className='wallTask'>
                    <img src={wallTask} alt='задачи перегородок'/>
                    <ul>
                        <li> Зонирование помещения при помощи новой планировки, которая не требует согласования с инстанциями;</li>
                        <li> Создание удобной рабочей зоны для каждого конкретного сотрудника, в том числе приватных зон для руководителей;</li>
                        <li> Экономия места в здании.</li>
                    </ul>
                    </div>

                    <h4>Возможные варианты:</h4>
                    <p>цельностеклянные, рамные, комбинированные, раздвижные или стационарные перегородки. Их устанавливают как во всю высоту помещения «от пола до потолка», так и в виде мобильных конструкций. Последние – ограничивают прямой контакт рядом сидящих сотрудников или специалистов и клиентов.</p>
                    <div className='aluWallExample'>
                        <div><img src={aluWall1} alt='алюминиевая перегородка'/></div>
                        <div><img src={aluWall2} alt='алюминиевая перегородка'/></div>
                        <div><img src={aluWall4} alt='алюминиевая перегородка'/></div>
                        <div><img src={aluWall3} alt='алюминиевая перегородка'/></div>
                    </div>
                <FindPrice/>
                </div>
                </div>
            </div>
        </section>
    )
};