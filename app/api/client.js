import { create } from 'apisauce';

const apiClient = create({ baseURL: 'http://192.168.68.103:8000' });

apiClient.get('/location').then((response) => {
  console.log(response);
  if (!response.ok) {
    response.problem;
  }
});

export default apiClient;
