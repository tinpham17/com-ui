import { Modal } from './components/Modal'
import { ModalHeader } from './components/ModalHeader'
import { ModalBody } from './components/ModalBody'
import { ModalFooter } from './components/ModalFooter'
import { useDisclosure } from './hooks/useDisclosure'
import './App.css'

export default function App() {
  const { open: isBasicModalOpen, onOpen: onOpenBasicModal, onClose: onCloseBasicModal } = useDisclosure()
  const { open: isAlertModalOpen, onOpen: onOpenAlertModal, onClose: onCloseAlertModal } = useDisclosure()
  const { open: isConfirmModalOpen, onOpen: onOpenConfirmModal, onClose: onCloseConfirmModal } = useDisclosure()
  const { open: isFormModalOpen, onOpen: onOpenFormModal, onClose: onCloseFormModal } = useDisclosure()
  const { open: isCustomModalOpen, onOpen: onOpenCustomModal, onClose: onCloseCustomModal } = useDisclosure()

  return (
    <div className="app">
      <h1 className="app-heading">Modal</h1>
      <p className="app-description">An accessible overlay dialog</p>

      <div className="app-section">
        <h2 className="app-section-heading">Basic</h2>
        <div className="app-section-content">
          <button onClick={onOpenBasicModal}>Open</button>
          <Modal open={isBasicModalOpen} onClose={onCloseBasicModal}>
            <div className="app-basic-modal">Content of this modal can be built freely</div>
          </Modal>
        </div>
      </div>

      <div className="app-section">
        <h2 className="app-section-heading">Alert</h2>
        <div className="app-section-content">
          <button onClick={onOpenAlertModal}>Open</button>
          <Modal open={isAlertModalOpen} onClose={onCloseAlertModal}>
            <ModalHeader title="Alert"/>
            <ModalBody>
              <div>You do not have enough priviledge to do this</div>
            </ModalBody>
            <ModalFooter>
              <button onClick={onCloseAlertModal}>OK</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

      <div className="app-section">
        <h2 className="app-section-heading">Confirm</h2>
        <div className="app-section-content">
          <button onClick={onOpenConfirmModal}>Open</button>
          <Modal open={isConfirmModalOpen}>
            <ModalHeader title="Confirm delete"/>
            <ModalBody>
              <div>Are you sure you want to delete this content?</div>
            </ModalBody>
            <ModalFooter>
              <button onClick={onCloseConfirmModal}>No</button>
              <button onClick={onCloseConfirmModal}>Yes</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

      <div className="app-section">
        <h2 className="app-section-heading">Form</h2>
        <div className="app-section-content">
          <button onClick={onOpenFormModal}>Open</button>
          <Modal open={isFormModalOpen} onClose={onCloseFormModal}>
            <ModalHeader title="Login"/>
            <ModalBody>
              <div className="app-form-modal">
                <label>Username</label>
                <input type="text"/>

                <label>Password</label>
                <input type="password"/>
              </div>
            </ModalBody>
            <ModalFooter>
              <button onClick={onCloseConfirmModal}>Login</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

      <div className="app-section">
        <h2 className="app-section-heading">Custom</h2>
        <div className="app-section-content">
          <button onClick={onOpenCustomModal}>Open</button>
          <Modal
            open={isCustomModalOpen}
            onClose={onCloseCustomModal}
            extraClassName="app-custom-modal"
          >
            <ModalHeader title="Custom" extraClassName="app-custom-modal-header"/>
            <ModalBody extraClassName="app-custom-modal-body">
              Modal style can be overriden by using extraClassName prop.
            </ModalBody>
            <ModalFooter extraClassName="app-custom-modal-footer">
              <button onClick={onCloseCustomModal}>OK</button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </div>
  )
}
