//import React, {useState} from 'react';
import React from 'react';
import './products.scss';

// import slide1 from '../../images/promo3.jpg';
// import slide2 from '../../images/promo2.jpg';
// import slide3 from '../../images/promo1.png';
import Catalog from '../сatalog/Catalog';
import Clients from '../clients/Clients';



export default function Products() {
    // const [activeDot, setActiveDot] = useState(1);

    // const decreaseSlide = () => {
    //     if (activeDot <= 1)
    //         setActiveDot(activeDot+2);
    //     else 
    //         setActiveDot(activeDot-1);
    // };
    // const increaseSlide = () => {

    //     if (activeDot >= 3)
    //         setActiveDot(activeDot-2);
    //     else 
    //         setActiveDot(activeDot+1);
    // };

    return(
     <div>
        <section className="products">
          <div className='container'>
             {/* <div className="gallery-container">
                {activeDot === 1 && 
                    <div className="slide active">
                        <img src={slide1} alt="Здесь была информация об акции" />
                    </div>
                }
                {activeDot === 2 && 
                    <div className="slide">
                        <img src={slide2} alt="Здесь была информация об акции"/>  
                    </div>
                }
                {activeDot === 3 && 
                    <div className="slide">
                        <img src={slide3} alt="Здесь была информация об акции"/>
                    </div>
                }
                    
                    <div className="dots">
                        <button className={activeDot === 1 ? '.dot activeDot' : ''} onClick={() => setActiveDot(1)}></button>
                        <button className={activeDot === 2 ? '.dot activeDot' : ''} onClick={() => setActiveDot(2)}></button>
                        <button className={activeDot === 3 ? '.dot activeDot' : ''} onClick={() => setActiveDot(3)}></button>
                    </div>

                    <div className= "arrow-prev" onClick={decreaseSlide}></div>
                    <div className="arrow-next" onClick={increaseSlide}></div>
                    
                </div> */}
            </div>
        </section>
        <Catalog />
        <Clients />
    </div>
    );
}