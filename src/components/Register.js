import React from  'react'

class Register extends React.Component{
    render(){
        return(
            <div>

                <form className="ui form">
                    <div className="field">
                        <label>E-mail</label>
                        <input type="email" placeholder="joe@schmoe.com" />
                    </div>
                    <div>
                        <label>Mobile</label>
                        <input type="email" placeholder="You mobile no" maxLength='10'/>
                    </div>

                    <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                    </div>

                    <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    </div>
                    <button className="ui button primary" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}
export default Register;