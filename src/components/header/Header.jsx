import Nav from '@c/header/nav/Nav';

import * as S from './style';

const Header = () => {
  return (
    <S.container>
      <S.fakeHeader />
      <S.header>
        <div className="container">
          <Nav />
        </div>
      </S.header>
    </S.container>
  );
};

export default Header;
