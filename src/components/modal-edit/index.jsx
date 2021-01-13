import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { EntryForm } from '..'

const ModalEdit = ({ isOpen, setIsOpen }) => {
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm />
				<Modal.Description>Content here</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Colse</Button>
			</Modal.Actions>
		</Modal>
	)
}

export default ModalEdit
