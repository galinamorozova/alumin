import React from 'react';
import './sideMenu.scss';
import {NavLink} from "react-router-dom";

export default function SideMenu() {

    function showMenu (event) {
        let target = event.target;
        let submenu = target.querySelectorAll();
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
     <li className='menu_item' onClick={showMenu}> <i className="fas fa-grip-lines-vertical"></i> <i className="fas fa-chevron-down"></i>ворота
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
            <NavLink to='/rolletsGates'>роллетные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/panoramic'>панорамные</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/fast'>скоростные ворота</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/wicket'>отдельная калитка</NavLink></li>
            {/* <li className='submenu_item'>
            <NavLink to='/fasadeWicket'>калитка в фасаде</NavLink></li> */}
        </ul>
    </li>
    <li className='menu_item'> 
            <NavLink to='/automation'><i class="fas fa-grip-lines-vertical"/>автоматика</NavLink></li>
    <li className='menu_item'> 
    <NavLink to='/barrier'><i class="fas fa-grip-lines-vertical"></i> шлагбаум</NavLink></li>
    <li className='menu_item' onClick={showMenu}><i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>роллеты/рольставни
        <ul className='submenu'>
            <li className='submenu_item'>
            <NavLink to='/standartRollets'>роллеты на окна/двери/балкон. Противовзломные роллеты</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/rolletsGrid'>роллетные решетки</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/rolletsGates'>роллетные ворота</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/transparentRollet'>прозрачные роллеты</NavLink></li>
        </ul>
    </li>
    <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> перегрузочное оборудование</li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"/>алюминиевые конструкции
        <ul className='submenu'>
            <li className='submenu_item'>
            <NavLink to='/aluFasade'>фасады</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/aluBalcony'>лоджии</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/aluDoor'>двери</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/aluWindow'>окна</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/aluWall'>перегородки</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>пластиковые конструкции
        <ul className='submenu'>
            <li className='submenu_item'>
            <NavLink to='/plasticWindow'>окна</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/plasticDoor'>двери</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/plasticWall'>перегородки</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>заборы
        <ul className='submenu'>
            <li className='submenu_item'>
            <NavLink to='/3d'>3D-сетка</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/picket'>из евроштакетника</NavLink></li>
            <li className='submenu_item'>
            <NavLink to='/metalFence'>из профильного листа</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={showMenu}> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>противопожарное оборудование
        <ul className='submenu'>
            <li className='submenu_item'>противопожарные ворота</li>
            <li className='submenu_item'>противоподарные шторы</li>
            <li className='submenu_item'>противопожарные завесы</li>
        </ul>
        </li>
        <li className='menu_item'> 
        <NavLink to='/automaticDoor'><i class="fas fa-grip-lines-vertical"></i> автоматические двери</NavLink></li>
</ul>  
</div> 
     
    );
    }