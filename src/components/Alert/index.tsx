import { notification } from 'antd';
type AlertProps = {
  type: 'success' | 'warning';
  message: string;
};
const Alert = ({ type, message }: AlertProps) => {
  notification[type]({
    message: 'Success',
    description: 'Product added to cart',
    duration: 0.75,
  });
};
export default Alert;
