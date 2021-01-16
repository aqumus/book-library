import React, { PropsWithChildren, useRef } from 'react';
import { createPortal } from 'react-dom';
import { modalContainer } from './Modal.style';

const MODAL_CONTAINER_ID = 'modal-container';

type ModalProps = {
  readonly open: boolean;
  readonly onClose?: () => void;
};

export function Modal(props: PropsWithChildren<ModalProps>) {
  const ref = useRef(document.getElementById(MODAL_CONTAINER_ID));
  return (
    ref.current &&
    open &&
    createPortal(<div css={modalContainer}>{props.children}</div>, ref.current)
  );
}
