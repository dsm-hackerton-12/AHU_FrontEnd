import styled from "@emotion/styled";
import Aside from "../components/Aside/Index";
import PostBody from "../components/post/Postbody";
import TopTextLayer from "../components/topTextLayer/TopTextLayer";

const Body = styled.div`
  display: flex;
  gap: 9vw;
  height: 100vh;
`

const OFOF = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: auto;
  flex: 1;
`

export default function Home() {
  return (
    <Body>
      <Aside />
      <OFOF>
        <TopTextLayer title="홈 피드" text="최신 단어 정의들을 확인해보세요." />
        {[1, 2, 3].map((_) => {
          return (
            <PostBody />
          )
        })}
      </OFOF>
    </Body>
  )
};