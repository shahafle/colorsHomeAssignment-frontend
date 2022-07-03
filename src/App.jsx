/* <img src={logo} className="App-logo" alt="logo" /> */
import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { Alert } from './cmps/Alert';
import { routes } from './routes';

export function App() {
  return (
    <div className="main-app">
      <AppHeader />
      <Routes>
        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
      </Routes>
      <Alert />
    </div>
  );
}
