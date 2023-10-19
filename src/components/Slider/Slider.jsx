import { useState, useRef } from 'react';
import './Slider.css';

const Slider = ({
    imgList,
}) => {
    const refSlide = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handlerForSwitchingSlides = (action) => {
        if(action === 'next') {
            if(activeSlide !== imgList.length-1) setActiveSlide((prev) => prev+=1);
        } else if(action === 'prev') {
            if(activeSlide !== 0) setActiveSlide((prev) => prev-=1);
        };
    };

    return (
        <section className='Slider__wrapper'>
            <button 
                className="Slider__controller"
                onClick={() => handlerForSwitchingSlides('prev')}
            >
                {'<'}
            </button>
            <div 
                className="Slider__block"

            >
            {
                imgList.map((el) => 
                    <img
                        ref={refSlide}
                        src={el}
                        className='Slider__slide'
                        style={{
                            transform: refSlide !== null ? `translateX(-${activeSlide*refSlide.current?.width}px)` : 0,
                        }}
                    />
                )
            }
            </div>
            <button 
                className="Slider__controller"
                onClick={() => handlerForSwitchingSlides('next')}
            >
                {'>'}
            </button>
        </section>
    );
};

export default Slider;