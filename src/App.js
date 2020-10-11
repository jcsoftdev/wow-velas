import React from "react";
import SignUp from "./Auth/SignUp";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from "./Components/Client/Pages/Login";
// import Nabvar from "./Shared/Components/Nabvar/Nabvar";
import Main from "./Components/Client/Pages/Main";
import AdminMain from './Components/Admin/AdminMain'

import { AuthContext } from "./Shared/context/auth-context";
import { useAuth } from "./Shared/hooks/auth-hook";

const App = () => {
  const { token, login, logout} = useAuth();

  let routes ;

  if (!!token) {
    routes = (
      <Switch>
        <Route path='/' exact render={AdminMain}/>
        <Route path='/client' exact render={Main}/>
        <Route path='/signup' exact render={SignUp}/>
        <Redirect to="/" />
      </Switch>
    )
  }else {
    routes = (
      <Switch>
        {/* <Route path='/client' exact>
          <Main />
        </Route> */}
        <Route path='/login' exact >
          <Login/>
        </Route>
        {/* <Route path='/client' exact render={Main}/> */}
        <Route path='/signup' exact render={SignUp}/>
        <Redirect to="/login"/>
      </Switch>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout
      }}
    >
      <Router>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
