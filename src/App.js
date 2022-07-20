import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Fade from "react-reveal/Fade";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <GlobalStyles />
          <Fade top duration={1000} distance="40px">
            <Route path="/">
              <Main />
            </Route>
            <Route path="/about" element={<About />}></Route>
          </Fade>
        </div>
      </Router>
    </>
  );
};

export default App;
