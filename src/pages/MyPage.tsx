import styled from "@emotion/styled"
import MyProfile from "../components/MyPage/MyInfo";
import MyBoard from "../assets/SVG/MyBoard.svg"
import PostBody from "../components/post/Postbody";

export default function Profile() {
  return (
    <>
      <Container>
        <MyProfile />
        <MyPost>
          <img src={MyBoard} alt="" />
          <MyPostTitle>등록한 글</MyPostTitle>
        </MyPost>
        <PostBody />
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 0 50px;
  gap: 30px;
`;

const MyPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background-color: #fff2f9;
  width: 60vw;
  height: 9vh;
  padding: 0 2vw;
`;

const MyPostTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #9334E9;
`;