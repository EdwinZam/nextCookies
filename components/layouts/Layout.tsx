import Head from 'next/head';
import { FC } from 'react';
import { Nabvar } from '../ui';

interface Props {
    children?: any;
}

export const Layout:FC<Props>=({children}) => {
  return (
    <>
        <Head>

        </Head>
        <nav>
            <Nabvar />
        </nav>
        <main style={{padding: '20px 50px'}}>
            {children}
        </main>
    </>
  )
}
