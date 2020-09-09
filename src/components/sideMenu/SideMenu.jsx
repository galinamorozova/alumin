import React from 'react';
import './sideMenu.scss';
import {NavLink} from "react-router-dom";

export default function SideMenu() {

    function showMenu (event) {
        let target = event.target;
        let submenu = target.querySelectorAll('.submenu');
        let arrow = target.getElementsByClassName('fas fa-chevron-down');
        for (let i = 0; i < submenu.length; i++) {
            if (submenu[i].style.display === 'none') {
                submenu[i].style.display = 'block';
                arrow[i].style.transform = 'rotateZ(0deg)';
                arrow[i].style.color = '#43a906';
            } else {
                submenu[i].style.display = 'none';
                arrow[i].style.transform = 'rotateZ(-90deg)';
                arrow[i].style.color = '#393939';    
            };
        };
    }

    return(
<div className='sideMenu'>
    <ul>
     <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>ворота
        <ul className='submenu'>
            <li className='submenu_item'>
            <NavLink to='/garage'>гаражные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/industrial'>промышленные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/doubleLeaf'>въездные распашные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/sliding'>въездные откатные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/panoramic'>панорамные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/fast'>скоростные ворота</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/wicket'>отдельная калитка</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/fasadeWicket'>калитка в фасаде</NavLink></li>
        </ul>
    </li>
    <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> автоматика</li>
    <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> шлагбаум</li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>роллеты/рольставни
        <ul className='submenu'>
            <li className='submenu_item'>стандартные роллеты</li>
            <li className='submenu_item'>роллеты улучшенного профиля</li>
            <li className='submenu_item'>противовзломные роллеты</li>
            <li className='submenu_item'>роллетные решетки</li>
            <li className='submenu_item'>роллетные ворота</li>
        </ul>
    </li>
    <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> перегрузочное оборудование</li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>алюминиевые конструкции
        <ul className='submenu'>
            <li className='submenu_item'>фасады</li>
            <li className='submenu_item'>лоджии</li>
            <li className='submenu_item'>двери</li>
            <li className='submenu_item'>окна</li>
            <li className='submenu_item'>перегородки</li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>пластиковые конструкции
        <ul className='submenu'>
            <li className='submenu_item'>окна</li>
            <li className='submenu_item'>двери</li>
            <li className='submenu_item'>перегородки</li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>заборы
        <ul className='submenu'>
            <li className='submenu_item'>3D-сетка</li>
            <li className='submenu_item'>из евроштакетника</li>
            <li className='submenu_item'>из профильного листа</li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>противопожарное оборудование
        <ul className='submenu'>
            <li className='submenu_item'>противопожарнsе ворота</li>
            <li className='submenu_item'>противоподарные шторы</li>
            <li className='submenu_item'>противопожарные завесы</li>
        </ul>
        </li>
        <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> автоматические двери</li>
</ul>  
</div> 
     
    );
    }