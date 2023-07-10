import React, { Suspense, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './Routes/AllRoutes'
import { PublicRoute } from './Routes/PublicRoute'
import { PrivateRoute } from './Routes/PrivateRoute'
import LoadingScreen from './Shared/HelperMethods/LoadingScreen'
import Layout from './Pages/Layout'
import './Global.scss'
import NavScrollExample from './Pages/AdminPages/HeaderAdmin/HeaderAdmin'
import Sidenav from './Shared/Sidenav/Sidenav'

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <Layout>
            <WrappedComponent></WrappedComponent>
          </Layout>
        </>
      )
    }
  }
}

function RouteProgress(props) {
  return <Route {...props} />
}

function App() {
  const [sidenav, setSidenav] = useState(true)
  const sidebartoggler = () => {
    setSidenav(!sidenav)
  }
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingScreen />}>
        <Switch>
          {routes.map((route, i) => {
            const Component = route.component
            return (
              <RouteProgress
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <>
                    {!route.ispublic ? (
                      <div className="col-md-12 background_color_image_sidebar">
                        <div className="row">
                          <div
                            className={
                              sidenav
                                ? 'col-md-2 col-2 bg-white side_nav_style'
                                : ' display_none_onclick_sidenav'
                            }
                          >
                            <Sidenav
                              showside={sidenav}
                              setSidenav={setSidenav}
                            />
                          </div>
                          <div
                            className={
                              sidenav
                                ? 'col-md-10 col-10 px-0 '
                                : 'col-md-12 col-12 px-0 '
                            }
                          >
                            <div className="col-md-12 px-0">
                              <div className="col-sm-12 p-0">
                                <NavScrollExample
                                  showside={sidenav}
                                  setSidenav={setSidenav}
                                />
                              </div>
                              <PrivateRoute
                                props={props}
                                role={route.role}
                                Component={withLayout(Component)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <PublicRoute props={props} Component={Component} />
                      </>
                    )}
                  </>
                )}
              />
            )
          })}
        </Switch>
      </Suspense>
    </React.Fragment>
  )
}

export default App
