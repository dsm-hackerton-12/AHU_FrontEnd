// Aside.tsx
import React, { useState } from "react";
import * as S from "./style";
import Logo from "../Logo/Index";
import { asideIcons } from "./asideIcons";
import Profile from "./Profile";
import Logout from "./LogOut";

export default function Aside() {
  const [selected, setSelected] = useState<string>("home");

  return (
    <S.Container>
      <Logo />
      <S.MenuWrapper>
        {asideIcons.map((btn) => {
          const isSelected = selected === btn.key;
          return (
            <S.Btn
              key={btn.id}
              isSelected={isSelected}
              onClick={() => setSelected(btn.key)}
            >
              <img src={isSelected ? btn.clickedIcon : btn.icon} alt={`${btn.label} 아이콘`} />
              <p>{btn.label}</p>
            </S.Btn>
          );
        })}
      </S.MenuWrapper>
      <S.ProfileContainer>
        <Profile />
      </S.ProfileContainer>
      <Logout />
    </S.Container>
  );
}