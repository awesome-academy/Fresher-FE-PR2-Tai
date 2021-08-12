import { notification } from 'antd';
type AlertProps = {
  type: 'success' | 'error' | 'warning';
  message?: string;
};
const Alert = ({ type, message }: AlertProps) => {
  notification[type]({
    message: 'Success',
    description: message,
    duration: 1,
  });
};
export default Alert;
