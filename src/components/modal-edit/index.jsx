import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { EntryForm } from '..'

const ModalEdit = ({
	description,
	isExpense,
	setDescription,
	setIsExpense,
	setValue,
	value,
	isOpen,
	setIsOpen,
}) => {
	return (
		<Modal open={isOpen}>
			<Modal.Header>Edit entry</Modal.Header>
			<Modal.Content>
				<EntryForm
					description={description}
					isExpense={isExpense}
					setDescription={setDescription}
					setIsExpense={setIsExpense}
					setValue={setValue}
					value={value}
				/>
				<Modal.Description>Content here</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => setIsOpen(false)}>Colse</Button>
				<Button primary onClick={() => setIsOpen(false)}>
					Save
				</Button>
			</Modal.Actions>
		</Modal>
	)
}

export default ModalEdit
