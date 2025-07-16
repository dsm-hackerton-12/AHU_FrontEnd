import styled from "@emotion/styled"
import TopTextLayer from "../components/topTextLayer/TopTextLayer"
import RecommendKeyword from "../components/recommendKeyword/RecommedKeyword"
import SearchBar from "../components/SearchBar/SearchBar"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: auto;
  flex: 1;
  padding: 3vh 3vw;
`

export default function Search() {
  return (
    <Wrapper>
      <TopTextLayer text="원하는 단어나 용어를 검색해보세요." title="검색 " />
      <SearchBar />
      <RecommendKeyword />
    </Wrapper>
  )
}