import { css } from "@emotion/react";

export const globalStyles = css`
  body,
  html {
    margin: 0;
    font-family: "Pretendard", sans-serif;
    color: #1e1e1e;
  }

  * {
    box-sizing: border-box;
  }

  body {
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  textarea {
    resize: none;
  }

  a {
    text-decoration: none;
  }
`;
