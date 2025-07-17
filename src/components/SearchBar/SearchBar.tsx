import styled from "@emotion/styled"
import Search from "../../assets/SVG/Search.svg"
import { useState } from "react"

interface Props {
  handleSearch: (query: string) => void
}

export default function SearchBar({handleSearch}: Props) {
  const [query, setQuery] = useState<string>("");

  return (
    <Container>
      <SearchContainer>
        <img src={Search} alt="안녕" />
        <SearchInput
          type="text"
          placeholder="검색할 단어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchContainer>
      <Button onClick={() => handleSearch(query)}>검색</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 60vw;
  align-items: stretch;
  display: flex;
  padding: 1vw 0 1vw 0;
  gap: 10px;
`

const SearchContainer = styled.div`
  border-radius: 30px;
  border: 1px solid #D8ADFF;
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