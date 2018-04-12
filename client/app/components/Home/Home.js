import React, { Component } from 'react';
import { getFromStorage,setInStorage } from '../../utils/storage';
import SignIn from '../Forms/SignIn';
import SignUp from '../Forms/SignUp';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInData: {email:'', password: ''},
      signUpData: {email:'', password: '', firstName: '', lastName: ''}
    };
  }

  componentDidMount() {
    const token = getFromStorage('the_main_app:token');
    if(token){
      // verify token
      fetch('http://localhost:3017/api/account/verify?token='+token,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          if(json.success){
            this.setState({
              token: token, 
              isLoading: false
            });
          }else{
            this.setState({
              isLoading: false,
            });
          }
        });
    }else{
      this.setState({
        isLoading: false,
      });
    }
  }

  handleSignIn(data){  
    let property = this.state.signInData;
    property.email = data.email;
    property.password = data.password;

    this.setState({
      signInData: property
    });

    // POST REQUEST
    fetch('http://localhost:3017/api/account/signin', 
      { 
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          email: this.state.signInData.email,
          password: this.state.signInData.password
        }),
      }).then(res => res.json())
      .then(json => {
        console.log(json)
        if(json.success){
          setInStorage('the_main_app:token', json.token);
          this.setState({
            signInError: json.message,
            isLoading: false,
            token: json.token
          });
        }else{
          this.setState({
            signInError: json.message
          });
        }
      });
    
  }

  handleSignUp(data){  
    let property = this.state.signUpData;
    property.email = data.email;
    property.password = data.password;
    property.firstName = data.firstName;
    property.lastName = data.lastName;

    this.setState({
      signUpData: property
    });

    // POST REQUEST
    fetch('http://localhost:3017/api/account/signup', 
      {  
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({
          firstName: this.state.signUpData.firstName,
          lastName: this.state.signUpData.lastName,
          email: this.state.signUpData.email,
          password: this.state.signUpData.password
        }),
      }).then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            signUpError: json.message,
            isLoading: false
          });
        }else{
          this.setState({
            signUpError: json.message
          });
        }
      });
  }

  handleLogout(){
    this.setState({
      isLoading: true
    })
    const token = getFromStorage('the_main_app:token');
    if(token){
      // verify token
      fetch('http://localhost:3017/api/account/logout?token='+token,{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Request-Origin': '*',
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Headers": "access-control-allow-headers,access-control-allow-origin,content-type",
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          if(json.success){
            this.setState({
              token: '', 
              isLoading: false
            });
          }else{
            this.setState({
              isLoading: false,
            });
          }
        });
    }else{
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token
    } = this.state;

    if(isLoading){
      return (
        <div>
          <p>Loading ...</p>
        </div>);
    }

    if(!token){
      return (
        <div>
          <SignUp
            signuperr = {this.state.signUpError}
            data = {this.handleSignUp.bind(this)}/>
          <SignIn
            signinerr = {this.state.signInError}
            data = {this.handleSignIn.bind(this)}/>
        </div>
      );
    }

    return (
      <div>
        Account
        <button onClick={this.handleLogout.bind(this)}>logout</button>
      </div>
    );
  }
}

export default Home;
