import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import DataDictionary from "./DataDictionary/.";
import { Provider } from "react-redux";
import getReduxStore from "./reduxStore";
import { Input, Empty } from "antd";

const { Search } = Input;

async function init() {
  const store = await getReduxStore();

  await Promise.all(
    [
      // store.dispatch(fetchSchema),
      // store.dispatch(fetchDictionary)
    ],
  );

  function onSearch(val) {
    console.log("search:", val);
  }

  function Viewer(props) {
    const isValid = props.isValid;
    if (isValid) {
      return <DataDictionary></DataDictionary>;
    }
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  render(
    <Provider store={store}>
      <div className="tree-container">
        <Search
          allowClear
          placeholder="Select a Schema Url"
          size="large"
          onSearch={onSearch}
          style={{ width: "calc(100% - 30px)", margin: "15px" }}
        />
        <Viewer isValid={ true }/>
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
