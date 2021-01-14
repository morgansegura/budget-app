import React, { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
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
	const [description, setDescription] = useState('')
	const [value, setValue] = useState('')
	const [isExpense, setIsExpense] = useState(true)
	const [isOpen, setIsOpen] = useState(false)
	const [entryId, setEntryId] = useState('')
	const [incomeTotal, setIncomeTotal] = useState(0)
	const [expenseTotal, setExpenseTotal] = useState(0)
	const [total, setTotal] = useState(0)
	const entries = useSelector(state => state.entries)

	useEffect(() => {
		if (!isOpen && entryId) {
			const index = entries.findIndex(entry => entry.id === entryId)
			const newEntries = [...entries]
			newEntries[index].description = description
			newEntries[index].value = value
			newEntries[index].isExpense = isExpense
			// setEntries(newEntries)
			resetEntry()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	useEffect(() => {
		let totalIncome = 0
		let totalExpense = 0
		entries.map(entry => {
			if (entry.isExpense) {
				return (totalExpense += Number(entry.value))
			} else {
				return (totalIncome += Number(entry.value))
			}
		})
		setTotal(totalIncome - totalExpense)
		setExpenseTotal(totalExpense)
		setIncomeTotal(totalIncome)
	}, [entries])

	const resetEntry = () => {
		setDescription('')
		setValue('')
		setIsExpense(true)
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

	const addEntry = () => {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense,
		})
		// setEntries(result)
		resetEntry()
	}

	return (
		<Container>
			<MainHeader title='Budget' type='h1' />
			<DisplayBalance size='small' label='Your Balance:' value={total} />
			<DisplayBalances
				expenseTotal={expenseTotal}
				incomeTotal={incomeTotal}
			/>

			<MainHeader title='History' type='h3' />

			<BalanceEntries entries={entries} editEntry={editEntry} />

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
