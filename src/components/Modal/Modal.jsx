import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    console.log(event.currentTarget);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { children, styles } = this.props;
    return createPortal(
      <div onClick={this.handleBackdropClick} className={styles.Overlay}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
