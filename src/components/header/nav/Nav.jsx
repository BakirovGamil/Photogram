import * as S from './style';

const Nav = () => {
  return (
    <S.Nav>
      <S.List>
        <S.Item>
          <S.StyledLink to="/">
            <i className="gg-instagram"></i>
            <span>Photogram</span>
          </S.StyledLink>
        </S.Item>
        <S.ItemPlaceholder />
        <S.Item>
          <S.StyledButton>
            Вход
          </S.StyledButton>
        </S.Item>
        <S.Item>
          <S.StyledButton>
            Регистрация
          </S.StyledButton>
        </S.Item>
      </S.List>
    </S.Nav>
  );
};

export default Nav;
