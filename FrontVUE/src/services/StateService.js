import http from './HttpService';

export default {
  getStates() {
    return http.get('/estados').then(({ data }) => data);
  },
  postState(stateName) {
    return http.post('/estados', { nome: stateName });
  },
  deleteState(stateId) {
    return http.delete(`/estados/${stateId}`);
  },
};
