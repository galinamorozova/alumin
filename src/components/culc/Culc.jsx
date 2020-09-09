import React from 'react';
import './culc.scss';


export default function Culc() {
    return(
        <section className='culc'>
            <div className='container'>
                <p>Калькулятор позволит быстро узнать стоимость роллетных систем, секционной или въездной группы ворот с учетом как основных, так и дополнительных характеристик.</p>
                <p><strong>Обратите внимание!</strong> Стоимость изделия – <strong>ориентировочная</strong>, она сформирована на основе единого розничного прайс-листа для вашего региона. Реальная цена может отличаться в зависимости от комплектации заказа.</p>
                <iframe title="alutech_iframe" src="//calc.alute.ch/#?alutsize=&amp;email=sidh_g@mail.ru&amp;lock=true&amp;url=http://aservis-pro.ru/&amp;css=&amp;lang=ru&amp;type=&amp;calc=['gate','shutter','ads400']&amp;alutpanels=&amp;alutseries=&amp;alutmount=&amp;alutbox=&amp;alutcolor=&amp;alutcontrol=&amp;alutoptions=&amp;alutregion=72181" width="100%" height="1450" id="alutech-iframe" scrolling="no" frameborder="0"></iframe>
            </div>
        </section>
        );
    }