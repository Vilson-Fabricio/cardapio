import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa o CSS do carrossel

const Carousel = () => {
    return (
        <Carousel 
            showArrows={true} 
            showStatus={false} 
            showIndicators={true} 
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
        >
            <div>
                <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
                <p className="legend">Slide 1</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
                <p className="legend">Slide 2</p>
            </div>
            <div>
                <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
                <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    );
};

export default MyCarousel;