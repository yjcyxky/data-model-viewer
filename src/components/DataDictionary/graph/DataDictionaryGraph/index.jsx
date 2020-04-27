import { connect } from 'react-redux';
import DataDictionaryGraph from './DataDictionaryGraph'

const ReduxDataDictionaryGraph = (() => {
  const mapStateToProps = state => ({
    dictionaryName: state.submission.dictionaryName
  });

  return connect(mapStateToProps)(DataDictionaryGraph);
})();

export default ReduxDataDictionaryGraph