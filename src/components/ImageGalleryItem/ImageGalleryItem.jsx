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
    const { id, src, largeSrc } = this.props;
    return (
      <>
        <li class="gallery-item" key={id}>
          <img src={src} alt="photo" />
        </li>
        {this.state.showModal && (
          <Modal src={largeSrc} onClose={this.toggleModal}>
            <img src={largeSrc} alt="photo" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
