import { dictionaryApiPath } from "./localconf";
import v from "voca";
import { filter } from "lodash";

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
            dictionaryName: v.titleCase(filename.split(".")[0])
          };
          console.log("fetchDictionary: ", data);
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
      dictionaryName: ""
    };

    return dispatch =>
      dispatch({
        type: "RECEIVE_DICTIONARY",
        data: data
      });
  }
};

export const getParameter = parameterName => {
  let urlString = window.location.href;
  let url = new URL(urlString);
  return url.searchParams.get(parameterName);
};

export const fetchDictionaryList = dispatch =>
  fetch(`${dictionaryApiPath}meta.json`, {
    method: "GET",
    useCache: false
  })
    .then(response => response.json())
    .then(responseBody => {
      const dictionaries = responseBody.dictionaries;
      const project = getParameter("project");
      if (project) {
        const filtered = filter(dictionaries, o => {
          return o.key === project
        })

        if (filtered.length > 0) {
          const filename = filtered[0].value;
          dispatch(fetchDictionary(filename));
        }
      }

      return {
        type: "RECEIVE_DICTIONARY_LIST",
        data: dictionaries
      };
    })
    .catch(error => {
      return {
        type: "FETCH_ERROR",
        error: error
      };
    })
    .then(msg => dispatch(msg));
