import './App.css';
import './components/components.css';
import './components/tablet.css';
import './components/mobile.css';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import Users from './components/Users.jsx';
import Features from './components/Features.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Users />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;