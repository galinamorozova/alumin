import React from 'react';
import emailjs from 'emailjs-com';
import './callback.scss';

export default function Callback() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_tve281c', 'template_oxuwb3c', e.target, 'user_hmNRnq2ruQhkVMOyTfcHi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
           e.target.reset()
          // alert('Отправлено')
      }

    return( 
        <section className='callback'>
            <h2>Оставьте свой номер телефона - и мы Вам перезвоним!</h2>
            <form onSubmit={sendEmail}>
                <div className='callbackWrapper'>
                    <input type="text" name='name' placeholder="Имя *" required/>
                    <input type="phone" name='phone' placeholder="Телефон *" required/>
                    <input type="text" name='message' placeholder="Комментарий"/>
                </div>
                <label><input type='checkbox' required/>Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006</label> <br/>
                <button type='submit' value='send'>Отправить</button>
            </form>

        </section>
    );
}