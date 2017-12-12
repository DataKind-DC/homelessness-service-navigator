import _ from 'lodash';
import serviceKeys from '../data/serviceKeys';

export default function(data) {
  return _.map(data, row => {
    let id = row.OBJECTID;
    let organizationName = row.ORGANIZATION_NAME;
    let programName = row.PROGRAM_NAME;
    let description = row.DESCRIPTION;
    let website = row.WEBSITE_URL;
    let address = `${row.STREET_ADDRESS}, ${row.CITY.trim()}, ${row.STATE} ${
      row.ZIP
    }`;
    let services = [];

    _.forEach(serviceKeys, key => {
      if (row[key]) {
        services.push(key);
      }
    });

    return {
      id,
      organizationName,
      programName,
      description,
      website,
      address,
      services
    };
  });
}
