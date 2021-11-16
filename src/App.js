import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import FilmsView from "./views/FilmsView";
import FilmDetails from "./views/FilmDetails";

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/films" exact>
          <FilmsView />
        </Route>
        <Route path="/films/:filmId">
          <FilmDetails />
        </Route>
        <Redirect from="/" to="/films" />
      </Switch>
    </>
  );
}

export default App;
