import styled from "@emotion/styled"
import MyProfile from "../components/MyPage/MyInfo";
import MyBoard from "../assets/SVG/MyBoard.svg"
import PostBody from "../components/post/Postbody";
import { useEffect, useState } from "react";
import { getUserFeeds } from "../apis";
import { useUserStore } from "../stores/useUserStore";

interface FeedItem {
  id: string;
  word?: string; // Make word optional
  description: string;
  createTime: string;
  author: {
    name: string;
  }
}

export default function Profile() {
  const [userFeeds, setUserFeeds] = useState<FeedItem[]>([]);
  const userId = useUserStore((state) => state.userId);

  useEffect(() => {
    const fetchUserFeeds = async () => {
      if (userId) {
        try {
          const response = await getUserFeeds();
          setUserFeeds(response.data.feeds);
          console.log(response.data.feeds);
        } catch (error) {
          console.error("Failed to fetch user feeds:", error);
        }
      }
    };

    fetchUserFeeds();
  }, [userId]);

  return (
    <>
      <Container>
        <MyProfile />
        <MyPost>
          <img src={MyBoard} alt="" />
          <MyPostTitle>등록한 글</MyPostTitle>
        </MyPost>
        {userFeeds.length > 0 ? (
          userFeeds.map((feed) => (
            <PostBody
              key={feed.id}
              id={feed.id}
              word={feed.word || ''} // Pass word, or empty string if undefined
              name={feed.author.name}
              description={feed.description}
              createTime={feed.createTime}
            />
          ))
        ) : (
          <p>등록한 글이 없습니다.</p>
        )}
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vh 3vw;
  gap: 30px;
`;

const MyPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background-color: #fff2f9;
  width: 56vw;
  height: 9vh;
  padding: 0 2vw;
`;

const MyPostTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #9334E9;
`;