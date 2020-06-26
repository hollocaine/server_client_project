import client from './client';
const endpoint = '/locations';
getLocations = () => client.get(endpoint);

export default {
  getLocations,
};
