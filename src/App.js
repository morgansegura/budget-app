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
			<BalanceEntry label='Anything' value='10.00' />
			<BalanceEntry isExpense={true} label='A defecit' value='100.00' />

			<MainHeader title='Add a new transaction' type='h3' />
			<EntryForm />
		</Container>
	)
}

export default App
