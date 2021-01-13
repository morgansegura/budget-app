import React from 'react'
import { Statistic } from 'semantic-ui-react'

const DisplayBalance = ({ color = 'black', label, size = 'sm', value }) => {
	return (
		<Statistic size={size} color={color}>
			<Statistic.Label
				style={{
					textAlign: 'left',
				}}>
				{label}
			</Statistic.Label>
			<Statistic.Value>${value}</Statistic.Value>
		</Statistic>
	)
}

export default DisplayBalance
