import React, { Component } from 'react';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleClick(e){
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        if(email != '' && password != ''){
            this.setState({
                email: email,
                password: password
            }, function(){
                this.props.data(this.state)
            });
            this.refs.email.value = '';
            this.refs.password.value = '';
        }
    }

    render(){
        return (
            <div>
                <h2>Sign In</h2> 
                <h3>{this.props.signinerr}</h3>
                <form onSubmit={this.handleClick.bind(this)}>
                    <label> Email:</label>
                    <input type='email' ref='email' placeholder="Enter Email"/> <br/>
                    <label> Password:</label>
                    <input type='password' ref='password' placeholder="Enter Password"/> <br/>
                    <input type='submit' value='Sign In'/>
                </form>
            </div>
        );
    }
}

export default SignIn; 