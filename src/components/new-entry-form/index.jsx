import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { Form } from 'semantic-ui-react'
import { addEntryRedux } from '../../actions/entries.actions'
import { ButtonSaveOrCancel, EntryForm } from '..'

const NewEntryForm = () => {
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const [isExpense, setIsExpense] = useState(true)
	const dispatch = useDispatch()
	const addEntry = () => {
		dispatch(
			addEntryRedux({
				id: uuidv4(),
				description,
				value,
				isExpense,
			})
		)
		setDescription('')
		setValue('')
		setIsExpense(true)
	}
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
