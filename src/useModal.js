import React, { useState } from 'react';

import './useModal.css';

const useModal = Element => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  const Modal = props => {
    return (
      <div className="useModal">
        <Element {...props} />
      </div>
    )
  }

  return [Modal, showModal, toggle];
}

export default useModal;
