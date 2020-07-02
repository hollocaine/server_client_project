import client from './client';
const endpoint = '/location';
const getLocations = () => client.get(endpoint);
console.log(client);
export default {
  getLocations,
};
