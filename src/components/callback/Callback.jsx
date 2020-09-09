import React from 'react';
import './callback.scss';

export default function Callback() {
    return( 
        <section className='callback'>
            <h2>Оставьте свой номер телефона - и мы Вам перезвоним!</h2>
            <form>
                <div className='callbackWrapper'>
                    <input type="text" name='name' placeholder="Имя *" required/>
                    <input type="phone" name='phone' placeholder="Телефон *" required/>
                    <input type="text" name='comment' placeholder="Комментарий"/>
                </div>
                <label><input type='checkbox'/>Согласие лица на обработку персональных данных в соответствии с ФЗ №152 от 27.07.2006</label> <br/>
                <button type='submit' value='send'>Отправить</button>
            </form>

        </section>
    );
}