import React from 'react'
import { BalanceEntry } from '..'

const BalanceEntries = ({ entries, deleteEntry, setIsOpen }) => {
	return entries.map(entry => (
		<BalanceEntry
			key={entry.id}
			{...entry}
			deleteEntry={deleteEntry}
			setIsOpen={setIsOpen}
		/>
	))
}

export default BalanceEntries
