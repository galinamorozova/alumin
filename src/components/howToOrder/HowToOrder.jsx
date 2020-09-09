import React from 'react';
import './howToOrder.scss';

import {NavLink} from "react-router-dom";

export default function HowToOrder() {
    return(
        <section className="order">
            <div className='container'>

                <h2>Как оформить заказ:</h2>
                <div className='orderWrapper'>
                    <i class="fas fa-share"></i>
                    <div>
                        <i class="fas fa-envelope-open-text"></i>
                        <p>Вы оставляете <NavLink to='/measuring'>заявку</NavLink></p>
                    </div>
                    
                    <div className='empty'></div>
                    <div>
                        <i class="fas fa-mobile-alt"></i>
                        <p> <NavLink to='/contact'>звоните</NavLink> в офис</p>
                    </div>
                    
                    <i class="fas fa-reply"></i>
                    <i class="fas fa-share"></i>
                    <div>
                        <i class="fas fa-phone-volume"></i>
                        <p>или заказываете <NavLink to='/callback'>обратный звонок</NavLink></p>
                    </div>
                    
                    <div>
                        <i class="fas fa-calculator"></i>
                        <p>Наш сотрудник незамедлительно связывается с Вами для уточнения деталей и составления предварительного расчета</p>
                    </div>
                    
                    <i class="fas fa-reply"></i>
                    <i class="fas fa-share"></i>
                    <div>
                        <i class="fas fa-ruler-combined"></i>
                        <p>Далее наши монтажники выезжают на замер, согласовав с Вами удобное для этого время. Замер бесплатен в черте города</p>
                    </div>
                    
                    <div>
                        <i class="fas fa-file-signature"></i>
                        <p>На основании данных замера мы составляем для Вас окончательное коммерческое предложение</p>
                    </div>
                    
                    <i class="fas fa-reply"></i>
                    <i class="fas fa-share"></i>
                    <div>
                        
                        <i class="fas fa-handshake"></i>
                        <p>Заключаем договор</p>
                    </div>

                    <div>
                        <i class="fas fa-drafting-compass"></i>
                        <p>осуществляется изготовление конструкции/ комплектование заказа</p>
                    </div>
                    
                    <i class="fas fa-reply"></i>
                    <div className='empty'></div>
                    
                    <div>
                        <i class="fas fa-tools"></i>
                        <p>В согласованные с Вами сроки проводим монтаж</p>
                    </div>
                    
                    <i class="fas fa-share"></i>
                    
                    <div>
                    <i class="fas fa-oil-can"></i>
                    <p>Осуществляем гарантийное/постгарантийное обслуживание. Большая часть нашей продукции представляет собой технически сложное изделие. Для корректной его работы необходимо проводить периодическое обслуживание</p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}