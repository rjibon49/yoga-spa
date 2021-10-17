import './App.css';
import Header from './Components/Shared/Header/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signup from './Components/Form/Signup';
import Signin from './Components/Form/Signin/Signin';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div >
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
              <Route exact path="/about">
                <About></About>
              </Route>
              <Route exact path="/signup">
                <Signup></Signup>
              </Route>
              <Route exact path="/signin">
                <Signin></Signin>
              </Route>
              
            </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
