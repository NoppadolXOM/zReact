import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MsalProvider } from "@azure/msal-react";

import { b2cPolicies } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { WelcomePage } from "./pages/Welcome";
import { Hello } from "./pages/Hello";
import { FLOOR } from "./pages/Floor";

import "./styles/App.css";

const Pages = () => {

  return (
    <Switch>
      <Route path="/hello">
        <Hello />
      </Route>
      <Route path='/huddles'>
        <FLOOR />
      </Route>
      <Route path='/'>
        <WelcomePage />
      </Route> 
    </Switch>
  )
}

const App = ({ instance }) => {
  return (
    <Router>
      <MsalProvider instance={instance}>
        <PageLayout>
          <Pages />
        </PageLayout>
      </MsalProvider>
    </Router>
  );
}

export default App;