import styled from "@emotion/styled";

interface BtnProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #C492F1;
  width: 16vw;
  height: 95vh;
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
    color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#000000")};
  }
`;

export const MenuWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
 margin-bottom: 10px;
`

export const ProfileUser = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`