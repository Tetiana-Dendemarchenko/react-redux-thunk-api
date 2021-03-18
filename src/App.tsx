import * as React from "react";
import {Provider} from "react-redux";
import store from './redux/store'
import UserContainer from "./components/userContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <UserContainer/>
            </div>
        </Provider>
    );
}

export default App;
