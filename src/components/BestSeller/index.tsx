import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import Product from '../Product';
import Heading from '../Heading';
import { useAppSelector } from '../../app/hooks';
import { selectorProductList } from '../../features/product/productSlice';
const settings = {
  className: 'product-slider-default-2rows default-slider-nav-arrow',
  infinite: true,
  slidesToShow: 4,
  speed: 1000,
  slidesPerRow: 1,
  nextArrow: <RightOutlined />,
  prevArrow: <LeftOutlined />,
};

const BestSeller = () => {
  const productList = useAppSelector(selectorProductList);
  return (
    <div className='product-default-slider-section section-top-gap-100 section-fluid section-inner-bg'>
      <Heading title='BEST SELLERS' desc='Add our best sellers to your weekly lineup.' />
      <div className='product-wrapper'>
        <div className='container'>
          <Slider {...settings}>
            {productList.map((product) => (
              <div key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
