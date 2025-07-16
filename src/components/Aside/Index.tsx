// Aside.tsx
import React, { useRef, useState } from "react";
import * as S from "./style";
import Logo from "../Logo/Index";
import { asideIcons } from "./asideIcons";
import Profile from "./Profile";
import Logout from "./LogOut";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function Aside() {
  const [selected, setSelected] = useState<string>("home");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      setOpenModal(false);
    }
  }

  const handleMove = (path: string) => {
    navigate(path)
  }

  return (
    <S.Container>
      <Logo />
      <S.MenuWrapper>
        {asideIcons.map((btn) => {
          const isSelected = selected === btn.key;
          const path = btn.path;
          return (
            <S.Btn
              key={btn.id}
              isSelected={isSelected}
              onClick={() => {
                setSelected(btn.key)
                handleMove(path)
              }}
            >
              <img src={isSelected ? btn.clickedIcon : btn.icon} alt={`${btn.label} 아이콘`} />
              <p>{btn.label}</p>
            </S.Btn>
          );
        })}
      </S.MenuWrapper>
      <S.ProfileContainer onClick={() => setOpenModal(true)}>
        <Profile />
      </S.ProfileContainer>
      <Logout />
      {openModal && <Modal ref={modalRef} onClose={closeModal} />}
    </S.Container>
  );
}