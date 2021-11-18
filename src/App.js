import { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import FilmsView from "./views/FilmsView";
import FilmDetails from "./views/FilmDetails";
import Loader from './components/Loader/Loader';

const SearchFilms = lazy(() => import('./views/SearchMovie'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Switch >
          <Route path="/home" exact>
            <FilmsView />
          </Route>
          <Route path="/films/:filmId">
            <FilmDetails />
          </Route>
          <Route path="/films" exact>
            <SearchFilms/>
          </Route>
          <Route path="/films/:filmId">
            <FilmsView/>
          </Route>
        <Redirect from="/" to="/films" />
      </Switch>
      </Suspense>
  </>
  );
}

export default App;
