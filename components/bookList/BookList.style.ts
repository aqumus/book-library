import { css } from '@emotion/react';

export const bookListContainer = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  height: 80vh;
  overflow-y: auto;
`;
