/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Caption, { Icaption } from "../text/Caption";

export default function Footer() {
  const title: Icaption = {
    text: "contact",
  };
  const content: Icaption = {
    text: "imlinkseo@gmail.com",
  };

  return (
    <footer css={wrap}>
      <Caption {...title} />
      <Caption {...content} />
    </footer>
  );
}

const wrap = css`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;
