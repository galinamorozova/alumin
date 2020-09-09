import React from 'react';
import './contact.scss';
import ContactMap from '../ContactMap/ContactMap';


export default function Contact() {
    return(
        <section className="contacts">
            <div className='container'>

                <h2>Будьте с нами на связи!</h2>
                <p>Свяжитесь с нами удобным для Вас способом, задайте свой вопрос или оставьте комментарий, а мы, со своей стороны, постараемся ответить Вам в максимально короткие сроки!</p>

                <div className="map-message">

                        <div className="map">
                    
                            <h4>наш офис</h4>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Воронеж, Московский пр-т, 11И, оф. 18</span> <br/>
                            <i className="fas fa-mobile-alt"></i>
                            <a href="tel:+74732287672">+7 (473) 228-76-72</a><br/>
                            <i className="fas fa-envelope mail"></i>
                            <span className='mail'>2287672@mail.ru</span>
                            <i className="fas fa-envelope mail"></i>
                            <span className='mail'>alyumin.servis@mail.ru</span>
                            <ContactMap/>

                        </div>
                        <div className="drop-message">
                            <h4>Написать самому главному</h4>
                            <div className="message-form">
                                <input type="text" placeholder="Имя *" required/>
                                <input type="email" placeholder="Email *" required/>
                                <input type="phone" placeholder="Телефон *" required/>
                                <input type="text" placeholder="Сообщение *" required/>
                            </div>
                            <label><input type='checkbox'/>Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006</label> <br/>
                            <button type='submit'>Отправить</button>
                            
                            
                        </div>
                    </div>



            </div>
        </section>
    );
}