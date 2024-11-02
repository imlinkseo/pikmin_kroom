/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Pikmin } from "@svgs/pikmin.svg";

export default function Header() {
  return (
    <header css={wrap}>
      <Pikmin />
      <h1 css={title}>pikmin kroom</h1>
    </header>
  );
}

const wrap = css`
  width: 100%;
  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const title = css`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
