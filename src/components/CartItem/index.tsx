import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { InputNumber, Modal } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { productActions } from '../../features/product/productSlice';
import { ICartItem } from '../../typings';
type CartItemProps = {
  product: ICartItem;
};
const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useAppDispatch();
  const handleChangeQuantity = (product: ICartItem, amount: number) => {
    dispatch(productActions.addToCart({ product, amount, type: 'UPDATE_CART' }));
  };
  const handleRemoveCartItem = (id: number) => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      maskClosable: true,
      onOk() {
        dispatch(productActions.removeCartItem(id));
      },
    });
  };
  return (
    <tr>
      <td className='product_remove'>
        <DeleteOutlined
          onClick={() => {
            handleRemoveCartItem(product.id);
          }}
        />
      </td>
      <td className='product_thumb'>
        <a href='product-details-default.html'>
          <img src='assets/images/product/default/home-1/default-2.jpg' alt='product3' />
        </a>
      </td>
      <td className='product_name'>
        <a href='product-details-default.html'>{product.name}</a>
      </td>
      <td className='product-price'>${product.price}</td>
      <td className='product_quantity'>
        <label>Quantity</label>
        <InputNumber
          min={1}
          max={100}
          defaultValue={product.amount}
          onChange={(value) => {
            handleChangeQuantity(product, value);
          }}
        />
      </td>
      <td className='product_total'>${product.total}</td>
    </tr>
  );
};

export default CartItem;
