import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import About from './pages/About'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/about" exact component={About} />
    </Switch>
  )
}

export default Routes