import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const formFieldContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin: 1rem;
  font-size: 1rem;
  label {
    min-width: 7rem;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
    padding-right: 0.5rem;
    min-width: 40%;
  }
  input,
  textarea {
    font-size: 1rem;
    padding: 0.35rem 0.5rem;
  }
`;

export const formStyle = css`
  overflow-y: auto;
  max-height: 45vh;
`;
