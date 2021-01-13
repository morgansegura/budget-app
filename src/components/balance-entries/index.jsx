import React from 'react'
import { BalanceEntry } from '..'

const BalanceEntries = ({ entries, deleteEntry }) => {
	return entries.map(entry => (
		<BalanceEntry key={entry.id} {...entry} deleteEntry={deleteEntry} />
	))
}

export default BalanceEntries
