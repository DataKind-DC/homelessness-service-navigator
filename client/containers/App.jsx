import React from 'react';
import data from '../data/Homeless_Services';
import dataParser from '../utils/dataparser';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Homelessness Service Navigator</h1>
				<table>
					<thead>
						<tr>
							<th>Organization Name</th>
							<th>Description</th>
							<th>Address</th>
							<th>Services</th>
							<th>Website</th>
						</tr>
					</thead>
					<tbody>
						{dataParser(data).map(row => {
							return (
								<tr key={row.id}>
									<td>{row.organizationName}</td>
									<td>{row.description}</td>
									<td>{row.address}</td>
									<td>{row.services.join(', ')}</td>
									<td>{row.website}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
