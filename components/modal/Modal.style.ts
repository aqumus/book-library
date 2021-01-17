import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const modalContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: ${PaletteColor.secondary1};
  color: ${PaletteColor.secondary1};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s;
`;

export const modalHeaderStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${PaletteColor.secondary1};
  align-items: center;
  margin-bottom: 2rem;
`;

export const modal = css`
  display: flex;
  position: relative;
  min-width: 85vw;
  min-height: 50vh;
  max-height: 75vh;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;
  background: white;
`;

export const modalBody = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const modalFooter = css`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  border-top: 1px solid ${PaletteColor.secondary2};
  padding-top: 1rem;
  button {
    padding: 0.5rem;
    background: transparent;
    font-size: 1rem;
    border: 1px solid ${PaletteColor.secondary3};
    color: ${PaletteColor.secondary3};
  }
  button:first-child {
    background: ${PaletteColor.secondary3};
    color: white;
    margin-right: 1.5rem;
  }
`;
