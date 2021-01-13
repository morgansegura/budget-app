import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'

import {
	BalanceEntries,
	DisplayBalance,
	DisplayBalances,
	NewEntryForm,
	MainHeader,
	ModalEdit,
} from './components'

import './App.css'

function App() {
	const [entries, setEntries] = useState(intialEntries)
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const [isExpense, setIsExpense] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [entryId, setEntryId] = useState('')

	useEffect(() => {
		if (!isOpen && entryId) {
			const index = entries.findIndex(entry => entry.id === entryId)
			const newEntries = [...entries]
			newEntries[index].description = description
			newEntries[index].value = value
			newEntries[index].isExpense = isExpense
			setEntries(newEntries)
		}
	}, [description, entries, entryId, isExpense, isOpen, value])

	const deleteEntry = id => {
		const result = entries.filter(entry => entry.id !== id)
		console.log('entries', entries)
		console.log('result', result)
		setEntries(result)
	}

	const editEntry = id => {
		if (id) {
			const index = entries.findIndex(entry => entry.id === id)
			const entry = entries[index]
			setDescription(entry.description)
			setEntryId(id)
			setValue(entry.value)
			setIsExpense(entry.isExpense)
			setIsOpen(true)
		}
	}

	const addEntry = (description, value, isExpense) => {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense,
		})
		setEntries(result)
	}

	return (
		<Container>
			<MainHeader title='Budget' type='h1' />
			<DisplayBalance
				size='small'
				label='Your Balance:'
				value='2,550.53'
			/>
			<DisplayBalances />

			<MainHeader title='History' type='h3' />

			<BalanceEntries
				entries={entries}
				deleteEntry={deleteEntry}
				editEntry={editEntry}
			/>

			<MainHeader title='Add a new transaction' type='h3' />
			<NewEntryForm
				addEntry={addEntry}
				description={description}
				isExpense={isExpense}
				setDescription={setDescription}
				setIsExpense={setIsExpense}
				setValue={setValue}
				value={value}
			/>
			<ModalEdit
				addEntry={addEntry}
				description={description}
				isExpense={isExpense}
				isOpen={isOpen}
				setDescription={setDescription}
				setIsExpense={setIsExpense}
				setIsOpen={setIsOpen}
				setValue={setValue}
				value={value}
			/>
		</Container>
	)
}

export default App

const intialEntries = [
	{
		id: 1,
		description: 'Work Income',
		value: '4000.00',
		isExpense: false,
	},
	{
		id: 2,
		description: 'Water bill',
		value: '123.00',
		isExpense: true,
	},
	{
		id: 3,
		description: 'Rent',
		value: '3000.00',
		isExpense: true,
	},
	{
		id: 4,
		description: 'Power Bill',
		value: '130.00',
		isExpense: true,
	},
]
