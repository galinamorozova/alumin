import React from 'react';
import './projects.scss';

import images from "../../images.json";
import ImageContainer from "./ImageContainer";

export default function projects() {
    return(
        <section className="projects">

            <div className="container">
        
                {images.map(res => {
                return (
                    <div key={res.id} className="wrapper">
                    <ImageContainer
                        src={res.urls.regular}
                        thumb={res.urls.thumb}
                        height={res.height}
                        width={res.width}
                        alt={res.alt_description}
                        title={res.title}
                    />
                    </div>
                );
                })}

        </div>

        </section>
    );
}