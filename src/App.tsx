import React, { JSX } from 'react'
import { observer } from 'mobx-react-lite'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './configs'

import DefaultLayout from './layouts/Default'

const Home = React.lazy(async () => await import('./pages/Home'))
const About = React.lazy(async () => await import('./pages/About'))

function App (): JSX.Element {
  return (
      <>
          <React.Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path={ROUTES.PUBLIC.BASE} element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path={ROUTES.PUBLIC.ABOUT} element={<About />} />
                </Route>
              </Routes>
            </React.Suspense>
      </>
  )
}

export default observer(App)
