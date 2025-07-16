import styled from "@emotion/styled"
import TopTextLayer from "../components/topTextLayer/TopTextLayer";
import BarGraph from "../components/Graph/Index";

export default function Vote() {
  return (
    <>
      <Container>
        <TopTextLayer title="투표율 통계" text="AI와 사용자들의 글 통계를 확인해보세요" />
        <BarGraph humanPercent={80} aiPercent={20} />
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