import { create } from 'apisauce';

const apiClient = create({ baseURL: 'http://192.168.68.103:8000/location' });

apiClient.get('/location').then((response) => {
  if (!response.ok) {
    response.problem;
  }
});

export default apiClient;
