import logo from './logo.svg';
import './App.css';
import Meeney from './meeney/meeney';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Meeney />
        </Route>
      </Switch>
    </Router>
  )
}
export default App;