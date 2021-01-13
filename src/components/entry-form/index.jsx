import React from 'react'
import { Form } from 'semantic-ui-react'
import { ButtonSaveOrCancel } from '..'

const EntryForm = () => {
	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					icon='tags'
					width={12}
					label='Description'
					placeholder='New shiny thing'
				/>
				<Form.Input
					width={4}
					label='Value'
					placeholder='100.00'
					icon='dollar'
					iconPosition='left'
				/>
			</Form.Group>
			<ButtonSaveOrCancel />
		</Form>
	)
}

export default EntryForm
