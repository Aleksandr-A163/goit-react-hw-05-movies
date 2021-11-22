import { lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader';
import ToTopButton from './components/ToTopButton/ToTopButton';

const SearchFilms = lazy(() => import('./views/SearchMovie'));
const HomeView = lazy(() => import('./views/FilmsView'));
const FilmView = lazy(() => import('./views/FilmDetails'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
      <Switch >
          <Route path="/home" exact>
            <HomeView />
          </Route>
          <Route path='/home/:movieId'>
              <FilmView/>
          </Route>
          <Route path="/movies/:movieId">
            <FilmView />
          </Route>
          <Route path="/movies" exact>
            <SearchFilms/>
          </Route>

          <Redirect to='/home'>
              <HomeView/>
          </Redirect>
      </Switch>
      </Suspense>

      <ToTopButton/>
  </>
  );
}

export default App;
