import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Admin from "./components/Admin/Admin";
import LogIn from "./components/LogIn/LogIn";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { useState } from "react";
import { createContext } from "react";
import Checkout from "./components/Checkout/Checkout";
import ManageLogo from "./components/ManageLogo/ManageLogo";
import AddLogo from "./components/AddLogo/AddLogo";
import EditLogo from "./components/EditLogo/EditLogo";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./components/About/About";

export const UserContext = createContext();
export const selectedImageContext = createContext();

function App() {
  const [SignedInUser, setSignedInUser] = useState({});
  const [selectedImageInfo, setSelectedImageInfo] = useState({});
  // const userInfo = {
  //   name: 'Musiur',
  //   isLoggedIn: true
  // }
  // setSignedInUser(userInfo);
  return (
    <UserContext.Provider value={[SignedInUser, setSignedInUser]}>
      <selectedImageContext.Provider
        value={[selectedImageInfo, setSelectedImageInfo]}
      >
        <Router>
          <div>
            <Header />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              <PrivateRoute path="/Order">
                <Order />
              </PrivateRoute>
              <PrivateRoute path="/Admin">
                <Admin />
              </PrivateRoute>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/LogIn">
                <LogIn />
              </Route>
              <PrivateRoute path="/Checkout">
                <Checkout />
              </PrivateRoute>
              <Route path="/ManageLogo">
                <ManageLogo />
              </Route>
              <Route path="/AddLogo">
                <AddLogo/>
              </Route>
              <Route path="/EditLogo">
                <EditLogo/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </Router>
      </selectedImageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
