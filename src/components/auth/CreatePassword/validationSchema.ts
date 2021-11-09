import * as yup from 'yup';

export const createPasswordSchema = (t: (s: string) => string) => yup.object({
  password: yup
    .string()
    .min(8, t('auth:пароль должен иметь не меньше 8 символов'))
    .max(25, t('auth:пароль должен иметь не больше 25 символов'))
    .required(t('common:обязательное поле')),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], t('auth:проли должны совпадать'))
    .required(t('common:обязательное поле')),
});
