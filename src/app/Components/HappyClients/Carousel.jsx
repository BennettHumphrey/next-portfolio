import React, { useState, useEffect } from "react";

//Import styles from parent

const Carousel = ({ data, options, styles }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);

  useEffect(() => {
    if (options.autoplay) {
      const interval = setInterval(() => {
        setSlideCounter((prevSlideCounter) => {
          const newSlideCounter = prevSlideCounter + 1;

          if (newSlideCounter >= options.autoplayDelay) {
            nextSlide();
            return 0; // Reset slide counter
          }

          return newSlideCounter;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSlideCounter(0);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setSlideCounter(0);
  };

  const goToSlide = (index) => {
    setActiveSlideIndex(index);
    setSlideCounter(0);
  };

  //   <div className={`${styles.slides} ${styles.fade} ${
  //     index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
  //   }`}
  //   key={index}>
  //   <img className={`${styles.img}`} alt={slide.title} src={slide[0]} />
  // </div>

  return (
    <div className={`${styles.slideshowContainer} py-10`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center py-10 underline">Happy Clients</h2>
          {data.map((slide, index) => (
            <a
              target="_blank"
              href={slide.href}
              key={index}
              className={`${styles.slides} ${styles.fade} ${
                index === activeSlideIndex
                  ? styles.slidesActive
                  : styles.slidesInactive
              }`}
            >
              <div className="flex flex-col">
                <h3 className="text-center shadow-sm text-black text-2xl md:text-3xl font-semibold tracking-wider xsm:pb-4">
                  {slide.title}
                </h3>
                {options.img && (
                  <img className="z-20 max-h-[75vh]" alt={slide.title} src={slide.img} />
                )}
                <div className={`${styles.dots}`}>
                  {data.map((x, index) => (
                    <span
                      key={index}
                      className={`${styles.dot} ${
                        index === activeSlideIndex ? styles.active : ""
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
                <p className="shadow-sm text-black text-lg sm:text-xl md:text-2xl text-center xsm:py-5">
                  {slide.text}
                </p>
              </div>
            </a>
          ))}
      <p className={`${styles.next}`} onClick={nextSlide}>
        &#10095;
      </p>
      <p className={`${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </p>
    </div>
  );
};

export default Carousel;
