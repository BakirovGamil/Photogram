import * as S from './style';

const User = ({ user }) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Img src={user.avatar} />
      </S.ImgContainer>
      <S.Content>
        <S.Name>
          Гамил Бакиров
        </S.Name>
        <S.DescriptionContainer>
          <S.Label>
            О себе:
          </S.Label>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti repudiandae omnis error, vero voluptate! Adipisci itaque exercitationem sed fugiat. Laudantium iusto consequatur qui delectus reprehenderit, recusandae repellat voluptas optio?
          </S.Description>
        </S.DescriptionContainer>
      </S.Content>
    </S.Container>
  );
};

export default User;
