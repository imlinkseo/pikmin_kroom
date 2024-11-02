/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface Icaption {
  text: string;
}

export default function Caption(prop: Icaption) {
  const { text } = prop;

  return <p css={caption}>{text}</p>;
}

const caption = css`
  font-size: 14px;
  font-weight: 300;
`;
