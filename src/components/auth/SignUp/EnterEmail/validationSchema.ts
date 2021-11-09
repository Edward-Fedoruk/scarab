import * as yup from 'yup';

export const emailSchema = (t: (v: string) => string) => yup.object({
  email: yup.string().email(t('auth:email адрес некорректный')).required(t('common:обязательное поле')),
});
