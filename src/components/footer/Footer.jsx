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
                        <NavLink to="gates">ворота</NavLink><br/>
                        <NavLink to="automation">автоматика</NavLink><br/>
                        <NavLink to="barrier">шлагбаумы</NavLink><br/>
                        <p>заборы</p>
                        <NavLink to="rollets">роллеты/рольставни</NavLink>
                    </div>
                    <div>
                        <NavLink to="aluConstructions">алюминиевые конструкции</NavLink>
                        <NavLink to="plasticConstructions">пластиковые конструкции</NavLink>
                        <p>противопожарное оборудование</p>
                        <NavLink to="automaticDoor">автоматические двери</NavLink>
                        <p>перегрузочное оборудование</p>
                    </div>
                    <div>
                        <h3>навигация по сайту:</h3>
                    </div>
                    <div>
                        <NavLink to="/culc">калькулятор</NavLink><br/>
                        <NavLink to="/howToOrder">как заказать</NavLink><br/>
                        <NavLink to="/manufactures">производители</NavLink><br/>
                        <p>наши обьекты</p>
                        <NavLink to="/contact">напишите нам</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
