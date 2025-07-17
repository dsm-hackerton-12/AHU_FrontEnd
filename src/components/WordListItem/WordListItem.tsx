import styled from "@emotion/styled";

interface WordListItemProps {
  id: string;
  word: string;
  description: string;
  onClick: (id: string) => void;
}

const WordListItemContainer = styled.div`
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const WordTitle = styled.h3`
  margin: 0 0 5px 0;
  color: #333;
`;

const WordDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9em;
`;

export default function WordListItem({ id, word, description, onClick }: WordListItemProps) {
  return (
    <WordListItemContainer onClick={() => onClick(id)}>
      <WordTitle>{word}</WordTitle>
      <WordDescription>{description}</WordDescription>
    </WordListItemContainer>
  );
}
