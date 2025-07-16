import styled from "@emotion/styled";

export const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  width: 65vw;
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #de8787;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  color: #de8787;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Percent = styled.div`
  color: #de8787;
  font-size: 18px;
  font-weight: bold;
  margin-top: 6px;
`;

export const BarArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 350px;
`;

export const BarBase = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background: #f3b1b1;
  border-radius: 14px;
  overflow: hidden;
`;

export const BarFillLeft = styled.div<{ width: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ width }) => width}%;
  background: #de8787;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  z-index: 1;
`;

export const BarFillRight = styled.div<{ width: number }>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: ${({ width }) => width}%;
  background: #ffb1b1;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  z-index: 1;
`; 