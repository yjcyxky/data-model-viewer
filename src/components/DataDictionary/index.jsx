import { connect } from 'react-redux';
import { setGraphView } from './action.js';
import DataDictionary from './DataDictionary';

const ReduxDataDictionary = (() => {
  const mapStateToProps = state => ({
    isGraphView: state.ddgraph.isGraphView,
    dictionaryName: state.submission.dictionaryName,
  });

  const mapDispatchToProps = dispatch => ({
    onSetGraphView: isGraphView => dispatch(setGraphView(isGraphView)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(DataDictionary);
})();

export default ReduxDataDictionary;
