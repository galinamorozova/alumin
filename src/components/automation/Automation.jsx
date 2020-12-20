import React, {useState} from 'react';
import './automation.scss';
import SideMenu from '../../components/sideMenu/SideMenu';

import titleAvtomatic from '../../images/avtomation/title.png';
import ambo from '../../images/avtomation/ambo.png';
import levigato from '../../images/avtomation/levigato.png';
import roteo from '../../images/avtomation/roteo.png';
import scopio from '../../images/avtomation/scopio.png';
import targo from '../../images/avtomation/targo.png';
import asw from '../../images/avtomation/asw.png';


export default function Automation() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='automation'>
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
                                <img src={titleAvtomatic} alt='titleAvtomatic'/>
                                <h2>Автоматика для гаражных ворот</h2>
                                <div className='speedLevigato'>
                                    <div>
                                        <img src={levigato} alt='скоростной привод levigato'/>
                                        <p>Комплект поставки: привод, монтажный набор, 2 пульта, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>
                                        <h3>Скоростной привод для гаражных ворот Levigato LG-600F</h3>
                                        <p>Мощность 280 Вт, тяговое усилие 600Н, Smax = 8,4 м², скорость 0,2 м/с, интенсивность 18 ц/час, IP20</p>
                                    </div>
                                    <div>
                                        <h3>Скоростной привод для гаражных ворот Levigato LG-1000F</h3>
                                        <p>Мощность 400 Вт, тяговое усилие 1000Н, Smax = 16,2 м², скорость 0,2 м/с, интенсивность 18 ц/час, IP20</p>
                                    </div>
                                </div>
                                <div className='levigato'>
                                    <div>
                                        <img src={levigato} alt='привод levigato'/>
                                        <p>Комплект поставки: привод, монтажный набор, 2 пульта, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>
                                        <h3>Привод для гаражных ворот Levigato LG-800</h3>
                                        <p>Мощность 220 Вт, тяговое усилие 800Н, Smax = 11,2 м², скорость 0,15 м/с, интенсивность 18 ц/час, IP20</p>
                                    </div>
                                    <div>
                                        <h3>Привод для гаражных ворот Levigato LG-1200</h3>
                                        <p>Мощность 330 Вт, тяговое усилие 1200Н, Smax = 18,6 м², скорость 0,15 м/с, интенсивность 18 ц/час, IP20</p>
                                    </div>
                                    <div>
                                        <h3>Привод для гаражных ворот Levigato LG-500</h3>
                                        <p>Мощность 150 Вт, тяговое усилие 500Н, Smax = 8,4 м², скорость 0,14 м/с, интенсивность 10 ц/час, IP20</p>
                                    </div>
                                </div>

                                <h2>Автоматика для промышленных ворот</h2>
                                <div className='targo'>
                                    <div>
                                        <img src={targo} alt='привод targo'/>
                                        <p>Комплект поставки: привод, блок управления, монтажный набор, 2 пульта, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>
                                        <h3>Привод для промышленных ворот TARGO TR-3531-230KIT</h3>
                                        <p>Двигатель 230В, мощность 750 Вт, крутящий момент 35Н, частота вращения 31 об/мин, Smax = 12 м², интенсивность 25%, IP65</p>
                                    </div>
                                    <div>
                                        <h3>Привод для промышленных ворот TARGO TR-5024-230KIT</h3>
                                        <p>Двигатель 230В, мощность 670 Вт, крутящий момент 50Н, частота 24 об/мин, Smax = 18 м², интенсивность 25%, IP65</p>
                                    </div>
                                    <div>
                                        <h3>Привод для промышленных ворот TARGO TR-5024-400KIT</h3>
                                        <p>Двигатель 400В, мощность 610 Вт, крутящий момент 50Н, частота 24 об/мин, Smax = 18 м², интенсивность 60%, IP65</p>
                                    </div>
                                    <div>
                                        <h3>Привод для промышленных ворот TARGO TR-10024-400KIT</h3>
                                        <p>Двигатель 400В, мощность 1000 Вт, крутящий момент 100Н, частота 24 об/мин, Smax = 30 м², интенсивность 60%, IP65</p>
                                    </div>
                                    <div>
                                        <h3>Привод для промышленных ворот TARGO TR-13018-400KIT</h3>
                                        <p>Двигатель 400В, мощность 1000 Вт, крутящий момент 130Н, частота 18 об/мин, Smax = 42 м², интенсивность 60%, IP65</p>
                                    </div>
                                </div>

                                <h2>Автоматика для откатных ворот</h2>
                                <div className='roteo'>
                                    <div>
                                        <img src={roteo} alt='привод roteo'/>
                                        <p>Комплект поставки: привод, монтажный набор, 2 пульта, 2 ключа разблокировки, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>
                                        <h3>Привод для откатных ворот ROTEO RTО-500</h3>
                                        <p>Двигатель 230В, мощность 500 Вт, тяговое усилие 500Н, mmax = 500 кг, скорость 0,2 м/с, интенсивность 25%, IP44</p>
                                    </div>
                                    <div>
                                        <h3>Привод для откатных ворот ROTEO RTО-1000</h3>
                                        <p>Двигатель 230В, мощность 700 Вт, тяговое усилие 700Н, mmax = 1000 кг, скорость 0,2 м/с, интенсивность 25%, IP44</p>
                                    </div>
                                    <div>
                                        <h3>Привод для откатных ворот ROTEO RTО-2000</h3>
                                        <p>Двигатель 230В, мощность 1000 Вт, тяговое усилие 1100Н, mmax = 2000 кг, скорость 0,2 м/с, интенсивность 50%, IP44</p>
                                    </div>
                                </div>

                                <h2>Автоматика для распашных ворот</h2>
                                <div className='scopio'>
                                    <div>
                                        <img src={scopio} alt='привод scopio'/>
                                        <p>Комплект поставки: 2 привода, блок управления, монтажный набор, ключ разблокировки, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>
                                        <h3>Телескопический привод для распашных ворот SCOPIO SC‑3000SKIT</h3>
                                        <p>Двигатель 230В, мощность 150 Вт, тяговое усилие 3000Н, mmax = 350 кг, скорость 0,16 м/с, интенсивность 25%, IP54</p>
                                    </div>
                                    <div>    
                                        <h3>Телескопический привод для распашных ворот SCOPIO SC‑3000SKIT-N</h3>
                                        <p>Двигатель 230В, мощность 150 Вт, тяговое усилие 3000Н, mmax = 350 кг, скорость 0,16 м/с, интенсивность 25%, IP54</p>
                                    </div>
                                </div>
                                <div className='ambo'>
                                    <div>
                                        <img src={ambo} alt='привод ambo'/>
                                        <p>Комплект поставки: 2 привода, блок управления, монтажный набор, ключ разблокировки, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div>     
                                        <h3>Комплект приводов для распашных ворот ALUTECH AMBO AM5000KIT</h3>
                                        <p>Двигатель 230В, мощность 150 Вт, тяговое усилие 3000Н, mmax = 500 кг, скорость 0,16 м/с, интенсивность 25%, IP54</p>
                                    </div>
                                </div>
                                <div className='asw'>
                                    <div>
                                        <img src={asw} alt='привод asw'/>
                                        <p>Комплект поставки: 2 привода, блок управления, монтажный набор, руководство по монтажу и эксплуатации</p>
                                    </div>
                                    <div> 
                                        <h3>Комплект приводов для распашных ворот AN-Motors ASW4000KIT</h3>
                                        <p>Двигатель 230В, мощность 120 Вт, тяговое усилие 320Н, mmax = 400 кг, скорость 0,2 м/с, интенсивность 25%, IP54</p>
                                    </div>
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