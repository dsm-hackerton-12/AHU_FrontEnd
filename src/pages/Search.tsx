import styled from "@emotion/styled"
import TopTextLayer from "../components/topTextLayer/TopTextLayer"
import RecommendKeyword from "../components/recommendKeyword/RecommedKeyword"
import SearchBar from "../components/SearchBar/SearchBar"
import { useState } from "react"
import { getWordSearch, getWordFeeds } from "../apis"
import PostBody from "../components/post/Postbody"
import WordListItem from "../components/WordListItem/WordListItem"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  overflow: auto;
  flex: 1;
  padding: 3vh 3vw;
`

interface WordSearchResult {
  id: string;
  word: string;
  description: string;
  createTime: string;
  updateTime: string;
}

interface FeedItem {
  id: string;
  word?: string; // Make word optional
  description: string;
  createTime: string;
  author: {
    name: string;
  }
}

export default function Search() {
  const [wordSearchResults, setWordSearchResults] = useState<WordSearchResult[]>([]);
  const [selectedWordFeeds, setSelectedWordFeeds] = useState<FeedItem[]>([]);
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    console.log("Performing search for query:", query);
    setSelectedWordFeeds([]); // Clear feeds when a new search is performed
    setSelectedWordId(null); // Clear selected word ID
    try {
      const response = await getWordSearch(query);
      console.log("Word search results:", response.data);
      setWordSearchResults(response.data);
    } catch (error) {
      console.error("Failed to fetch word search results:", error);
      setWordSearchResults([]);
    }
  }

  const handleWordSelect = async (wordId: string) => {
    console.log("Word selected with ID:", wordId);
    setSelectedWordId(wordId);
    try {
      const response = await getWordFeeds(wordId);
      console.log("Feeds for selected word:", response.data);
      setSelectedWordFeeds(response.data.feeds);
    } catch (error) {
      console.error("Failed to fetch feeds for selected word:", error);
      setSelectedWordFeeds([]);
    }
  };

  return (
    <Wrapper>
      <TopTextLayer text="원하는 단어나 용어를 검색해보세요." title="검색 " />
      <SearchBar handleSearch={handleSearch} />

      {selectedWordId ? (
        selectedWordFeeds.length > 0 ? (
          // Display feeds for the selected word
          selectedWordFeeds.map((feed) => (
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
          <p>등록된 피드가 없습니다.</p>
        )
      ) : wordSearchResults.length > 0 ? (
        // Display word search results
        wordSearchResults.map((item) => (
          <WordListItem
            key={item.id}
            id={item.id}
            word={item.word}
            description={item.description}
            onClick={handleWordSelect}
          />
        ))
      ) : (
        // Initial state or no results
        <RecommendKeyword onKeywordClick={handleSearch}/>
      )}
    </Wrapper>
  )
}