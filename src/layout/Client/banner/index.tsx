import { useRef } from 'react';
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import hero1 from './../../../assets/images/hero-slider/home-1/hero-slider-1.jpg';
import hero2 from './../../../assets/images/hero-slider/home-1/hero-slider-2.jpg';

const Banner = () => {
  const carousel = useRef<any>(null);
  return (
    <div className='hero-slider-section'>
      <div className='hero-slider-active swiper-container'>
        <Carousel effect='fade' autoplay ref={carousel}>
          <div className='hero-single-slider-item swiper-slide'>
            <div className='hero-slider-bg'>
              <img src={hero1} alt='hero-slider-1' />
            </div>
            <div className='hero-slider-wrapper'>
              <div className='container'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='hero-slider-content'>
                      <h4 className='subtitle'>New collection</h4>
                      <h2 className='title'>
                        Best Of NeoCon <br /> Gold Award
                      </h2>
                      <a
                        href='product-details-default.html'
                        className='btn btn-lg btn-outline-golden'
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-single-slider-item swiper-slide'>
            <div className='hero-slider-bg'>
              <img src={hero2} alt='hero-slider-1' />
            </div>
            <div className='hero-slider-wrapper'>
              <div className='container'>
                <div className='row'>
                  <div className='col-auto'>
                    <div className='hero-slider-content'>
                      <h4 className='subtitle'>New collection</h4>
                      <h2 className='title'>
                        Luxy Chairs <br /> Design Award
                      </h2>
                      <a
                        href='product-details-default.html'
                        className='btn btn-lg btn-outline-golden'
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className='swiper-button-prev d-none d-lg-block'>
          <LeftOutlined onClick={() => carousel.current.prev()} />
        </div>
        <div className='swiper-button-next d-none d-lg-block'>
          <RightOutlined onClick={() => carousel.current.next()} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
