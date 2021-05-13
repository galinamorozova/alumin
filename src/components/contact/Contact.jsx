import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import ContactMap from '../ContactMap/ContactMap';


export default function Contact() {
   
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_tve281c', 'template_lbuko4l', e.target, 'user_hmNRnq2ruQhkVMOyTfcHi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
           e.target.reset()
          // alert('Отправлено')
      }
    
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
                            <i className="fas fa-mobile-alt"></i>
                            <a href="tel:+79081428392">+7 (908) 142-83-92</a><br/>
                            <i className="fas fa-envelope mail"></i>
                            <span className='mail'>2287672@mail.ru</span>
                            <i className="fas fa-envelope mail"></i>
                            <span className='mail'>alyumin.servis@mail.ru</span>
                            <ContactMap/>

                        </div>

                        <form className="drop-message" onSubmit={sendEmail}>
                            
                                <h4>Написать самому главному</h4>
                                <div className="message-form" >
                                    <input type="text" placeholder="Имя *" name='name' required/>
                                    <input type="email" placeholder="Email *" required name="email"/>
                                    <input type="phone" placeholder="Телефон *" required name="phone"/>
                                    <textarea type="text" placeholder="Сообщение *" required name='message'/>
                                </div>
                                <label><input type='checkbox' required/>Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006</label> <br/>
                                <button type='submit'>Отправить</button>
        
                        </form>
                    </div>



            </div>
        </section>
    );
}