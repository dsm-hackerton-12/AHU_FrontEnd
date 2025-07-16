import React from "react";
import styled from "@emotion/styled"
import WordInfo from "../components/wordInfo/WordInfo";
import TopTextLayer from "../components/topTextLayer/TopTextLayer";

export default function AddWord() {
  return (
    <>
      <Container>
        <TopTextLayer title="새 단어 등록" text="새로운 단어와 정보를 공유해 보세요!" />
        <WordInfo />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  padding: 3vh 0 0 3vw;

`