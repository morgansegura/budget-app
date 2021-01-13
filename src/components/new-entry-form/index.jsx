import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import { ButtonSaveOrCancel, EntryForm } from '..'

const NewEntryForm = ({ addEntry }) => {
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const [isExpense, setIsExpense] = useState(true)
	return (
		<Form unstackable>
			<EntryForm
				description={description}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
				setDescription={setDescription}
				setValue={setValue}
				value={value}
			/>
			<ButtonSaveOrCancel
				addEntry={addEntry}
				description={description}
				value={value}
				isExpense={isExpense}
			/>
		</Form>
	)
}

export default NewEntryForm
