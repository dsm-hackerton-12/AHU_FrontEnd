import React, { useState, useRef, useEffect } from "react";
import * as S from "./style"
import ProfileImg from "../../assets/SVG/Profile.svg";
import Edit from "../../assets/SVG/Edit.svg"
import Check from "../../assets/SVG/Check.svg"
import { patchUserNickname } from "../../apis";
import { useUserStore } from "../../stores/useUserStore";

export default function MyProfile() {
  const userStore = useUserStore();
  const initialUserName = userStore.name || "Guest";
  const userEmail = userStore.email || "";

  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(initialUserName);
  const [tempName, setTempName] = useState(initialUserName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setTempName(userName);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleSave = async () => {
    if (tempName.trim() === '') {
      alert("닉네임을 공백으로 설정할 수 없습니다.");
      return;
    }

    try {
      await patchUserNickname(tempName);
      setUserName(tempName);
      userStore.login(tempName, userEmail, userStore.accessToken || '', userStore.userId || ''); // Update store with new name
      setIsEditing(false);
      alert("닉네임이 성공적으로 변경되었습니다.");
    } catch (error) {
      console.error("Failed to update nickname:", error);
      alert("닉네임 변경에 실패했습니다.");
      setTempName(userName); // Revert to original name on error
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsEditing(false);
      setTempName(userName);
    } else if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <>
      <S.ProfileBox>
        <img src={ProfileImg} alt="" />
        <div>
          <S.NameEdit>
            {isEditing ? (
              <>
                <S.EditInput
                  ref={inputRef}
                  value={tempName}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <S.CheckButton
                  onClick={handleSave}
                  aria-label="Save"
                >
                  <img src={Check} alt="" />
                </S.CheckButton>
              </>
            ) : (
              <>
                <p>{userName}</p>
                <img
                  src={Edit}
                  alt="edit"
                  style={{ cursor: "pointer" }}
                  onClick={handleEditClick}
                />
              </>
            )}
          </S.NameEdit>
          <p>{userEmail}</p>
        </div>
      </S.ProfileBox>
    </>
  );
}