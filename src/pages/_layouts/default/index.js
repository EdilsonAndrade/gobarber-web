import React from 'react';
import Header from '~/components/Header/index';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>
    <Header />
    {children}</Wrapper>;
}
