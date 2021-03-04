import React from 'react';
import { Router } from "@reach/router";
import Loadable from 'react-loadable';
import Nav from "./components/shared/Nav";
import Home from "./pages/home/Home";
import Terms from "./pages/terms/Terms";
import Usage from "./pages/usage/Usage";
import Privacy from "./pages/privacy/Privacy";
import Contact from './pages/contact/Contact';
import Loading from './components/shared/Loading';
import Footer from "./components/shared/Footer";
import "./App.css";

const AsyncStore = Loadable({
  loader: () => import('./pages/store/Store'),
  loading: Loading
});
const AsyncAddSim = Loadable({
  loader: () => import("./pages/add-sim/AddSim"),
  loading: Loading
});
const AsyncHowTo = Loadable({
  loader: () => import("./pages/howTo/HowTo"),
  loading: Loading
});
const AsyncFaq = Loadable({
  loader: () => import("./pages/faq/Faq"),
  loading: Loading
});
const AsyncSignIn = Loadable({
  loader: () => import("./pages/sign-in/SignIn"),
  loading: Loading
});
const AsyncSignUp = Loadable({
  loader: () => import("./pages/sign-up/SignUp"),
  loading: Loading
})
const AsyncSelectedCountry = Loadable({
  loader: () => import('./pages/selectedCountry/SelectedCountry'),
  loading: Loading
});
const AsyncSelectedPackage = Loadable({
  loader: () => import('./pages/selectedPackage/SelectedPackage'),
  loading: Loading
});

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Home path="/" />
        <AsyncStore path="/store" />
        <AsyncAddSim path="/add-sim" />
        <AsyncHowTo path="/how-to" />
        <AsyncFaq path="/faq" />
        <AsyncSignIn path="/sign-in" />
        <AsyncSignUp path="/sign-up" />
        <Terms path="/terms-and-conditions" />
        <Usage path="/usage-policy" />
        <Privacy path="/privacy-policy" />
        <Contact path="/contact-us" />
        <Loading path="/loading" />
        <AsyncSelectedCountry path="/store/:countryName" />
        <AsyncSelectedPackage path="/store/:countryName/:selectedPackage" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
