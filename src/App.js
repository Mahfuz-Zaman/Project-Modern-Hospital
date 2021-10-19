import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import PageNotFound from './Pages/PageNotFound';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Footer/Footer';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Details from './Pages/Details';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/services">
              <Services></Services>

            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>

            </Route>
            <Route exact path="/about">
              <About></About>

            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/services/:key">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
