import { Modal } from "antd";
import { ImageLoader } from "components";

const ModalFailure = ({ isVisible, onClick }) => (
  <Modal visible={isVisible} closable={false} footer={null}>
    <div className="flex flex-col items-center text-center mb-7">
      <ImageLoader
        src="/icon.png"
        width={200}
        height={200}
        alt="pikachu"
      />
      <h3 className="text-3xl font-extrabold text-red-400" data-cy="failed">Failed</h3>
      <span className="text-gray-700 text-lg font-bold">The Pokemon has running away!</span>
      <p className="text-gray-400 text-lg">Try to catch it again.</p>
    </div>
    <div className="text-center">
      <button
        type="button"
        onClick={onClick}
        className="px-4 py-2 rounded-xl bg-red-500 text-gray-50 font-bold"
        data-cy="close-modal"
      >
        Try Again
      </button>
    </div>
  </Modal>
);

export default ModalFailure;