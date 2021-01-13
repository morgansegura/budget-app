import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'

import {
	BalanceEntry,
	DisplayBalance,
	DisplayBalances,
	EntryForm,
	MainHeader,
} from './components'

import './App.css'

function App() {
	const [entries, setEntries] = useState(intialEntries)

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

			{entries.map(({ isExpense, description, value }, i) => (
				<BalanceEntry
					isExpense={isExpense}
					description={description}
					value={value}
				/>
			))}

			<MainHeader title='Add a new transaction' type='h3' />
			<EntryForm />
		</Container>
	)
}

export default App

const intialEntries = [
	{
		description: 'Work Income',
		value: '4000.00',
		isExpense: false,
	},
	{
		description: 'Water bill',
		value: '123.00',
		isExpense: true,
	},
	{
		description: 'Rent',
		value: '3000.00',
		isExpense: true,
	},
	{
		description: 'Power Bill',
		value: '130.00',
		isExpense: true,
	},
]
