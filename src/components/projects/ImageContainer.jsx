import React from "react";
import "./imageContainer.scss";

import useIntersectionObserver from "../../hooks/UseIntersectionObserver";

const ImageContainer = props => {

    const ref = React.useRef();
    const [isVisible, setIsVisible] = React.useState(false);
    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
            setIsVisible(true);
            observerElement.unobserve(ref.current);
        }
        }
    });
    const aspectRatio = (props.height / props.width);
  return (
      <div ref={ref} className="image-container" style={{ paddingBottom: `${aspectRatio}%` }}>
      {isVisible && (
        <React.Fragment>
            <img className="image" src={props.src} alt={props.alt} />
            <p>{props.title}</p>
        </React.Fragment>
       )}
    </div>
    );
  };

  export default ImageContainer;