import { useState } from "react"
import styled from "@emotion/styled"
import Img from "../../assets/SVG/BookImg.svg"

function WordInfo() {
  const [Inputvalue, setInputValue] = useState('')
  const [categoryText, setCategoryText] = useState(true)
  const [category, setCategory] = useState(false)
  const optionArr = ["개발", "디자인", "비지니스", "기술", "마케팅", "기타"]

  function DropDownOpen() {
    setCategory(true);
  }

  function DropDownClose(value: string) {
    setCategory(false);
    setCategoryText(false);
    setInputValue(value)
  }

  return (
    <WordInfoContainer>
      <WordInfoTitleBox>
        <BookImg src={Img}></BookImg>
        <WordInfoTitle>단어 정보</WordInfoTitle>
      </WordInfoTitleBox>
      <FormContiner>
        <FormBox>
          <FormTitle>단어</FormTitle>
          <WordInput type="text" placeholder="등록할 단어를 입력하세요"></WordInput>
        </FormBox>
        <FormBox>
          <FormTitle>카테고리</FormTitle>
          <CategoryInput onClick={DropDownOpen}>
            {categoryText && <CategoryInputText>카테고리를 입력하세요</CategoryInputText>}
            {!categoryText && <CategoryInputText>{Inputvalue}</CategoryInputText>}
          </CategoryInput>
          {category && (
            <OptionBox>
              {optionArr.map(e => <Option onClick={() => {DropDownClose(e)}}>{e}</Option>)}
            </OptionBox>)}
        </FormBox>
        <FormBox>
          <FormTitle>단어 설명</FormTitle>
          <WordInput type="text" placeholder="단어의 정의와 설명을 자세히 입력하세요"></WordInput>
        </FormBox>
      </FormContiner>
      <SubmitButtonBox>
        <SubmitButton>등록하기</SubmitButton>
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
  width: 1020px;
  height: 70px;
  outline: none;
`
const CategoryInput = styled.div`
  border: 1px solid #E5CCFE;
  border-radius: 15px;
  width: 1020px;
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
`
const Option = styled.span`
  box-sizing:border-box;
  font-size: 25px;
  font-weight: 400;
  color: #575757;
  width: 175px;
  padding: 8px 0 7px 43px;

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
  width: 192px;
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