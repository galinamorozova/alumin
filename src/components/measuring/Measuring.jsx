import React from 'react';
import './measuring.scss';

export default function Measuring() {
    return( 
        <section className='measuring'>
            <h2>Оставьте свою заявку на бесплатный* замер - и мы с Вами свяжемся!</h2>
            <form>
                <div className='measuringWrapper'>
                    <input type="text" name='name' placeholder="Имя *" required/>
                    <input type="phone" name='phone' placeholder="Телефон *" required/>
                    <input type="text" name='address' placeholder="Адрес объекта заявки *" required/>
                    <input type="text" name='comment' placeholder="Комментарий"/>
                    <p>* Замер бесплатен в черте города Воронежа</p>
                </div>
                <label><input type='checkbox'/>Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006</label> <br/>
                <button type='submit' value='send'>Отправить</button>
                
            </form>

        </section>
    );
}