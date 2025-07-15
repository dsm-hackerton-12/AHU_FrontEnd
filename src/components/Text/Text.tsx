import styled from "@emotion/styled";
import { colorStyle, fontStyles } from "../../styles";

interface FontPropsType {
  text?: string;
  kind: keyof typeof fontStyles;
  color: keyof typeof colorStyle;
  onClick?: () => void;
}

const Font = styled.p<FontPropsType>`
  font-size: ${({ kind }) => fontStyles[kind].fontSize};
  font-weight: ${({ kind }) => fontStyles[kind].fontWeight};
  color: ${({ color }) => colorStyle[color]}
`

export const Text = (props: FontPropsType) => {
  return (
    <Font kind={props.kind} color={props.color}>{props.text}</Font>
  )
}
