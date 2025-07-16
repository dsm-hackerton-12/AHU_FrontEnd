
import * as S from "./style"
import ProfileImg from "../../assets/SVG/Profile.svg"
import { useUserStore } from "../../stores/useUserStore"

export default function Profile() {
  const { name, email } = useUserStore();
  return (
    <>
      <S.ProfileContainer>
        <img src={ProfileImg} alt="" />
        <S.ProfileUser>
          <p>{name}</p>
          <p>{email}</p>
        </S.ProfileUser>
      </S.ProfileContainer>
    </>
  )
}