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
  width: 1268px;
  border: 3px solid #D8ADFF;
  border-radius: 30px;
`
const GraphImg = styled.img`
  width: 29px;
  height: 26px;
  padding: 25px 0 0 31px;
`
const RecommendTitle = styled.h2`
  display: inline-block;
  font-size: 40px;
  font-weight: 600px;
  color: #8338E9;
  margin: 0;
  padding: 19px 0 0 27px;
`
const RecommendKeywordBox = styled.div`
  display: flex;
  padding: 9px 49px 26px;
  gap: 27px;
`
const Keyword = styled.span`
  font-size: 25px;
  font-weight: 500;
  box-sizing: border-box;
  text-align: center;
  width: 130px;
  padding: 10px 0;
  background-color: #F1E8FF;
  color: #9334E9;
  border-radius: 20px;
`
//figma랑 값을 똑같이 줬는데 너무 달라요
//뭐가 문제인지 모르겠어요

export default RecommendKeyword;