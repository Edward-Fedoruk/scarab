import { FC } from 'react';
import { SignUp } from 'components/SignUp';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SignUpPage: FC = () => (
  <>
    <SignUp />
  </>
);

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth', 'common'])),
    },
  };
}

export default SignUpPage;
