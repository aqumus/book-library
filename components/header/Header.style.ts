import { css } from '@emotion/react';

export const headerTitle = css`
  margin: 0;
  font-size: 2.5rem;
  flex-grow: 2;
  min-width: 22rem;
`;

export const headerStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
    ${headerTitle} {
      margin-bottom: 2rem;
    }
  }
`;
