import { useState } from "react"
import styled from "@emotion/styled"
import Img from "../../assets/SVG/BookImg.svg"
import { postFeed, getWordSearch } from "../../apis"

interface WordSearchResult {
  id: string;
  word: string;
  description: string;
  createTime: string;
  updateTime: string;
}

function WordInfo() {
  const [wordInput, setWordInput] = useState('');
  const [wordSearchResults, setWordSearchResults] = useState<WordSearchResult[]>([]);
  const [selectedWordDefinition, setSelectedWordDefinition] = useState<WordSearchResult | null>(null);
  const [feedDescriptionInput, setFeedDescriptionInput] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleWordSearch = async () => {
    if (wordInput.trim() === '') {
      setWordSearchResults([]);
      setSelectedWordDefinition(null);
      setFeedDescriptionInput('');
      return;
    }
    try {
      const response = await getWordSearch(wordInput);
      setWordSearchResults(response.data);
      setIsCategoryOpen(true); // Open dropdown with search results
    } catch (error) {
      console.error('단어 검색 실패:', error);
      setWordSearchResults([]);
    }
  };

  const handleDefinitionSelect = (definition: WordSearchResult) => {
    setSelectedWordDefinition(definition);
    setIsCategoryOpen(false);
  };

  const handleSubmit = async () => {
    if (!selectedWordDefinition) {
      alert('단어를 선택해주세요.');
      return;
    }
    if (feedDescriptionInput.trim() === '') {
      alert('단어 설명을 입력해주세요.');
      return;
    }

    try {
      await postFeed(selectedWordDefinition.id, { description: feedDescriptionInput });
      alert('피드가 성공적으로 등록되었습니다!');
      // Reset form
      setWordInput('');
      setWordSearchResults([]);
      setSelectedWordDefinition(null);
      setFeedDescriptionInput('');
      setIsCategoryOpen(false);
    } catch (error) {
      console.error('피드 등록 실패:', error);
      alert('피드 등록에 실패했습니다.');
    }
  };

  return (
    <WordInfoContainer>
      <WordInfoTitleBox>
        <BookImg src={Img}></BookImg>
        <WordInfoTitle>단어 정보</WordInfoTitle>
      </WordInfoTitleBox>
      <FormContiner>
        <FormBox>
          <FormTitle>단어</FormTitle>
          <WordInput
            type="text"
            placeholder="등록할 단어를 입력하세요"
            value={wordInput}
            onChange={(e) => setWordInput(e.target.value)}
            onBlur={handleWordSearch} // Trigger search on blur
            onKeyDown={(e) => { if (e.key === 'Enter') handleWordSearch(); }}
          ></WordInput>
        </FormBox>
        <FormBox>
          <FormTitle>카테고리</FormTitle>
          <CategoryInput onClick={() => setIsCategoryOpen(true)}>
            <CategoryInputText>
              {selectedWordDefinition ? `${selectedWordDefinition.description}` : "단어를 선택하세요"}
            </CategoryInputText>
          </CategoryInput>
          {isCategoryOpen && wordSearchResults.length > 0 && (
            <OptionBox>
              {wordSearchResults.map((item) => (
                <Option key={item.id} onClick={() => handleDefinitionSelect(item)}>
                  {item.word} - {item.description}
                </Option>
              ))}
            </OptionBox>
          )}
          {isCategoryOpen && wordSearchResults.length === 0 && wordInput.trim() !== '' && (
            <OptionBox>
              <Option>검색 결과가 없습니다.</Option>
            </OptionBox>
          )}
        </FormBox>
        <FormBox>
          <FormTitle>단어 설명</FormTitle>
          <WordInput
            type="text"
            placeholder="단어의 정의와 설명을 자세히 입력하세요"
            value={feedDescriptionInput}
            onChange={(e) => setFeedDescriptionInput(e.target.value)}
          ></WordInput>
        </FormBox>
      </FormContiner>
      <SubmitButtonBox>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </SubmitButtonBox>
    </WordInfoContainer>
  )
}

const WordInfoContainer = styled.div`
  width: 60vw;
  border: 3px solid #D8ADFF;
  border-radius: 30px;
`
const WordInfoTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding: 37px 0 0 56px;
`
const BookImg = styled.img`
  width: 38px;
  height: 30px;
`
const WordInfoTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  color: #8338E9;
  margin: 0 0 0 25px;
`
const FormContiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 17px 0 24px 57px; 
`
const FormBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const FormTitle = styled.span`
  font-size: 27px;
  font-weight: 800;
  color: #C492F1;
`
const WordInput = styled.input`
  box-sizing: border-box;
  padding: 20px 25px;
  font-size: 25px;
  font-weight: 400;
  color: #64758B;
  border: 1px solid #E5CCFE;
  border-radius: 15px;
  width: 48vw;
  height: 70px;
  outline: none;
`
const CategoryInput = styled.div`
  border: 1px solid #E5CCFE;
  border-radius: 15px;
  width: 48vw;
  height: 70px;
  display: flex;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
`
const CategoryInputText = styled.span`
  font-size: 25px;
  font-weight: 400;
  padding: 0 25px;
  color: #64758B;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Option = styled.span`
  box-sizing:border-box;
  font-size: 18px; /* Reduced font size */
  font-weight: 400;
  color: #575757;
  width: 250px;
  padding: 8px 0 7px 43px;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover{
    background-color: #FFF2F9;
    border-radius: 15px;
    cursor: pointer;
  } 
`
const OptionBox = styled.div`
  position: absolute;
  top: 140px;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 3px solid #E5CCFE;
  border-radius: 20px;
  padding: 9px 9px 9px 8px;
  background-color: white;
`
const SubmitButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`
const SubmitButton = styled.button`
  background-color: #A254F6;
  color: white;
  border-radius: 10px;
  border: none;
  font-size: 30px;
  font-weight: 600;
  margin: 0 91px 24px 0;
  padding: 17px 23px;
`

export default WordInfo;