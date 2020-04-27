const versionInfo = (state = {}, action) => {
  switch (action.type) {
  case 'RECEIVE_VERSION_INFO':
    return { ...state,
      dictionaryVersion: action.data.dictionary.version || 'unknown',
      apiVersion: action.data.version || 'unknown',
    };
  default:
    return state;
  }
};

export default versionInfo;