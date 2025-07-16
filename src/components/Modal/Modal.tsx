import React from "react";
import Logo from "../Logo/Index";
import Google from "../../assets/SVG/Google.svg";
import * as S from "./style";
import { getOauth2TestConfig } from "../../apis";

interface ModalProp {
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProp>(({ onClose }, ref) => {

  const handleOauth = async () => {
    await getOauth2TestConfig();
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }
  return (
    <S.Container>
      <S.Background ref={ref} onClick={onClose} />
      <S.Content>
        <Logo />
        {/* 구글 */}
        <S.InnerContainer>
          <S.GoogleOAuth onClick={handleOauth}>
            <S.GoogleImg src={Google}/>
            구글 계정으로 로그인
          </S.GoogleOAuth>
          <S.Welcome><S.FocusWelcome>AHU </S.FocusWelcome>에 오신걸 환영합니다</S.Welcome>
        </S.InnerContainer>
      </S.Content>
    </S.Container>
  )
});

export default Modal;