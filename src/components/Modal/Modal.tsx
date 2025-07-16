import styled from "@emotion/styled";
import React from "react";
import Logo from "../Logo/Index";
import Google from "../../assets/SVG/Google.svg";

interface ModalProp {
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProp>(({ onClose }, ref) => {
  return (
    <Container>
      <Background ref={ref} onClick={onClose} />
      <Content>
        <Logo />
        {/* 구글 */}
        <InnerContainer>
          <GoogleOAuth>
            <GoogleImg src={Google}/>
            구글 계정으로 로그인
          </GoogleOAuth>
          <Welcome><WelcomeAHU>AHU </WelcomeAHU>에 오신걸 환영합니다</Welcome>
        </InnerContainer>
      </Content>
    </Container>
  )
});

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10vh 15vh 10vh 15vh;
  border-radius: 8px;
  gap: 10vh;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const GoogleOAuth = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 35px;
  width: 20vw;
  font-size: 23px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 20px;
  padding: 5px 10px 5px 10px;
`

const GoogleImg = styled.img`
  border-radius: 50%;
`

const Welcome = styled.span`
  font-weight: 600;
  font-size: 22px;
`

const WelcomeAHU = styled.span`
  color: #8338E9;
  font-weight: 700;
`