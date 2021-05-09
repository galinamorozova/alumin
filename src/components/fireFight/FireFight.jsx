import React from 'react';
import Callback from '../callback/Callback';
import './fireFight.scss';

export default function FireFight() {
    return(
        <section className='fireFight'>
            <p>Уважаемые клиенты! В настоящий момент сайт находится в процессе разработки, 
            поэтому всю информацию о реализуемом нами противопожарном оборудовании Вы 
            можете узнать, связавшись с нами любым удобным способом!</p>
            <Callback/>
        </section>
        );
    }