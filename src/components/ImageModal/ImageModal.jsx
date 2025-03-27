import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
  imgDesc,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: '#00008067',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          inset: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <img className={css.img} src={imageUrl} alt={imgDesc} />
      <p className={css.text}>{imgDesc}</p>
    </Modal>
  );
}
