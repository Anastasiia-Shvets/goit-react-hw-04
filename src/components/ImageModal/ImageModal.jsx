import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const ImageModal = ({ urls, alt_description, modalIsOpen, closeModal }) => {
  return (
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={alt_description}
      >
          <img src={urls.regular} alt={alt_description} />
      </Modal>
  )
}
export default ImageModal;