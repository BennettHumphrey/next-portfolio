import React from 'react'
import Carousel from './Carousel'
import defaultStyles from './Carousel.module.css';
import { heroSlides } from './heroSlides';

const HappyCustomers = () => {

    const carouselOptions = {
        autoplay: true,
        autoplayDelay: 8,
        line: false,
        img: true,
      }



    return (
    <div id='happy'>
        <Carousel styles={defaultStyles} options={carouselOptions} data={heroSlides} />
    </div>
  )
}

export default HappyCustomers