import React from 'react';
import { Link } from 'react-router-dom';
import styled, { Underline, color, keyframes } from '../../style';

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

const ListWrap = styled.div`
  min-width: 150px;
  padding: 1em;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  animation-name: ${animation};
  animation-duration: 0.35s;
  animation-fill-mode: forwards;
`;

const List = styled.div`
  font-weight: 400;
  padding: 0.75em 0;
  display: block;
  color: ${color.primary};
  border-bottom: 1px solid #ccc;
`;
const LinkWrap = styled.a`
  display: inline-block;
`
  .withComponent(Underline)
  .withComponent(Link);

const SubCp = ({ data }) => {
  return (
    <ListWrap>
      {data.map((v, i) => (
        <List key={i}>
          <LinkWrap to="/" color={color.primary}>
            {v.title}
          </LinkWrap>
        </List>
      ))}
    </ListWrap>
  );
};

export default SubCp;
