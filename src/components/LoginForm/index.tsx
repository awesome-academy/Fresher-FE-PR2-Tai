import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../utils';
import { useAppDispatch } from '../../app/hooks';
import { authActions } from '../../features/auth/authSlice';
import { LoginPayload } from '../../typings';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });
  const dispatch = useAppDispatch();
  const onSubmitLogin = (data: LoginPayload) => {
    dispatch(authActions.login(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <div className='form_group default-form-box'>
        <label>
          Username or email <span>*</span>
        </label>
        <input {...register('email')} type='email' />
        <p className='input-error'>{errors.email?.message}</p>
      </div>
      <div className='form_group default-form-box'>
        <label>
          Password <span>*</span>
        </label>
        <input {...register('password')} type='password' />
        <p className='input-error'>{errors.password?.message}</p>
      </div>
      <div className='form_group group_3 default-form-box'>
        <button className='btn btn-md btn-black-default-hover' type='submit'>
          Login
        </button>
        <label className='checkbox-default'>
          <input type='checkbox' />
          <span>Remember me</span>
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
