import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import axios from 'axios';

const Wrapper = styled.div``;

const NaviCp = () => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { data } = await axios.get('http://127.0.0.1:3100/api/tree');
      const tree = data[0].children.map((v) => {
        let children = v.children.map((v2) => ({ id: v2.id, title: v2.text }));
        return { id: v.id, title: v.text, children };
      });
      console.log(tree);
      setTree(tree);
    };
    init();
    console.log('컴포넌트가 시작됨');
    return () => {
      console.log('화면에서 사라짐');
    };
  }, []);

  return <Wrapper></Wrapper>;
};

export default React.memo(NaviCp);
