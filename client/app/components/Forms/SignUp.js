import React, { Component } from 'react';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let firstName = this.refs.fname.value;
        let lastName = this.refs.lname.value;

        if(email != '' && password != '' && firstName != '' && lastName != '' ){
            this.setState({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }, function(){
                this.props.data(this.state)
            });
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.fname.value = '';
            this.refs.lname.value = '';
            
        }
    }

    render(){
        return (
            <div>
                <h2>Sign Up</h2>
                <h3>{this.props.signuperr}</h3>
                <form onSubmit={this.handleClick.bind(this)}>
                    <label> First name:</label>
                    <input type='text' ref='fname' placeholder="Enter First Name"/> <br/>
                    <label> Last Name:</label>
                    <input type='text' ref='lname'  placeholder="Enter Last Name"/> <br/>
                    <label> Email:</label>
                    <input type='email' ref='email'  placeholder="Enter Email"/> <br/>
                    <label> Password:</label>
                    <input type='password' ref='password'  placeholder="Enter Password"/> <br/>
                    <input type='submit' value='Sign Up'/>
                </form>
            </div>
        );
    }
}

export default SignUp; 