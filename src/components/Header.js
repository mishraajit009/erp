import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            
            <div className="ui secondary  menu">
                <Link to="/purchasebill" className="active item"  >
                    Purchase
                </Link>
                <Link to="/invoice" className="item"  >
                    Sale Invoice
                </Link>
                <Link to="/gst" className="item"  >
                    GST
                </Link>
                <div className="right menu">
                    <Link to="/login" className="ui item" >
                        Logout
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header; 