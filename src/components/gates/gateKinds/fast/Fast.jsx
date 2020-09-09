import React, {useState} from 'react';
import './fast.scss';
import SideMenu from '../../../sideMenu/SideMenu';


export default function Fast() {

    const [activeTab, setActiveTab] = useState(1);
    
    return( 
        <section className='fastGates'>
            <div className='container'>

                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>
                        <div className='buttonWrapper'>
                            <button autoFocus={true} onSelectCapture={true}  onClick={() => setActiveTab(1)}>alutech</button>
                            <button onClick={() => setActiveTab(2)}>dorhan</button>
                            <button onClick={() => setActiveTab(3)}>hermann</button>
                        </div>
                        {activeTab === 1 && 
                            <div className='content'>контент</div>
                        }
                        {activeTab === 2 && 
                            <div className='content'>контент2</div>
                        }
                        {activeTab === 3 && 
                            <div className='content'>контент3</div>
                        }
                    </div>
                    

                </div>
            </div>
        </section>
    );
}