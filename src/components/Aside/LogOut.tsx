import * as S from "./style"
import LogoutImg from "../../assets/SVG/LogOut.svg"
import { useUserStore } from "../../stores/useUserStore"

export default function Logout() {
  const { logout } = useUserStore();

  return (
    <>
      <S.LogoutContainer onClick={logout}>
        <img src={LogoutImg} alt="" />
        <p>로그아웃</p>
      </S.LogoutContainer>
    </>
  )
}