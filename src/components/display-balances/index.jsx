import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { DisplayBalance } from '..'

const DisplayBalances = ({ expenseTotal, incomeTotal }) => {
	return (
		<Segment textAlign='center'>
			<Grid columns={2} divided>
				<Grid.Row>
					<Grid.Column>
						<DisplayBalance
							size='tiny'
							color='green'
							label='Income:'
							value={incomeTotal}
						/>
					</Grid.Column>
					<Grid.Column>
						<DisplayBalance
							size='tiny'
							color='red'
							label='Expenses:'
							value={expenseTotal}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

export default DisplayBalances
