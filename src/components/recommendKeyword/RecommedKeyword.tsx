import React from "react";
import styled from "@emotion/styled"
import Img from "../../assets/SVG/SearchGraphImg.svg"

function RecommendKeyword() {
  return(
    <RecommendKeywordContainer>
      <GraphImg src={Img}></GraphImg>
      <RecommendTitle>추천 키워드</RecommendTitle>
      <RecommendKeywordBox>
        <Keyword>API</Keyword>
        <Keyword>UXUI</Keyword>
        <Keyword>클라우드</Keyword>
        <Keyword>블록체인</Keyword>
        <Keyword>빅데이터</Keyword>
      </RecommendKeywordBox>
    </RecommendKeywordContainer>
  )
}

const RecommendKeywordContainer = styled.div`
  width: 60vw;
  border: 3px solid #D8ADFF;
  border-radius: 30px;
  padding: 2vw
`

const GraphImg = styled.img`
  width: 29px;
  height: 26px;
`

const RecommendTitle = styled.h2`
  display: inline-block;
  font-size: 32px;
  font-weight: 600px;
  color: #8338E9;
  margin: 0;
  padding-left: 15px;
`

const RecommendKeywordBox = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0 0 20px;
`

const Keyword = styled.span`
  font-size: 20px;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  width: 8vw;
  padding: 6px;
  background-color: #F1E8FF;
  color: #9334E9;
  border-radius: 20px;
`

export default RecommendKeyword;