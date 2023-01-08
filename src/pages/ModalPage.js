import Modal from "../components/Modal";
import Button from "../components/Buttons";
import { useState } from "react";

function ModalPage() {
  const [visibleModal, setVisibleModal] = useState(false);
  const handleClick = () => {
    setVisibleModal(true);
  };
  const handleClose = () => {
    setVisibleModal(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modalEl = (
    <Modal actionBar={actionBar} onClick={handleClose}>
      I am a Modal
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {visibleModal && modalEl}
    </div>
  );
}

export default ModalPage;
