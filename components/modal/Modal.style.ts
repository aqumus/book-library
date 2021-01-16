import { css } from '@emotion/react';

export const modalContainer = css`
  position: absolute;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.75;
  backdrop-filter: blur(10);
`;
