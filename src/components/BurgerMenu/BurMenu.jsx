import React from 'react';
import {NavLink} from "react-router-dom";
import './burMenu.scss';


export default function BurMenu({active, setActive}) {

    
    
    return( 
        <section className={ active ? 'burger-menu active' : 'burger-menu'} >
            <NavLink className='burger-link'  to="/products" onClick={() => setActive(!active) } >продукция</NavLink>
            <div className='sub-link'>
                <NavLink className='sub-link' to='/gates' onClick={() => setActive(!active) }> - ворота</NavLink>
                <NavLink className='sub-link' to='/automation' onClick={() => setActive(!active) }> - автоматика</NavLink>
                <NavLink className='sub-link' to='/barrier' onClick={() => setActive(!active) }> - шлагбаум</NavLink>
                <NavLink className='sub-link' to='/rollets' onClick={() => setActive(!active) }> - роллеты/рольставни</NavLink>
                <NavLink className='sub-link' to='/aluConstructions' onClick={() => setActive(!active) }> - алюминиевые конструкции</NavLink>
                <NavLink className='sub-link' to='/plasticConstructions' onClick={() => setActive(!active) }> - пластиковые конструкции</NavLink>
                <NavLink className='sub-link' to='/fence' onClick={() => setActive(!active) }> - заборы</NavLink>
                <NavLink className='sub-link' to='/automaticDoor' onClick={() => setActive(!active) }> - автоматические двери</NavLink>
                <NavLink className='sub-link' to='/fireFight' onClick={() => setActive(!active) }> - противопожарное оборудование</NavLink>
                <NavLink className='sub-link' to='/handling' onClick={() => setActive(!active) }> - перегрузочное оборудование</NavLink>
            </div>
            <NavLink className='burger-link' to="/howToOrder" onClick={() => setActive(!active) }>как заказать</NavLink>
            <NavLink className='burger-link' to="/manufactures" onClick={() => setActive(!active) }>производители</NavLink>
            <NavLink className='burger-link' to="/projects" onClick={() => setActive(!active) }>наши обьекты</NavLink>
            <NavLink className='burger-link' to="/contact" onClick={() => setActive(!active) }>контакты</NavLink>  
        </section>
        );
    }