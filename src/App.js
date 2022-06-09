
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Button} from "primereact/button";
import MainPage from "./pages/MainPage";
import aboutPage from "./pages/GaleryPage";
import Page3 from "./pages/Page3";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";



function App() {


    const appRoutes = [
        {
            path: '/',
            Component: MainPage,
            exact: true,
        },
        {
            path: "/gallery",
            Component: aboutPage,
        },
        {
            path: "/about",
            Component: Page3,
        },
        {
            path: "/profile",
            Component: Profile,
        },
        {
            path: "/auth",
            Component: AuthPage,
        },

    ];


  return (
      <Router>
                <Button label={'grewgrewg'}/>
              <Switch>
                  {appRoutes.map(({path, Component, exact},index) => {

                      return <Route key={index}  path={path} exact={exact} component={Component}/>
                  })}
              </Switch>

      </Router>

  );
}

export default App;
