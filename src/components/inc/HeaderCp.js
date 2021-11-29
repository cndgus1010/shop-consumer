import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import NaviCp from './NaviCp';

const Wrapper = styled.header``;
const Logo = styled.h1`
  max-width: 70px;
  img {
    width: 100%;
  }
`;

const HeaderCp = () => {
  return (
    <Wrapper>
      <Logo></Logo>
      <NaviCp />
    </Wrapper>
  );
};

export default HeaderCp;
