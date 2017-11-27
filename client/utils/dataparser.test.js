import dataparser from './dataparser';
import data from '../data/Homeless_Services';

test('dataparser function should parse data to return a workable json object for the frontend', () => {
	const dataLength = data.dataLength;
	expect(dataparser(data).length).toBe(dataLength);
});
