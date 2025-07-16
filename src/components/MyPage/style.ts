import styled from "@emotion/styled";

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #c49de8;
  width: 60vw;
  height: 10vh;
  padding: 0 2vw;
  gap: 10px;
  border-radius: 30px;
  color: white;
  font-weight: 700;
  font-size: 15px;
`;

export const NameEdit = styled.div`
  display: flex;
`;

export const EditInput = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 700;
  width: 100px;
  color: #fff;
  padding: 2px 4px;
`;

export const CheckButton = styled.button`
  background: #000;
  border: none;
  cursor: pointer;
  margin-left: 8px;
  font-size: 1.2rem;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
