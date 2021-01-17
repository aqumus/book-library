import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const inputContainer = css`
  display: flex;
  height: 2rem;
`;

export const input = css`
  border: none;
  outline: none;
  font-size: 1rem;
  max-width: 15rem;
  padding-left: 10px;
`;

export const searchIcon = css`
  height: auto;
  padding: 3px;
  background: ${PaletteColor.secondary3};
  fill: ${PaletteColor.primary};
  cursor: pointer;
  width: 24px;
`;
