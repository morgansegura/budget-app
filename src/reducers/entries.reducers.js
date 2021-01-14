const reducer = (state = initialEntries, action) => {
	let newEntries
	switch (action.type) {
		case 'ADD_ENTRY':
			newEntries = state.concat({ ...action.payload })
			return newEntries
		case 'REMOVE_ENTRY':
			newEntries = state.filter(entry => entry.id !== action.payload.id)
			return newEntries

		default:
			return state
	}
}

export default reducer

const initialEntries = [
	{
		id: 1,
		description: 'Work Income Redux',
		value: 4000.0,
		isExpense: false,
	},
	{
		id: 2,
		description: 'Water bill',
		value: 123.0,
		isExpense: true,
	},
	{
		id: 3,
		description: 'Rent',
		value: 3000.0,
		isExpense: true,
	},
	{
		id: 4,
		description: 'Power Bill',
		value: 130,
		isExpense: true,
	},
]
