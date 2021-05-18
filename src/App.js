import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Landing from './Landing/Landing.js';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'
           render={(routerProps) => <Landing
            {...routerProps}/>} 
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
