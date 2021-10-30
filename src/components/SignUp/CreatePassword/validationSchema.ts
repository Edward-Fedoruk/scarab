import * as yup from 'yup';

export const createPasswordSchema = yup.object({
  password: yup.string().min(8).max(25).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});
