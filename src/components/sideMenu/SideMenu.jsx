import React, {useState} from 'react';
import './sideMenu.scss';
import {NavLink} from "react-router-dom";

export default function SideMenu() {

    const [gateMenuActive, setGateMenuActive] = useState(false);
    const [rolletMenuActive, setRolletMenuActive] = useState(false);
    const [alConMenuActive, setAlConMenuActive] = useState(false);
    const [plConMenuActive, setPlConMenuActive] = useState(false);
    const [fenceMenuActive, setFenceMenuActive] = useState(false);
    const [fireMenuActive, setFireMenuActive] = useState(false);

    return(
<div className='sideMenu'>
    <ul>
     <li className='menu_item' onClick={() => setGateMenuActive(!gateMenuActive) }> <i className="fas fa-grip-lines-vertical"></i> <i className="fas fa-chevron-down"></i>ворота
        <ul className='submenu'>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'} >
            <NavLink to='/garage'>гаражные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/industrial'>промышленные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/doubleLeaf'>въездные распашные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/sliding'>въездные откатные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/rolletsGates'>роллетные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/panoramic'>панорамные</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/fast'>скоростные ворота</NavLink></li>
            <li className={ gateMenuActive ? 'submenu_item_gate active' : 'submenu_item'}>
            <NavLink to='/wicket'>отдельная калитка</NavLink></li>
            {/* <li className='submenu_item'>
            <NavLink to='/fasadeWicket'>калитка в фасаде</NavLink></li> */}
        </ul>
    </li>
    <li className='menu_item'> 
            <NavLink to='/automation'><i class="fas fa-grip-lines-vertical"/>автоматика</NavLink></li>
    <li className='menu_item'> 
    <NavLink to='/barrier'><i class="fas fa-grip-lines-vertical"></i> шлагбаум</NavLink></li>
    <li className='menu_item'onClick={() => setRolletMenuActive(!rolletMenuActive) }><i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>роллеты/рольставни
        <ul className='submenu'>
            <li className={ rolletMenuActive ? 'submenu_item_rollet active' : 'submenu_item'}>
            <NavLink to='/standartRollets'>роллеты на окна/двери/балкон. Противовзломные роллеты</NavLink></li>
            <li className={ rolletMenuActive ? 'submenu_item_rollet active' : 'submenu_item'}>
            <NavLink to='/rolletsGrid'>роллетные решетки</NavLink></li>
            <li className={ rolletMenuActive ? 'submenu_item_rollet active' : 'submenu_item'}>
            <NavLink to='/rolletsGates'>роллетные ворота</NavLink></li>
            <li className={ rolletMenuActive ? 'submenu_item_rollet active' : 'submenu_item'}>
            <NavLink to='/transparentRollet'>прозрачные роллеты</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={() => setAlConMenuActive(!alConMenuActive) }> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"/>алюминиевые конструкции
        <ul className='submenu'>
            <li className={ alConMenuActive ? 'submenu_item_alCon active' : 'submenu_item'}>
            <NavLink to='/aluFasade'>фасады</NavLink></li>
            <li className={ alConMenuActive ? 'submenu_item_alCon active' : 'submenu_item'}>
            <NavLink to='/aluBalcony'>лоджии</NavLink></li>
            <li className={ alConMenuActive ? 'submenu_item_alCon active' : 'submenu_item'}>
            <NavLink to='/aluDoor'>двери</NavLink></li>
            <li className={ alConMenuActive ? 'submenu_item_alCon active' : 'submenu_item'}>
            <NavLink to='/aluWindow'>окна</NavLink></li>
            <li className={ alConMenuActive ? 'submenu_item_alCon active' : 'submenu_item'}>
            <NavLink to='/aluWall'>перегородки</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={() => setPlConMenuActive(!plConMenuActive) }> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>пластиковые конструкции
        <ul className='submenu'>
            <li className={ plConMenuActive ? 'submenu_item_plCon active' : 'submenu_item'}>
            <NavLink to='/plasticWindow'>окна</NavLink></li>
            <li className={ plConMenuActive ? 'submenu_item_plCon active' : 'submenu_item'}>
            <NavLink to='/plasticDoor'>двери</NavLink></li>
            <li className={ plConMenuActive ? 'submenu_item_plCon active' : 'submenu_item'}>
            <NavLink to='/plasticWall'>перегородки</NavLink></li>
        </ul>
    </li>
    <li className='menu_item' onClick={() => setFenceMenuActive(!fenceMenuActive) }> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>заборы
        <ul className='submenu'>
            <li className={ fenceMenuActive ? 'submenu_item_fence active' : 'submenu_item'}>
            <NavLink to='/3d'>3D-сетка</NavLink></li>
            <li className={ fenceMenuActive ? 'submenu_item_fence active' : 'submenu_item'}>
            <NavLink to='/picket'>из евроштакетника</NavLink></li>
        </ul>
    </li>
    <li className='menu_item'> 
        <NavLink to='/automaticDoor'><i class="fas fa-grip-lines-vertical"></i> автоматические двери</NavLink></li> 
    <li className='menu_item' onClick={() => setFireMenuActive(!fireMenuActive) }> <i class="fas fa-grip-lines-vertical"></i> <i class="fas fa-chevron-down"></i>противопожарное оборудование
        <ul className='submenu'>
            <li className={ fireMenuActive ? 'submenu_item_fire active' : 'submenu_item'}>противопожарные ворота</li>
            <li className={ fireMenuActive ? 'submenu_item_fire active' : 'submenu_item'}>противоподарные шторы</li>
            <li className={ fireMenuActive ? 'submenu_item_fire active' : 'submenu_item'}>противопожарные завесы</li>
        </ul>
        </li>
        <li className='menu_item'> <i class="fas fa-grip-lines-vertical"></i> перегрузочное оборудование</li>
</ul> 
</div> 
     
    );
    }