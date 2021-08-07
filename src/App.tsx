import './App.css';
import {BrowserRouter, Switch, Route, Redirect, HashRouter} from "react-router-dom";
import ExchangeRate from "./Components/ExchangeRate/ExchangeRate";
import Exchange from "./Components/Exchange/Exchange";
import React from "react";


const App: React.FC = () => {
  return (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact path={'/exchange_rate'} component={ExchangeRate}/>
                <Route exact path={'/exchange'} component={Exchange}/>
                <Route path={'/'}>
                    <Redirect to={'/exchange_rate'}/>
                </Route>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
