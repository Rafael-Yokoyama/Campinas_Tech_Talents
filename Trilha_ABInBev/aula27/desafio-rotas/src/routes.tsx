
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Produto from './pages/Produto';

function Routes (){
    return(
        <Switch>
            <Route path="/" expect component= {Home}></Route>
            <Route path="/produto/:id" expect component= {Produto}></Route>
        </Switch>

    )
}
export default Routes