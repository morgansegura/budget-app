import React, { useState } from 'react'
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

	const deleteEntry = id => {
		const result = entries.filter(entry => entry.id !== id)
		console.log('entries', entries)
		console.log('result', result)
		setEntries(result)
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
				setIsOpen={setIsOpen}
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
			<ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
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
