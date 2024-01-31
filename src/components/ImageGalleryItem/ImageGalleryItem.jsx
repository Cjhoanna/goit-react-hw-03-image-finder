import Modal from 'components/Modal/Modal';
import React from 'react';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { id, src, largeSrc, styles } = this.props;
    return (
      <>
        <li className={styles.ImageGalleryItem} key={id}>
          <img
            onClick={this.toggleModal}
            className={styles['ImageGalleryItem-image']}
            src={src}
            alt="foto"
          />
        </li>
        {this.state.showModal && (
          <Modal styles={styles} src={largeSrc} onClose={this.toggleModal}>
            <img src={largeSrc} alt="foto" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
