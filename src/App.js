
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Button} from "primereact/button";
import { Menubar } from 'primereact/menubar';

import MainPage from "./pages/MainPage";
import aboutPage from "./pages/GaleryPage";
import Page3 from "./pages/Page3";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import {InputSwitch} from "primereact/inputswitch";
import {useState} from "react";



const ThemeTemplate = () => {
    const [checked, setChecked] = useState(false);
    const ThemeSwitching = (e) => {
        setChecked(e.value)

    }
    return (
        <div className='flex align-items-center'>
            <i className="pi pi-sun mr-2"></i>
            <InputSwitch checked={checked} onChange={ThemeSwitching} />
            <i className="pi pi-moon ml-2"></i>
        </div>
    )
}

const items = [
    {
        label:'Главная',
        icon:'pi pi-fw pi-home',
        command: () => {
            window.location.hash = "/profile";
        }
    },
    {
        label:'Галерея',
        icon:'pi pi-fw pi-images',
        command: () => {
            window.location.hash = "/gallery";
        }
        // items:[
        //     {
        //         label:'Left',
        //         icon:'pi pi-fw pi-align-left'
        //     },
        //     {
        //         label:'Right',
        //         icon:'pi pi-fw pi-align-right'
        //     },
        //     {
        //         label:'Center',
        //         icon:'pi pi-fw pi-align-center'
        //     },
        //     {
        //         label:'Justify',
        //         icon:'pi pi-fw pi-align-justify'
        //     },
        //
        // ]
    },
    {
        label:'Users',
        icon:'pi pi-fw pi-user',
    },
    {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
    },
    {
        icon:'pi pi-fw pi-moon',
        template:ThemeTemplate
    },
    {
        label:'Выйти',
        icon:'pi pi-fw pi-power-off'
    }
];



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

              <Menubar

                  className='flex-shrink-0 flex-grow-1'
                  model={items}
                  start={<div>Logo</div>}
              />


              <Switch>
                  {appRoutes.map(({path, Component, exact},index) => {

                      return <Route key={index}  path={path} exact={exact} component={Component}/>
                  })}
              </Switch>

      </Router>

  );
}

export default App;
