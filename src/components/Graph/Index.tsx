import React from "react";
import * as S from "./style";
import HumanIcon from "../../assets/SVG/VotePerson.svg"; // 예시: 사람 아이콘
import AiIcon from "../../assets/SVG/VoteAI.svg"; // 예시: AI 아이콘

interface BarGraphProps {
  humanPercent: number;
  aiPercent: number;
}

export default function BarGraph({ humanPercent, aiPercent }: BarGraphProps) {
  return (
    <S.OuterWrapper>
      <S.Side>
        <S.IconWrapper>
          <img src={HumanIcon} alt="human" width={40} height={40} />
        </S.IconWrapper>
        <S.Label>Human</S.Label>
        <S.Percent>{humanPercent}%</S.Percent>
      </S.Side>
      <S.BarArea>
        <S.BarBase>
          <S.BarFillLeft width={humanPercent} />
          <S.BarFillRight width={aiPercent} />
        </S.BarBase>
      </S.BarArea>
      <S.Side>
        <S.IconWrapper>
          <img src={AiIcon} alt="ai" width={40} height={40} />
        </S.IconWrapper>
        <S.Label>AI</S.Label>
        <S.Percent>{aiPercent}%</S.Percent>
      </S.Side>
    </S.OuterWrapper>
  );
} 