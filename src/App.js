
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



const items = [
    {
        label:'Главная',
        icon:'pi pi-fw pi-home',
    },
    {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
            {
                label:'Left',
                icon:'pi pi-fw pi-align-left'
            },
            {
                label:'Right',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'Center',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label:'Justify',
                icon:'pi pi-fw pi-align-justify'
            },

        ]
    },
    {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-user-minus',

            },
            {
                label:'Search',
                icon:'pi pi-fw pi-users',
                items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                ]
            }
        ]
    },
    {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },

                ]
            },
            {
                label:'Archieve',
                icon:'pi pi-fw pi-calendar-times',
                items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label:'Quit',
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
