import * as S from "./style"
import LogoutImg from "../../assets/SVG/LogOut.svg"

interface LoginProps {
  onClick: () => void;
}

export default function Login({ onClick }: LoginProps) {
  return (
    <S.LogoutContainer onClick={onClick}>
      <img src={LogoutImg} alt="" />
      <p>로그인</p>
    </S.LogoutContainer>
  )
}