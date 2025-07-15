import styled from "@emotion/styled";

interface BtnProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #C492F1;
  width: 16vw;
  height: 100vh;
  padding: 20px;
  gap: 10px;
`;

export const Btn = styled.div<BtnProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "#A569E0" : "#FFFFFF")};
  padding: 0 20px;
  border-radius: 20px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-weight: 500;
    color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#000000")}; /* ✅ 글자색도 변경 */
  }
`;
