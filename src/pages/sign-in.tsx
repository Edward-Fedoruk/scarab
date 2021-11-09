import { FC } from 'react';
import { SignIn } from 'components/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SignInPage: FC = () => (
  <>
    <SignIn />
  </>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth', 'common'])),
  },
});

export default SignInPage;
