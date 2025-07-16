import * as S from "./style"
import LogoutImg from "../../assets/SVG/LogOut.svg"

export default function Logout() {
  return (
    <>
      <S.LogoutContainer>
        <img src={LogoutImg} alt="" />
        <p>로그아웃</p>
      </S.LogoutContainer>
    </>
  )
}