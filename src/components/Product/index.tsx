import { Rate } from 'antd';
import { HeartOutlined, SearchOutlined, LinkOutlined } from '@ant-design/icons';
import product1 from './../../assets/images/product/default/home-1/default-1.jpg';
import product2 from './../../assets/images/product/default/home-1/default-2.jpg';
import { IProduct } from '../../typings';
import { useDispatch } from 'react-redux';
import { productActions } from '../../features/product/productSlice';

type ProductProps = {
  product: IProduct;
};
const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddCart = (product: IProduct, quality: number) => {
    dispatch(productActions.addToCart({ product, quality }));
  };
  return (
    <div className='product-default-single-item product-color--golden'>
      <div className='image-box'>
        <a href='product-details-default.html' className='image-link'>
          <img src={product1} alt='product1' />
          <img src={product2} alt='product2' />
        </a>
        <div className='tag'>
          <span>{product.type}</span>
        </div>
        <div className='action-link'>
          <div className='action-link-left'>
            <span
              onClick={() => handleAddCart(product, 1)}
              data-bs-toggle='modal'
              data-bs-target='#modalAddcart'
            >
              Add to Cart
            </span>
          </div>
          <div className='action-link-right'>
            <a href='#' data-bs-toggle='modal' data-bs-target='#modalQuickview'>
              <SearchOutlined />
            </a>
            <a href='wishlist.html'>
              <HeartOutlined />
            </a>
            <a href='compare.html'>
              <LinkOutlined />
            </a>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='content-left'>
          <h6 className='title'>
            <a href='product-details-default.html'>{product.name}</a>
          </h6>
          <Rate className='review-star' disabled defaultValue={4} />
        </div>
        <div className='content-right'>
          <span className='price'>
            <del>${product.priceDiscount}</del>${product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
