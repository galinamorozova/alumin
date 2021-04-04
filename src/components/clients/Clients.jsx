import React from 'react';

import mp from '../../images/mp.png';
import aksioma from '../../images/aksioma.png';
import armada from '../../images/armada.png';
import officemag from '../../images/officemag.png';
import pyaterochka from '../../images/5ka.svg';
import vita from '../../images/vita.svg';
import mirVkusa from '../../images/mirVkusa.png';
import rynok from '../../images/centrRynok.png';
import sakvoyazh from '../../images/sakvoyazh.png';
import stm from '../../images/stm.jpg';
import politeh from '../../images/vgtu.jpg';
import './clients.scss';

export default function Clients() {
    return(
        <section className="clients">
          <div className='container'>

          <h2>Наши клиенты:</h2>
            <div className='clientsWrapper'>
              <div className='clientName'>
                <img src={mp} alt='ТРЦ Московский проспект'/>
                <p>ТРЦ Московский проспект</p>
              </div>
              <div className='clientName'>
                <img src={aksioma} alt='Аксиома'/>
                <p>ТРЦ Аксиома</p>
              </div>
              <div className='clientName'>
                <img src={armada} alt='Армада'/>
                <p>ТРЦ Армада</p>
              </div>
              <div className='clientName'>
                <img src={officemag} alt='Офис маг'/>
                <p>гипермаркет товаров для офиса "Офисмаг"</p>
              </div>
              <div className='clientName'>
                <img src={pyaterochka} alt='Пятерочка'/>
                <p>сеть магазинов "Пятерочка</p>
              </div>
              <div className='clientName'>
                <img src={vita} alt='Аптека Вита'/>
                <p>Сеть аптек "ВИТА"</p>
              </div>
              <div className='clientName'>
                <img src={mirVkusa} alt='Мир вкуса'/>
                <p>сеть супермаркетов "Мир вкуса"</p>
              </div>
              <div className='clientName'>
                <img src={rynok} alt='Центральный рынок'/>
                <p>Центральный рынок "Воронежский"</p>
              </div>
              <div className='clientName'>
                <img src={sakvoyazh} alt='Саквояж здоровья'/>
                <p>Медицинский центр "Саквояж здоровья</p>
              </div>
              <div className='clientName'>
                <img src={stm} alt='СТМ'/>
                <p>группа компаний "СТМ"</p>
              </div>
              <div className='clientName'>
                <img src={politeh} alt='ВГТУ'/>
                <p>Воронежский государственный технический университет</p>
              </div>
                
              <p className='clientName'>и многие-многие другие</p>

            </div>
          </div>
        </section>
    );
}