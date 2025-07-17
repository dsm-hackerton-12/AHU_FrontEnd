import styled from "@emotion/styled";
import PostBody from "../components/post/Postbody";
import TopTextLayer from "../components/topTextLayer/TopTextLayer";
import { useEffect, useState } from "react";
import { getWordFeeds, getWordSearch } from "../apis";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: auto;
  flex: 1;
  padding: 3vh 3vw;
`

interface FeedItem {
  id: string;
  word?: string; // Make word optional in FeedItem interface as well
  description: string;
  createTime: string;
  author: {
    name: string;
  }
}

export default function Home() {
  const [feeds, setFeeds] = useState<FeedItem[]>([]);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        // This part seems to be fetching feeds for a specific word "api"
        // If you want to fetch all feeds, you might need a different API call or logic
        const id = (await getWordSearch("api")).data[0].id;
        const response = await getWordFeeds(id);
        setFeeds(response.data.feeds);
      } catch (error) {
        console.error("Failed to fetch feeds:", error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <Wrapper>
      <TopTextLayer title="홈 피드" text="최신 단어 정의들을 확인해보세요." />
      {feeds.length > 0 ? (
        feeds.map((feed) => (
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
        <p>피드를 불러오는 중이거나 피드가 없습니다.</p>
      )}
    </Wrapper>
  )
};