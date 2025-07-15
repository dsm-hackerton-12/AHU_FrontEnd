import styled from "@emotion/styled";
import PostBody from "../components/post/Postbody";
import TopTextLayer from "../components/topTextLayer/TopTextLayer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: auto;
  flex: 1;
`

export default function Home() {
  return (
    <Wrapper>
      <TopTextLayer title="홈 피드" text="최신 단어 정의들을 확인해보세요." />
      {[1, 2, 3].map((_) => {
        return (
          <PostBody />
        )
      })}
    </Wrapper>
  )
};