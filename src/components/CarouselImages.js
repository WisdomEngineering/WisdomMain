import React from 'react';
import { Carousel } from 'react-bootstrap';
import mainCarousel1 from '../images/carousel/main1.jpg';
import mainCarousel2 from '../images/carousel/main2.jpg';
import mainCarousel3 from '../images/carousel/main3.jpg';
import mainCarousel4 from '../images/carousel/main4.jpg';
import mainCarousel1tiny from '../images/carousel/main1-tiny.jpg';
import mainCarousel2tiny from '../images/carousel/main2-tiny.jpg';
import mainCarousel3tiny from '../images/carousel/main3-tiny.jpg';
import mainCarousel4tiny from '../images/carousel/main4-tiny.jpg';

const images = [
  {image: mainCarousel1, blurImage: mainCarousel1tiny, id: 1},
  {image: mainCarousel2, blurImage: mainCarousel2tiny, id: 2},
  {image: mainCarousel3, blurImage: mainCarousel3tiny, id: 3},
  {image: mainCarousel4, blurImage: mainCarousel4tiny, id: 4}
]

export default class CarouselImages extends React.Component {
  render () {

    const imageData = images.map(imageDatum=>
        <Carousel.Item key={imageDatum.id}>
          <div className="wrapper">
            <div className="img-wrapper" style={{backgroundImage: 'url(' + imageDatum.blurImage + ')'}}>
              <div className="carousel-div" style={{backgroundImage: 'url(' + imageDatum.image + ')'}}/>
            </div>
          </div>
        </Carousel.Item>
    )

    return (
      <Carousel className="wow fadeIn">
        {imageData}
    </Carousel>
    )
  }
}

