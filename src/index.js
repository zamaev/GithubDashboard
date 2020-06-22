import React from 'react';
import ReactDOM from 'react-dom';
import './repos.css';
import Home from './Home';
import Repos from './Repos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>

      <Route path={`/:reposUser/:reposTitle`}>
        <ReposPage />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>

    </Switch>
  </Router>,
  document.getElementById('root')
)


function HomePage() {
  return (
    <Home />
  )

}

function ReposPage() {
  let { reposUser, reposTitle } = useParams();
  let reposName = reposUser + '/' + reposTitle
  return (
    <Repos reposName={reposName} />
  )
}

// === before router
// ReactDOM.render(
//   <Home />,
//   document.getElementById('root')
// )



// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
