import React from 'react'
import { BalanceEntry } from '..'

const BalanceEntries = ({ entries, deleteEntry, editEntry }) => {
	return entries.map(entry => (
		<BalanceEntry
			key={entry.id}
			{...entry}
			deleteEntry={deleteEntry}
			editEntry={editEntry}
		/>
	))
}

export default BalanceEntries
