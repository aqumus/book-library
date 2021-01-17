import { css } from '@emotion/react';
import { PaletteColor } from '../../styles/palette';

export const bookListItemContainer = css`
  display: flex;
  flex-direction: column;
  height: 22rem;
  font-size: 1rem;
  padding: 1.5rem;
  background: white;
  box-shadow: 0 4px 8px 0 #0003;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 8px 16px 0 #0003;
  }

  @media only screen and (max-width: 768px) {
    height: 18rem;
  }
`;

export const bookName = css`
  font-weight: bold;
  font-size: 1.25rem;
`;

export const bookAuthor = css`
  font-style: italic;
`;

export const bookDescription = css`
  color: ${PaletteColor.secondary2};
  flex-grow: 2;
  align-items: center;
  font-size: 0.9rem;
  text-overflow: ellipsis;
`;

export const separator = css`
  width: 100%;
  border-top: 1px solid ${PaletteColor.secondary2};
`;

export const bookCount = css`
  justify-content: flex-end;
  font-size: 1rem;
`;

export const bookCountLabel = css`
  font-size: 1rem;
`;

export const listItemFooterContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const editButtonStyle = css`
  font-size: 1rem;
  border: 1px solid ${PaletteColor.secondary3};
  background: transparent;
  color: ${PaletteColor.secondary3};
  cursor: pointer;
`;
