import { Dialog } from "@headlessui/react";

function Modal({ isOpen = false, children, onClose = () => {}, ...props }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="relative z-50"
      {...props}
    >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
      <Dialog.Panel className="p-10 bg-white mx-auto w-3/4">{children}</Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default Modal;
