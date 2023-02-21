import { useEffect, useState } from 'react';
import Nav from '@c/header/nav/Nav';

import * as S from './style';

const Header = () => {
  const [width, setWidth] = useState(() => document.body.clientWidth);
  useEffect(() => {
    const onResize = () => {
      setWidth(document.body.clientWidth);
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <S.FakeHeader />
      <S.Header>
        <S.Container width={width}>
          <div className="container">
            <Nav />
          </div>
        </S.Container>
      </S.Header>
    </>
  );
};

export default Header;
