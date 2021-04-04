import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// context
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

// components
import Layout from "./Layout/Layout";

// provider
import { LayoutProvider } from "../context/LayoutContext";

// pages
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";

// context
//import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  //var { isAuthenticated } = useUserState();
  const usuario = useAutenticacion();
  //console.log(usuario);
  var isAuthenticated = usuario;

  return (  
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario,
      }}
    >
      <LayoutProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/dashboard" />}
            />
            
            <PrivateRoute path="/app" component={Layout} />
            <PublicRoute path="/login" component={Login} />
            <Route component={Error} />
            
          </Switch>
        </HashRouter>
      </LayoutProvider>
    </FirebaseContext.Provider>
     
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
