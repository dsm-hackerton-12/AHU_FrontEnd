import React, { useState, useRef, useEffect } from "react";
import * as S from "./style"
import ProfileImg from "../../assets/SVG/Profile.svg";
import Edit from "../../assets/SVG/Edit.svg"
import Check from "../../assets/SVG/Check.svg"

export default function MyProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("userName");
  const [tempName, setTempName] = useState(userName);
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

  const handleSave = () => {
    setUserName(tempName);
    setIsEditing(false);
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
          <p>userEmail</p>
        </div>
      </S.ProfileBox>
    </>
  );
}
