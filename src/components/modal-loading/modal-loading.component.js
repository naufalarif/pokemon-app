import { Modal } from "antd";
import { LoadingPokeball } from "components";

const ModalLoading = ({ isVisible }) => (
  <Modal visible={isVisible} closable={false} footer={null}>
    <LoadingPokeball />
  </Modal>
);

export default ModalLoading;