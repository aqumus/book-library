import React from 'react';
import { css } from '@emotion/react';
import { Add } from './add';

const closeStyle = css`
  transform: rotate(45deg);
`;

export function Close(props: React.SVGAttributes<SVGElement>) {
  return <Add css={closeStyle} />;
}
