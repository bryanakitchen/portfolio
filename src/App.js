import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import Main from './Main/Main.js';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'
           render={(routerProps) => <Main
            {...routerProps}/>} 
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
