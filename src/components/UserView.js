import React from 'react'
import {Router, Route,Switch} from 'react-router-dom';
import Header from './Header'
import PurchaseBill from './afterlogin/PurchaseBill'
import Gst from './afterlogin/Gst'
import Invoice from './afterlogin/Invoice'
import history from '../history'
class UserView extends React.Component{

    render(){
        return(
            <div>
                <Header />
            
            </div>
        )
    }
}
export default UserView;