import * as yup from 'yup';

export const logInSchema = (t: (v: string) => string) => yup.object({
  email: yup.string().email(t('auth:email адрес некорректный')).required(t('common:обязательное поле')),
  password: yup
    .string()
    .required(t('common:обязательное поле')),
});
