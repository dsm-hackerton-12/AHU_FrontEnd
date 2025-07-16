import * as S from "./style";
import * as Icon from "./postIcon"

const mock = ["비즈니스", "기술"]

export default function PostBody() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileImageWrapper>
          <S.Profile />
          <S.LightningIcon>
            <Icon.LightningIconSVG />
          </S.LightningIcon>
        </S.ProfileImageWrapper>
        <S.UserInfo>
          <S.Name>{"김개발"}</S.Name>
          <S.PostInfo>
            <S.Time>
              <Icon.ClockIcon />
              {"2시간 전"}
            </S.Time>
            <S.HotBadge>HOT</S.HotBadge>
          </S.PostInfo>
        </S.UserInfo>
      </S.ProfileContainer>

      <S.Title>{"디지털 트랜스포메이션"}</S.Title>
      <S.BodyText>{"가나다라마바사아자차카 타파하, 12조 화이팅"}</S.BodyText>

      <S.TagsContainer>
        {mock.map((tag) => {
          return (
            <S.Tag key={tag}>{tag}</S.Tag>
          )}
        )}
      </S.TagsContainer>

      <S.Divider />

      <S.LikesContainer>
        <Icon.HeartIcon />
        <S.LikeCount>9</S.LikeCount>
      </S.LikesContainer>
    </S.Container>
  );
};