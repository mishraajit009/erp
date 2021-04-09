import React from 'react'
import {Router, Route,Switch} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import history from './history'
import Gst from './components/afterlogin/Gst'
import Invoice from './components/afterlogin/Invoice'
import UserView from './components/UserView'
import PurchaseBill from './components/afterlogin/PurchaseBill';
class App extends React.Component{

    render(){
        return(
        <div className="ui container">
            
            <Router history={history}>   
                <div>
                        
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/userview" exact component={UserView}/>
                        <Route path="/gst" exact component={Gst}/>
                        <Route path="/invoice" exact component={Invoice}/>
                        <Route path="/purchasebill" exact component={PurchaseBill}/>
                    </Switch>                 
                </div>
            </Router>    
        </div>
        )
    }
}

export default App;