import styled from "@emotion/styled";

export const Container = styled.div`
  width: 56vw;
  border: 3px solid #d8adff;
  border-radius: 30px;
  padding: 2vw;
  font-family: "Pretendard";
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 3vw;
  height: 3vw;
`;

export const Profile = styled.div`
  border-radius: 100%;
  width: 3vw;
  height: 3vw;
  background-color: #e0e0e0;
`;

export const LightningIcon = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 1.2vw;
  height: 1.2vw;
  background-color: #ff7043;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: #581C87;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Time = styled.span`
  color: #bdbdbd;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const HotBadge = styled.span`
  padding: 2.5px 7px;
  border-radius: 20px;
  background: linear-gradient(90deg, #ff8c42, #ff5722);
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #8338E9;
`;

export const BodyText = styled.p`
  font-size: 18px;
  color: #C492F1;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const Tag = styled.span`
  padding: 10px 25px;
  border-radius: 20px;
  background-color: #f3e5f5;
  color: #8e44ad;
  font-weight: 500;
`;

export const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: #E5CCFE;
  margin-top: 20px;
`;

export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #d8adff;
  margin-top: 10px;
`;