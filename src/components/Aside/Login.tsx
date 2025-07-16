import * as S from "./style"
import LogoutImg from "../../assets/SVG/LogOut.svg"

export default function Login({ onClick: onClick }: {onClick: () => void}) {
  return (
    <>
      <S.LogoutContainer onClick={onClick}>
        <img src={LogoutImg} alt="" />
        <p>로그인</p>
      </S.LogoutContainer>
    </>
  )
}