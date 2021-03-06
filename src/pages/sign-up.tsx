import { FC } from 'react';
import { SignUp } from 'components/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SignUpPage: FC = () => (
  <>
    <SignUp />
  </>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common'])),
  },
});

export default SignUpPage;
