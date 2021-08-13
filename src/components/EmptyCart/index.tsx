import { Link } from 'react-router-dom';
import EmptyCartImage from './../../assets/images/emprt-cart/empty-cart.png';
const EmptyCart = () => {
  return (
    <div className='empty-cart-section section-fluid section-bottom-gap-100'>
      <div className='emptycart-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-10 offset-md-1 col-xl-6 offset-xl-3'>
              <div className='emptycart-content text-center'>
                <div className='image'>
                  <img className='img-fluid' src={EmptyCartImage} alt='EmptyCartImage' />
                </div>
                <h4 className='title'>Your Cart is Empty</h4>
                <h6 className='sub-title'>
                  Sorry Mate... No item Found inside your cart!
                </h6>
                <Link to='/' className='btn btn-lg btn-golden'>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
