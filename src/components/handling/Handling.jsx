import React from 'react';
import Callback from '../callback/Callback';
import './handling.scss';

export default function Handling() {
    return(
        <section className='handling'>
            <p>Уважаемые клиенты! В настоящий момент сайт находится в процессе разработки, 
            поэтому всю информацию о реализуемом нами перегрузочном оборудовании марки АЛЮТЕХ Вы 
            можете узнать, связавшись с нами любым удобным способом!</p>
            <Callback/>
        </section>
        );
    }