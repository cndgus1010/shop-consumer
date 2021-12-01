import React from 'react';

import styled, { Container, SmallContainer, keyframes } from '../../style';
import ImageCp from '../common/ImageCp';
import SubAllNaviCp from './SubNaviCp';

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  },
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  position: absolute;
  left: 0;
  top: 3em;
  background-color: #fff;
  animation-name: ${animation};
  animation-duration: 0.35s;
  animation-fill-mode: forwards;
`;

const Wrap = styled(SmallContainer)`
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  display: flex;
  > :nth-of-type(1) {
    width: 60%;
  }
  > :nth-of-type(2) {
    width: 40%;
  }
`;

const SubWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const SubAllCp = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Wrap>
          <SubWrap>
            {data.map((v, i) => (
              <SubAllNaviCp data={v} key={i} />
            ))}
          </SubWrap>
          <div>
            <ImageCp maxWidth={true} src="/img/shop-banner1.jpg" className="mb-3" />
            <ImageCp maxWidth={true} src="/img/shop-banner2.jpg" />
          </div>
        </Wrap>
      </Container>
    </Wrapper>
  );
};

export default SubAllCp;
