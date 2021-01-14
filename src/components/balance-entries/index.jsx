import React from 'react'
import { BalanceEntry } from '..'

const BalanceEntries = ({ entries, editEntry }) => {
	return entries.map(entry => (
		<BalanceEntry key={entry.id} {...entry} editEntry={editEntry} />
	))
}

export default BalanceEntries
