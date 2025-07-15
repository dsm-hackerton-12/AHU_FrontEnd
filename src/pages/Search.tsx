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
`

export default function Search() {
  return (
    <Wrapper>
      <TopTextLayer text="검색" title="원하는 단어나 용어를 검색해보세요." />
      <SearchBar />
      <RecommendKeyword />
    </Wrapper>
  )
}