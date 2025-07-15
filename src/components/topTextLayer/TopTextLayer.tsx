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
    width: 60vw;
    border: 3px solid #D8ADFF;
    border-radius: 30px;
    padding: 2vw;
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

const TopText = styled.span`
  font-size: 27px;
  font-weight: 400px;
  color: #C492F1;
  padding-left: 57px;
`

export default TopTextLayer