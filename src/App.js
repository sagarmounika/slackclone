import React  from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import Chat from "./Components/Chat/Chat.js";
import Login from "./Components/Login/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useStatValue} from './StateProvider.js'

function App() {
const[{user},dispatch]=useStatValue()
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Mounika</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
