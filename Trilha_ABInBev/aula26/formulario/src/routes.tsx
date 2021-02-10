import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Text from './pages/Text'
function Routes() {
    return(
      <Switch>
        <Route path="/Home" exact component={Home}/>
        <Route path="/" exact component={Text}/>
      </Switch>
    )
  }
  
  export default Routes