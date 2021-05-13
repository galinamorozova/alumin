import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default function footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footerWrapper">
                    <div className='mobileEmpty'>
                        <h3>Контакты:</h3>
                    </div>
                    <div>
                        <a href="tel:+74732287672">+7 (473) 228-76-72</a><br/>
                        <a href="tel:+79081428392">+7 (908) 142-83-92</a>
                        <p>2287672@mail.ru</p>
                        <p>alyumin.servis@mail.ru</p>
                        <p>г.Воронеж, Московский пр-т, 11И, оф. 18</p>
                       
                    </div>
                    <div className="footerProducts">
                        <h3>продукция:</h3>
                    </div>
                    <div className='mobileEmpty'>
                        <NavLink to="gates">ворота</NavLink><br/>
                        <NavLink to="automation">автоматика</NavLink><br/>
                        <NavLink to="barrier">шлагбаумы</NavLink><br/>
                        <NavLink to="fence">заборы</NavLink><br/>
                        <NavLink to="rollets">роллеты/рольставни</NavLink>
                    </div>
                    <div className='mobileEmpty'>
                        <NavLink to="aluConstructions">алюминиевые конструкции</NavLink>
                        <NavLink to="plasticConstructions">пластиковые конструкции</NavLink>
                        <NavLink to='fireFight'>противопожарное оборудование</NavLink>
                        <NavLink to="automaticDoor">автоматические двери</NavLink>
                        <NavLink to='handling'>перегрузочное оборудование</NavLink>
                    </div>
                    <div className='mobileEmpty'>
                        <h3 className='mobileEmpty'>навигация по сайту:</h3>
                    </div>
                    <div className='footerNavigation'>
                        <NavLink to="/culc">калькулятор</NavLink><br/>
                        <NavLink to="/howToOrder">как заказать</NavLink><br/>
                        <NavLink to="/manufactures">производители</NavLink><br/>
                        <NavLink to="/projects">наши обьекты</NavLink><br/>
                        <NavLink to="/contact">напишите нам</NavLink>
                    </div>
                </div>
                <div className='authors'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>, <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> and <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </section>
    );
}
