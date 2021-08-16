import Breadcrumb from '../../../components/Breadcrumb';
import MainLayout from '../../../layout/Client/MainLayout';
import CartItem from './../../../components/CartItem';
import EmptyCart from './../../../components/EmptyCart';
import { selectProductCarts } from '../../../features/product/productSlice';
import { useAppSelector } from '../../../app/hooks';
import { setCartValues } from '../../../utils';
import { Link } from 'react-router-dom';
const Cart = () => {
  const carts = useAppSelector(selectProductCarts);
  return (
    <div className='cart'>
      <MainLayout>
        <Breadcrumb />
        {carts.length > 0 ? (
          <div className='cart-section section-bottom-gap-100'>
            <div className='cart-table-wrapper'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='table_desc'>
                      <div className='table_page table-responsive'>
                        <table>
                          <thead>
                            <tr>
                              <th className='product_remove'>Delete</th>
                              <th className='product_thumb'>Image</th>
                              <th className='product_name'>Product</th>
                              <th className='product-price'>Price</th>
                              <th className='product_quantity'>Quantity</th>
                              <th className='product_total'>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {carts.map((product) => (
                              <CartItem product={product} key={product.id} />
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='coupon_area'>
              <div className='container'>
                <div className='row'>
                  <div className='offset-lg-6 offset-md-6 col-lg-6 col-md-6'>
                    <div
                      className='coupon_code right'
                      data-aos='fade-up'
                      data-aos-delay={400}
                    >
                      <h3>Cart Totals</h3>
                      <div className='coupon_inner'>
                        <div className='cart_subtotal'>
                          <p>Subtotal</p>
                          <p className='cart_amount'>
                            ${setCartValues(carts).totalPriceCart}
                          </p>
                        </div>
                        <div className='cart_subtotal '>
                          <p>Shipping</p>
                          <p className='cart_amount'>
                            <span>Flat Rate:</span> $15.00
                          </p>
                        </div>
                        <a href='#'>Calculate shipping</a>
                        <div className='cart_subtotal'>
                          <p>Total</p>
                          <p className='cart_amount'>
                            ${setCartValues(carts).totalPriceCartShiped}
                          </p>
                        </div>
                        <div className='checkout_btn'>
                          <Link to='/checkout' className='btn btn-md btn-golden'>
                            Proceed to Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </MainLayout>
    </div>
  );
};

export default Cart;
