import React, {useState} from 'react';
import './standartRollets.scss';
import SideMenu from '../../sideMenu/SideMenu';

import title1 from '../../../images/rollet/title1.jpg';
import title2 from '../../../images/rollet/title2.jpg';
import title3 from '../../../images/rollet/title3.jpg';
import pluses from '../../../images/rollet/pluses.jpg';
import prestige from '../../../images/rollet/prestige.png';
import security from '../../../images/rollet/security.jpg';
import trend from '../../../images/rollet/trend.jpg';
import avtoRollet from '../../../images/rollet/avtoRollet.jpg';
import handOpenRollet from '../../../images/rollet/handOpenRollet.jpg';

export default function StandartRollets() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='standartRollets'>
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
                                <h3>Роллеты для окон, дверей, балконов. Противовзломные роллеты</h3>
                                <div className='titleImage'>
                                <img src={title3} alt='роллета на окно'/>
                                <img src={title2} alt='роллета на дверь'/>
                                <img src={title1} alt='роллета на балкон'/>
                                </div>

                                <h3>преимущества</h3>
                                <div className='pluses'>
                                    <img src={pluses} alt='преимущества'/>
                                    <div>
                                        <h4>Защита от взлома</h4>
                                        <p>рольставни станут дополнительной преградой на пути злоумышленников</p>
                                    </div>
                                    <div>
                                        <h4>Шумоизоляция</h4>
                                        <p>уличный шум больше не помешает приятному отдыху и продуктивной работе</p>
                                    </div>
                                    <div>
                                        <h4>Защита от солнца</h4>
                                        <p>Цвет входной двери надолго останется насыщенным, а в доме удастся сохранить прохладу летом</p>
                                    </div>
                                </div>
                                <h3>виды рольставен</h3>
                                <div className='typeWrapper'>
                                    <div>
                                        <img src={prestige} alt='prestige'></img>
                                        <h4>Prestige</h4>
                                        <p>рольставни премиум-качества для эксклюзивных дизайнерских экстерьеров</p>
                                        <p>P1 класс взломостойкости</p>
                                        <p>Оптимальная защита от ветра</p>
                                        <p>Перфорированный и неперфорированный профили. <span>Перфорированные позволяют регулировать степень освещенности помещения</span></p>
                                        <p>Более 19 цветов</p>
                                        <p>Формы коробов: встроенные, круглые, полукруглые, 20° и 45°</p>
                                        <p>Рольставни со встроенной антимоскитной сеткой</p>
                                    </div>

                                    <div>
                                        <img src={security} alt='security'/>
                                        <h4>ПРОТИВОВЗЛОМНЫЕ Security</h4>
                                        <p>специализированные решения для объектов с высокими требованиями к безопасности</p>
                                        <p>P3-P5 классы защиты от взлома. <span>значительно больше безопасности</span></p>
                                        <p>Выдерживают ураганные ветры</p>
                                        <p>Перфорированный и неперфорированный профили. <span>Перфорированные позволяют регулировать степень освещенности помещения</span></p>
                                        <p>Более 18 цветов</p>
                                        <p>Формы коробов: встроенные, круглые, полукруглые, 20° и 45°</p>
                                        <p>Роллетные решетки как дополнительная опция</p>
                                    </div>

                                    <div>
                                        <img src={trend} alt='trend'/>
                                        <h4>Trend</h4>
                                        <p>доступное решение с базовыми функциями защиты</p>
                                        <p>Базовая антивандальная защита</p>
                                        <p>Базовый запас прочности</p>
                                        <p>Неперфорированный</p>
                                        <p>Более 7 популярных цветов</p>
                                        <p>Формы коробов: встроенные и 45°</p>
                                    </div>
                                </div>


                                <h3>виды управления</h3>
                                <div className='controlWrapper'>

                                    <img src={avtoRollet} alt='автоматическое управление'/>
                                    <p>Автоматическое управление<span> - комфорт в использовании и минимум 15 лет работы привода.</span></p>
                                    <div><img src={handOpenRollet} alt='ручное управление'/></div>
                                    <p>Ручное управление<span> «АЛЮТЕХ» предлагает: — ленточный привод; — шнуровой привод; — воротковый привод; — пружинно-инерционный механизм.</span></p>

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