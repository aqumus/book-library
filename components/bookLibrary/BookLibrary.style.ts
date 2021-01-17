import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const bookLibraryContainer = css`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  height: 100vh;
  background: ${PaletteColor.primary};
  font-size: 1rem;
  * {
    color: ${PaletteColor.secondary1};
  }
`;
