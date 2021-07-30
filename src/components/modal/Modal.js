import {
  XCircleIcon,
} from "@heroicons/react/outline";
import PropTypes from "prop-types";
import Button from "../button/Button";

const Modal = ({
  open, onClose, modalClass, children,
}) => {
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
      <div
        className={`shadow-md relative p-8 bg-white m-auto flex-col flex rounded-lg ${modalClass}`}
      >
        <div>{children}</div>
        <span className="absolute top-0 right-0 p-4">
          <Button handleClick={onClose} buttonText="" customClass="">
            <XCircleIcon className="h-10 w-10 mr-2 text-blue-800" />
          </Button>
        </span>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  modalClass: PropTypes.string.isRequired,
};

export default Modal;
