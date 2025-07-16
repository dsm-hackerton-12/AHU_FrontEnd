
import * as S from "./style"
import ProfileImg from "../../assets/SVG/Profile.svg"

export default function Profile() {
  return (
    <>
      <S.ProfileContainer>
        <img src={ProfileImg} alt="" />
        <S.ProfileUser>
          <p>userName</p>
          <p>userEmail</p>
        </S.ProfileUser>
      </S.ProfileContainer>
    </>
  )
}