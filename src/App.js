import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import AuthProvider from './Reducers/DummyAuthProvider'; "If we use authentication, we can make use of context api"
import './App.scss';

// const Login ="some login component"

const TheLayout = React.lazy(() => import('./containers/Layout'));
function App() {

  return (
    <div className="App">
      {/* <AuthProvider> */}
      <HashRouter>
        <React.Suspense fallback={<p>loading...</p>}>
          <Switch>
            {/* <Route path="/login" name="Login Page" render={props => <Login {...props} />} /> */}
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;