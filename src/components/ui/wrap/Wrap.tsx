/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface Iwrap {
  children?: React.ReactNode;
}

export default function Wrap({ children }: Iwrap) {
  return <div css={wrap}>{children}</div>;
}

export const wrap = css`
  width: 100%;
  max-width: 440px;
  padding: 16px;
  background-color: #f8f8f8;
  min-height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;
