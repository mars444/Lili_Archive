
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import aboutPage from "./pages/AboutPage";
import Page3 from "./pages/Page3";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import IconBreadcrumbs from "./components/NavigationPath/NavigationPath";


function App() {


    const appRoutes = [
        {
            path: '/',
            Component: MainPage,
            exact: true,
        },
        {
            path: "/galery",
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
            <Header/>

            <IconBreadcrumbs/>

              <Switch>
                  {appRoutes.map(({path, Component, exact},index) => {

                      return <Route key={index}  path={path} exact={exact} component={Component}/>
                  })}
              </Switch>

      </Router>

  );
}

export default App;
