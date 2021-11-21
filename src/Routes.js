import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import PaginaNotFound from './pages/PaginaNotFound'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre/:nome" exact component={Sobre} />
        <Route path="*" component={PaginaNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
