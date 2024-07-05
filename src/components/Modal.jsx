import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles/Modal.module.css'


function Modal({closeModal,children}) {
  return (
    ReactDOM.createPortal(
        <>
        <div className={styles.backdrop} onClick={closeModal}></div>
        <div className={styles.modalcontent}>
        {children}
        </div>
        </>,
        document.getElementById("modal-root")
    )
  )
}

export default Modal