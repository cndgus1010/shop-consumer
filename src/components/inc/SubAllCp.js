import React from 'react';

import styled, { Container } from '../../style';

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid #cccccc;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: burlywood;
`;
const Wrap = styled(Container)``;

const SubAllCp = () => {
  return (
    <Wrapper>
      <Wrap>Container</Wrap>
    </Wrapper>
  );
};

export default SubAllCp;
