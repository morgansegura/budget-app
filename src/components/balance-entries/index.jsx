import React from 'react'
import { BalanceEntry } from '..'

const BalanceEntries = ({ entries }) => {
	return entries.map(entry => <BalanceEntry key={entry.id} entry={entry} />)
}

export default BalanceEntries
