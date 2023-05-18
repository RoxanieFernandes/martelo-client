import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CarouselImage1 from "../../img/image1.jpeg";
import CarouselImage2 from "../../img/image2.jpeg";
import CarouselImage3 from "../../img/image3.jpeg";
import CarouselImage4 from "../../img/image4.jpeg";
import CarouselImage5 from "../../img/image5.jpeg";
import CarouselImage6 from "../../img/image6.jpeg";
import CarouselImage7 from "../../img/image7.jpeg";
import "../Carousel/Carousel.css";

const images = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
];

const Carousel = () => {
  const slideshowRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      slideshowRef.current?.scrollWidth - slideshowRef.current?.offsetWidth || 0
    );
  }, []);

  return (
    <div className="Carousel">
      <motion.div
        ref={slideshowRef}
        className="slideshow-container"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 350 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          {images.map((image) => (
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
