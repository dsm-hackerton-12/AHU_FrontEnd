import styled from "@emotion/styled";

export const Container = styled.div`
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

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10vh 15vh 10vh 15vh;
  border-radius: 8px;
  gap: 10vh;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const GoogleOAuth = styled.div`
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

export const GoogleImg = styled.img`
  border-radius: 50%;
`

export const Welcome = styled.span`
  font-weight: 600;
  font-size: 22px;
`

export const FocusWelcome = styled.span`
  color: #8338E9;
  font-weight: 700;
`