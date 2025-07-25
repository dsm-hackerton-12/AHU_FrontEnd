import styled from "@emotion/styled"

interface Props {
  title?: string,
  text?: string,
}

function TopTextLayer({title, text}: Props) {
  return(
    <TopContainer>
      <TopTitle>{title}</TopTitle>
      <TopText>{text}</TopText>
    </TopContainer>
  )
}
  const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    height: 15vh;
    border: 3px solid #D8ADFF;
    border-radius: 30px;
  `

  const  TopTitle = styled.h2`
    font-size: 32px;
    font-weight: 600px;
    color: #8338E9;
    padding-left: 24px;
    margin: 0;
  `
  
  const TopText = styled.span`
    font-size: 23px;
    font-weight: 400px;
    color: #C492F1;
    padding-left: 24px;
  `

export default TopTextLayer