import React from "react";
import LogoImg from "../../assets/SVG/LogoImg.svg";
import * as S from "./style";

export default function Logo() {
  return (
    <>
      <S.Container>
        <img src={LogoImg} alt="" />
      </S.Container>
    </>
  );
}
