import * as yup from 'yup';

export const schemaOrder = yup.object().shape({
  firstname: yup.string().required('FirstName is a required field'),
  lastname: yup.string().required('LastName is a required field'),
  street: yup.string().required('String address is a required field'),
  city: yup.string().required('City is a required field'),
  country: yup.string().required('Country is a required field'),
  phone: yup
    .string()
    .required('Phone is a required field')
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/i, 'Is not in correct format'),
  email: yup.string().email('Invalid email').required('Email is a required field'),
  methodPayment: yup.string().nullable().required('Method Payment is a required field'),
});

export const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});
