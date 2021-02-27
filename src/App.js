import "./App.css";
import RecipePage from "./components/Recipe/RecipePage";
import User from "./components/User/User";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { default as reducer } from "./redux/Reducers";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
      </div>
    </Provider>
  );
}

export default App;
