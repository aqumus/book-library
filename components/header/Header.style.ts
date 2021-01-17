import { css } from '@emotion/react';

export const headerTitle = css`
  margin: 0;
  font-size: 2.5rem;
  flex-grow: 2;
  @media only screen and (max-width: 650px) {
    margin-bottom: 1.5rem;
    width: 100%;
  }
`;

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media only screen and (max-width: 650px) {
    margin-bottom: 1.5rem;
  }
`;

export const headerActions = css`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 650px) {
    flex-grow: 1;
    justify-content: space-between;
  }

  @media only screen and (max-width: 350px) {
    button {
      margin-bottom: 1rem;
    }
  }
`;
