import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const addBookButton = css`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  background: ${PaletteColor.secondary3};
  color: ${PaletteColor.primary};
  margin-right: 1.5rem;
  height: 2rem;
`;

export const addBookIcon = css`
  padding-right: 5px;
  fill: ${PaletteColor.primary};
`;
