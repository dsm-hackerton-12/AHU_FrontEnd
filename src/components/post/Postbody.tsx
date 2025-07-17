import * as S from "./style";
import * as Icon from "./postIcon"
import { getLikes } from "../../apis";

interface PostBodyProps {
  id: string;
  word?: string; // Make word prop optional
  description: string;
  createTime: string;
  name: string;
}

const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);
  const diffSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const minutes = Math.floor(diffSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years}년 전`;
  } else if (months > 0) {
    return `${months}개월 전`;
  } else if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return `방금 전`;
  }
};

export default function PostBody({ id, word, description, name, createTime }: PostBodyProps) {
  const timeAgo = formatTimeAgo(createTime);

  const handleLikeClick = async () => {
    try {
      await getLikes(id);
      alert("좋아요가 반영되었습니다!");
      // You might want to update the like count here based on API response
    } catch (error) {
      console.error("Failed to like:", error);
      alert("좋아요 반영에 실패했습니다.");
    }
  };

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.Profile />
        <S.UserInfo>
          <S.Name>{name}</S.Name>
          <S.PostInfo>
            <S.Time>
              <Icon.ClockIcon />
              {timeAgo}
            </S.Time>
          </S.PostInfo>
        </S.UserInfo>
      </S.ProfileContainer>

      <S.Title>{word}</S.Title>
      <S.BodyText>{description}</S.BodyText>

      <S.Divider />

      <S.LikesContainer onClick={handleLikeClick} style={{ cursor: "pointer" }}>
        <Icon.HeartIcon />
      </S.LikesContainer>
    </S.Container>
  );
};