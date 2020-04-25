import { submissionApiPath } from './localconf';

export const fetchDictionary = dispatch =>
  fetch({
    path: `${submissionApiPath}_dictionary/_all`,
    method: 'GET',
    useCache: true,
  })
    .then(
      ({ status, data }) => {
        switch (status) {
        case 200:
          return {
            type: 'RECEIVE_DICTIONARY',
            data,
          };
        default:
          return {
            type: 'FETCH_ERROR',
            error: data,
          };
        }
      })
    .then(msg => dispatch(msg));