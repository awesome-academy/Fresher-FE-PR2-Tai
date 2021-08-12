import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import Heading from '../Heading';
import Product from '../Product';
import { selectorProductList } from '../../features/product/productSlice';
import { useAppSelector } from '../../app/hooks';
const settings = {
  className: 'product-slider-default-2rows default-slider-nav-arrow',
  infinite: true,
  slidesToShow: 4,
  speed: 1000,
  slidesPerRow: 1,
  nextArrow: <RightOutlined />,
  prevArrow: <LeftOutlined />,
};
const NewProductList = () => {
  const productList = useAppSelector(selectorProductList);
  return (
    <div className='product-default-slider-section section-top-gap-100 section-fluid'>
      <Heading
        title='THE NEW ARRIVALS'
        desc='Preorder now to receive exclusive deals &amp; gifts.'
      />
      <div className='product-wrapper'>
        <div className='container'>
          <Slider {...settings}>
            {productList.map((product) => (
              <div>
                <Product product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewProductList;
