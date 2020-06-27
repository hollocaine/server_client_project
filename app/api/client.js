import { create } from 'apisauce';

const apiClient = create({ baseURL: '13.74.31.85:80/list' });

apiClient.get('/location').then((Response) => {
  if (!response.ok) {
    response.problem;
  }
});

export default apiClient;
