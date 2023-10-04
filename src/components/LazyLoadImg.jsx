import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/* eslint-disable react/prop-types */
function Img({ src, className }) {
  return (
    <LazyLoadImage className={className || ""} alt="" effect="blur" src={src} />
  );
}

export default Img;
