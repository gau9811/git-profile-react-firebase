import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import "firebase/auth"
import Home from './Home';
import Signin from "./Signin"
import Signup from "./Signup"
import PagenotFound from "./PageNotFound"
import { userContext } from "./context/userContent"
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './Config/firebaseConfig';
import firebase from "firebase"
import PrivateRoute from './PrivateRoute';
firebase.initializeApp(firebaseConfig)

function App() {

  const [user, setUser] = useState(null)

  return (
    <Router>
      <userContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <PrivateRoute path="/" component={Home} />

          <Route path="*" component={PagenotFound} />
        </Switch>
        <Footer />
      </userContext.Provider>
    </Router>
  );
}

export default App;
