import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footerWrapper">
                    <div>
                        <h3>Контакты:</h3>
                    </div>
                    <div>
                        <a href="tel:+74732287672">+7 (473) 228-76-72</a>
                        <p>e-mail:2287672@mail.ru</p>
                        <p>e-mail: alyumin.servis@mail.ru</p>
                        <p>адрес: Воронеж, Московский пр-т, 11И, оф. 18</p>
                        <p>График работы: пн-пт 9.00-18.00</p>
                    </div>
                    <div className="footerProducts">
                        <h3>продукция:</h3>
                    </div>
                    <div>
                        <NavLink to="gates">ворота</NavLink>
                        <p>автоматика</p>
                        <p>шлагбаумы</p>
                        <p>заборы</p>
                        <p>роллеты/рольставни</p>
                    </div>
                    <div>
                        <p>алюминиевые конструкции</p>
                        <p>пластиковые конструкции</p>
                        <p>противопожарное оборудование</p>
                        <p>автоматические двери</p>
                        <p>перегрузочное оборудование</p>
                    </div>
                    <div>
                        <h3>навигация по сайту:</h3>
                    </div>
                    <div>
                        <NavLink to="/culc">калькулятор</NavLink>
                        <NavLink to="/howToOrder">как заказать</NavLink>
                        <p>производители</p>
                        <p>наши обьекты</p>
                        <NavLink to="/contact">напишите нам</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
