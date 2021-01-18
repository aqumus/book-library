import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Close } from '../../icons';
import {
  modal,
  modalBody,
  modalContainer,
  modalFooter,
  modalHeaderStyle,
} from './Modal.style';

export const MODAL_CONTAINER_ID = 'modal-container';

type ModalProps = {
  readonly open: boolean;
  readonly onClose?: () => void;
  readonly onConfirm?: () => void;
  readonly closeLabel?: string;
  readonly confirmLabel: string;
  readonly modalHeader?: string;
  readonly inProgress?: boolean;
};

export function Modal({
  open,
  onClose,
  onConfirm,
  closeLabel = 'Cancel',
  confirmLabel = 'Submit',
  modalHeader,
  inProgress,
  children,
}: PropsWithChildren<ModalProps>) {
  const ref = useRef<null | HTMLElement>(null);
  useEffect(() => {
    ref.current = document.getElementById(MODAL_CONTAINER_ID);
  }, []);

  if (!ref.current || !open) {
    return null;
  }

  return createPortal(
    <div css={modalContainer}>
      <div css={modal}>
        {modalHeader && <header css={modalHeaderStyle}>{modalHeader}</header>}
        <article css={modalBody}>{children}</article>
        <footer css={modalFooter}>
          <button onClick={onConfirm} disabled={inProgress}>
            {confirmLabel}
          </button>
          <button onClick={onClose} disabled={inProgress}>
            {closeLabel}
          </button>
        </footer>
      </div>
    </div>,
    ref.current
  );
}
