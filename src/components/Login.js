import React from 'react'

class Login extends React.Component{
    render(){
        return(
         
            <div className="ui secondary">
                <form className="ui form">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="Email ID" />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Password" />
                    </div>
                    <button className="ui button primary" type="submit">Submit</button>
                 </form>
            </div>
  
        )
    }
}

export default Login;