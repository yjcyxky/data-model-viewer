import { dictionaryApiPath } from "./localconf";
import v from 'voca';

export const fetchDictionary = filename => {
  if (filename) {
    return dispatch =>
      fetch(`${dictionaryApiPath}${filename}`, {
        method: "GET",
        useCache: false
      })
        .then(response => response.json())
        .then(responseBody => {
          const data = {
            dictionary: responseBody,
            dictionaryName: v.titleCase(filename.split('.')[0])
          }
          console.log("fetchDictionary: ", data)
          return {
            type: "RECEIVE_DICTIONARY",
            data: data
          };
        })
        .catch(error => {
          return {
            type: "FETCH_ERROR",
            error: error
          };
        })
        .then(msg => dispatch(msg));
  } else {
    const data = {
      dictionary: {},
      dictionaryName: ''
    }

    return dispatch =>
      dispatch({
        type: "RECEIVE_DICTIONARY",
        data: data
      });
  }
};

export const fetchDictionaryList = dispatch =>
  fetch(`${dictionaryApiPath}meta.json`, {
    method: "GET",
    useCache: false
  })
    .then(response => response.json())
    .then(responseBody => {
      return {
        type: "RECEIVE_DICTIONARY_LIST",
        data: responseBody.dictionaries
      };
    })
    .catch(error => {
      return {
        type: "FETCH_ERROR",
        error: error
      };
    })
    .then(msg => dispatch(msg));
