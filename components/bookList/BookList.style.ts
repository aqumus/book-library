import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const bookListContainer = css`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  height: 80vh;
  overflow-y: auto;
`;

export const noBooksMsg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  color: ${PaletteColor.secondary2};
`;
