import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
const isAdmin = true;
const name = "jawad";
const message = "hello";
function App() {
  return (
    <div className="App">
      <Navbar isAdmin={isAdmin} name={name} message={message} />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer name={name} message={message} />
    </div>
  );
}

export default App;
