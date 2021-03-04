import Nav from "./components/shared/Nav";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./pages/home/Home";
import Store from './pages/store/Store';
import AddSim from "./pages/add-sim/AddSim";
import HowTo from "./pages/howTo/HowTo";
import Faq from "./pages/faq/Faq";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Terms from "./pages/terms/Terms";
import Usage from "./pages/usage/Usage";
import Privacy from "./pages/privacy/Privacy";
import SelectedCountry from './pages/selectedCountry/SelectedCountry';
import SelectedPackage from './pages/selectedPackage/SelectedPackage';
import Contact from './pages/contact/Contact';
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Home path="/" />
        <Store path="/store" />
        <AddSim path="/add-sim" />
        <HowTo path="/how-to" />
        <Faq path="/faq" />
        <SignIn path="/sign-in" />
        <SignUp path="/sign-up" />
        <Terms path="/terms-and-conditions" />
        <Usage path="/usage-policy" />
        <Privacy path="/privacy-policy" />
        <Contact path="/contact-us" />
        <SelectedCountry path="/store/:countryName" />
        <SelectedPackage path="/store/:countryName/:selectedPackage" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
