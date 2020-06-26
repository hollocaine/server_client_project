import { create } from 'apisauce';

const apiClient = create({ baseURL: '192.168.56.1:9000/api' });

apiClient.get('/location').then((Response) => {
  if (!response.ok) {
    response.problem;
  }
});

export default apiClient;
