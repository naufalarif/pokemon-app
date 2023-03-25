import { Modal } from "antd";
import { ImageLoader } from "components";

const ModalSuccess = ({ isVisible, onClick }) => (
  <Modal visible={isVisible} closable={false} footer={null}>
    <div className="flex flex-col items-center text-center mb-7">
      <ImageLoader
        src="/icon.png"
        width={200}
        height={200}
        alt="pikachu"
      />
      <h3 className="text-3xl font-extrabold text-green-400" data-cy="success">Success</h3>
      <span className="text-gray-700 text-lg font-bold">You catch it!</span>
      <p className="text-gray-400 text-lg">Check your pokemon at My Pokemon.</p>
    </div>
    <div className="text-center">
      <button
        type="button"
        onClick={onClick}
        className="px-4 py-2 rounded-xl bg-red-500text-gray-50 font-bold"
        data-cy="close-modal"
      >
        Close
      </button>
    </div>
  </Modal>
);

export default ModalSuccess;