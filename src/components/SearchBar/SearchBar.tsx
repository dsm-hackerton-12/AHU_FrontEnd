import styled from "@emotion/styled"
import Search from "../../assets/SVG/Search.svg"

export default function() {
  return (
    <Container>
      <SearchContainer>
        <img src={Search} alt="안녕" />
        <SearchInput type="text" placeholder="검색할 단어를 입력하세요"/>
      </SearchContainer>
      <Button>검색</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 64vw;
  align-items: stretch;
  display: flex;
  padding: 1vw 0 1vw 0;
  gap: 10px;
`

const SearchContainer = styled.div`
  border-radius: 15px;
  border: 1px solid #8338E9;
  padding: 1vw 2vw;
  width: 60vw;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
  color: white;
  background-color: #8338E9;
  white-space: nowrap;
  font-size: 23px;
  font-weight: 600;
  padding: 4px 15px 4px 15px;
  border: none;
  border-radius: 15px;
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 22px;
  width: 50vw;
`