import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './first-class-muscle-logo.png';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    <div>
      <img className="logo" src={logo} alt="First Class Muscle Logo" />
      </div>
      </div>
  )
}

export default App;