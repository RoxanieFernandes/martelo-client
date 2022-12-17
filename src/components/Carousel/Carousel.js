import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../Carousel/Carousel.css";

import image1 from "../../img/image1.jpeg";
import image2 from "../../img/image2.jpeg";
import image3 from "../../img/image3.jpeg";
import image4 from "../../img/image4.jpeg";

const images = [image1, image2, image3, image4];

const Carousel = () => {
  
  const slideshow = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(slideshow.current?.scrollWidth - slideshow.current?.offsetWidth)
  }, [])

  return (
    <div className="Carousel">
      <motion.div
        ref={slideshow}
        className="slideshow-container"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="images carousel" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
