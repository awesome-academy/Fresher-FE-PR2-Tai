import { yupResolver } from '@hookform/resolvers/yup';
import { Collapse } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Alert from '../../../components/Alert';
import Breadcrumb from '../../../components/Breadcrumb';
import LoginForm from '../../../components/LoginForm';
import { selectCurrentUser, selectIsLoggedIn } from '../../../features/auth/authSlice';
import { orderActions } from '../../../features/order/orderSlice';
import { selectProductCarts } from '../../../features/product/productSlice';
import MainLayout from '../../../layout/Client/MainLayout';
import { IOrder } from '../../../typings';
import { schemaOrder, setCartValues } from '../../../utils';

const Checkout = () => {
  const { Panel } = Collapse;
  const carts = useAppSelector(selectProductCarts);
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schemaOrder),
  });

  useEffect(() => {
    setValue('firstname', currentUser?.firstname);
    setValue('lastname', currentUser?.lastname);
    setValue('company', currentUser?.company);
    setValue('street', currentUser?.street);
    setValue('city', currentUser?.city);
    setValue('phone', currentUser?.phone);
    setValue('country', currentUser?.country);
    setValue('email', currentUser?.email);
  }, [currentUser]);

  const onSubmitCheckout = (data: IOrder) => {
    dispatch(orderActions.addOrder(data));
  };

  const headerCollapse = () => (
    <div className='user-actions accordion' data-aos='fade-up' data-aos-delay={0}>
      <h3>
        <i className='fa fa-file-o' aria-hidden='true' />
        Returning customer?
        <a
          className='Returning'
          href='#'
          data-bs-toggle='collapse'
          data-bs-target='#checkout_login'
          aria-expanded='true'
        >
          Click here to login
        </a>
      </h3>
    </div>
  );
  return (
    <div className='checkout'>
      <MainLayout>
        <Breadcrumb />
        <div className='checkout-section section-bottom-gap-100'>
          <div className='container'>
            {!isLoggedIn && (
              <div className='row'>
                <div className='col-12'>
                  <Collapse ghost>
                    <Panel header={headerCollapse()} showArrow={false} key='1'>
                      <div className='checkout_info'>
                        <p>
                          If you have shopped with us before, please enter your details in
                          the boxes below. If you are a new customer please proceed to the
                          Billing &amp; Shipping section.
                        </p>
                        <LoginForm />
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            )}
            <div className='checkout_form' data-aos='fade-up' data-aos-delay={400}>
              <form onSubmit={handleSubmit(onSubmitCheckout)}>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <h3>Billing Details</h3>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='default-form-box'>
                          <label>
                            First Name <span>*</span>
                          </label>
                          <input {...register('firstname')} type='text' />
                          <p className='input-error'>{errors.firstname?.message}</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='default-form-box'>
                          <label>
                            Last Name <span>*</span>
                          </label>
                          <input {...register('lastname')} type='text' />
                          <p className='input-error'>{errors.lastname?.message}</p>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='default-form-box'>
                          <label>Company Name</label>
                          <input {...register('company')} type='text' />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='default-form-box'>
                          <label>
                            Street address <span>*</span>
                          </label>
                          <input
                            {...register('street')}
                            placeholder='House number and street name'
                            type='text'
                          />
                          <p className='input-error'>{errors.street?.message}</p>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='default-form-box'>
                          <label>
                            Town / City <span>*</span>
                          </label>
                          <input {...register('city')} type='text' />
                          <p className='input-error'>{errors.city?.message}</p>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='default-form-box'>
                          <label>
                            State / County <span>*</span>
                          </label>
                          <input {...register('country')} type='text' />
                          <p className='input-error'>{errors.country?.message}</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='default-form-box'>
                          <label>
                            Phone<span>*</span>
                          </label>
                          <input type='tel' {...register('phone')} />
                          <p className='input-error'>{errors.phone?.message}</p>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='default-form-box'>
                          <label>
                            Email Address <span>*</span>
                          </label>
                          <input {...register('email')} type='email' />
                          <p className='input-error'>{errors.email?.message}</p>
                        </div>
                      </div>
                      <div className='col-12 mt-3'>
                        <div className='order-notes'>
                          <label htmlFor='order_note'>Order Notes</label>
                          <textarea
                            id='order_note'
                            placeholder='Notes about your order, e.g. special notes for delivery.'
                            {...register('order_note')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <h3>Your order</h3>
                    <div className='order_table table-responsive'>
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {carts.map((product) => (
                            <tr key={product.id}>
                              <td>
                                {product.name}
                                <strong> × {product.amount}</strong>
                              </td>
                              <td> ${product.total}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>Cart Subtotal</th>
                            <td>${setCartValues(carts).totalPriceCart}</td>
                          </tr>
                          <tr>
                            <th>Shipping</th>
                            <td>
                              <strong>$15.00</strong>
                            </td>
                          </tr>
                          <tr className='order_total'>
                            <th>Order Total</th>
                            <td>
                              <strong>
                                ${setCartValues(carts).totalPriceCartShiped}
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className='payment_method'>
                      <div className='panel-default'>
                        <label className='checkbox-default' htmlFor='currencyCod'>
                          <input
                            {...register('methodPayment')}
                            type='radio'
                            id='currencyCod'
                          />
                          <span>Cash on Delivery</span>
                        </label>
                      </div>
                      <div className='panel-default'>
                        <label className='checkbox-default' htmlFor='currencyPaypal'>
                          <input
                            type='radio'
                            id='currencyPaypal'
                            {...register('methodPayment')}
                          />
                          <span>PayPal</span>
                        </label>
                      </div>
                      <p className='input-error'>{errors.methodPayment?.message}</p>
                      <div className='order_button pt-3'>
                        <button
                          className='btn btn-md btn-black-default-hover'
                          type='submit'
                        >
                          Proceed to PayPal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default Checkout;
