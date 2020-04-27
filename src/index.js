import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import { connect } from "react-redux";
import DataDictionary from "./components/DataDictionary/.";
import { Provider } from "react-redux";
import getReduxStore from "./store/reduxStore";
import { Select, Empty } from "antd";
import { fetchDictionaryList, fetchDictionary } from "./store/actions";

const { Option } = Select;

const isNotEmpty = function(dict) {
  if (Object.keys(dict).length !== 0) {
    return true;
  } else {
    return false;
  }
};

const viewerMapState = state => ({
  isValid:
    state.submission.dictionary && isNotEmpty(state.submission.dictionary)
});

class Viewer extends React.Component {
  render() {
    if (this.props.isValid) {
      return <DataDictionary></DataDictionary>;
    }
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }
}

const ReduxViewer = connect(viewerMapState)(Viewer);

async function init() {
  const store = await getReduxStore();

  await Promise.all([store.dispatch(fetchDictionaryList)]);

  function onSelect(val, option) {
    console.log("search:", val, option);
    store.dispatch(fetchDictionary(val))
  }

  function onChange(val) {
    if (!val) {
      console.log("onChange: ", val);
      store.dispatch(fetchDictionary(val));
    }
  }

  function getData(state) {
    return state.submission.dictList;
  }

  render(
    <Provider store={store}>
      <div className="tree-container">
        <Select
          allowClear
          showSearch
          size="large"
          style={{ width: "calc(100% - 30px)", margin: "15px" }}
          placeholder="Search a Schema Dictionary..."
          optionFilterProp="children"
          onSelect={onSelect}
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {getData(store.getState()).map(d => (
            <Option key={d.value}>{d.text}</Option>
          ))}
        </Select>
        <ReduxViewer />
      </div>
    </Provider>,
    document.getElementById("root")
  );
}

init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
