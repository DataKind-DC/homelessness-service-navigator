import React from 'react';
import data from '../data/Homeless_Services';
import dataParser from '../utils/dataparser';

class App extends React.Component {
	render() {
		console.log(dataParser(data));
		return (
			<div>
				<h1>Homelessness Service Navigator</h1>
			</div>
		);
	}
}

export default App;
