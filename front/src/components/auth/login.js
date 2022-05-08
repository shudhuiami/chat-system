import React, {Component} from "react";
import { Icon } from '@iconify/react';
import {NavLink} from 'react-router-dom'
import config from '../../config'
import $ from "jquery";

export  class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:false,
            isError:false,
            param:{
                username:'',
                password:'',
            }
        };
    }
    changeHandler = (event, type) => {
        let param = this.state.param;
         if(type === 'username') {
            param.username = event.target.value;
        }else if(type === 'password') {
            param.password = event.target.value;
        }
        this.setState({
            param: param
        })
    }
    Login = (event) => {
        this.setState({isLoaded:true})
        this.setState({isError:false})
        event.preventDefault()
        try{
             fetch('http://localhost:3030/app/v1/secure/login', {
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.state.param)
            }) .then(response => response.json())
                .then(data => {
                    this.setState({isLoaded:false})
                    if(data.status === 200){
                        this.setState({successMsg:true})
                        this.setState({isLoaded:false})
                        let param = {
                            email:'',
                            password:'',
                        }
                        this.props.history.push('/dashboard')
                        this.setState({param:param})
                        sessionStorage.setItem("AUTH_TOKEN", JSON.stringify(data.token));
                    }else{
                        this.setState({isLoaded:false})
                        this.setState({isError:true})
                    }
                });
        } catch (error){
            console.log(error)
        }
    }

    componentDidMount() {}
    render() {
        return (
            <div>
                <div className={'text-center mb-4'}>
                    <h4>Sign in</h4>
                    <p className={'text-muted mb-4'}>Sign in to continue to Chatify.</p>
                </div>
                <div className={'card'}>
                <div className="card-body p-4">
                    <div className={'p-3'} >
                        {this.state.isError ? (
                            <div className="alert alert-danger text-center" role="alert">
                                Invalid Credentials
                            </div>
                        ) : (
                            ''
                        )}

                        <form  onSubmit={this.Login}>
                            <div className="form-group">
                                <label>Username</label>
                                <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-light text-muted">
                                                    <Icon icon="ant-design:user-outlined" color="#9aa1b9" width="16" height="16" />
                                        </span>
                                    </div>
                                    <input type="text" value={this.state.username} onChange={(e) => this.changeHandler(e, 'username')} placeholder="Enter your username" className="form-control bg-soft-light border-light"/>

                                </div>
                            </div>
                            <div className="form-group mb-4">
                                <div className="float-end">
                                    <NavLink to={'reset'} className="text-muted font-size-13">Forgot your password?</NavLink>
                                </div>
                                <label>Password</label>
                                <div className="input-group mb-3 bg-soft-light input-group-lg rounded-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-light text-muted">
                                            <Icon icon="ant-design:lock-outlined" color="#9aa1b9" width="16" height="16" />
                                        </span>
                                    </div>
                                    <input type="password" value={this.state.password} onChange={(e) => this.changeHandler(e, 'password')} placeholder="Enter your password" className="form-control bg-soft-light border-light"/>

                                </div>
                            </div>
                            <div className=" d-grid gap-2">
                                <button className="btn btn-theme btn-block" disabled={this.state.isLoaded === true}>
                                    {this.state.isLoaded  === false? `Sign In` :   <Icon icon="eos-icons:loading" color="#a6b0cf" width="20" height="20" />}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                <div className={'text-center mt-5'}>
                    <p> Don't have an account ? <NavLink to={'register'}  className="font-weight-medium ">Sign up now</NavLink>
                    </p>
                </div>
            </div>

        );
    }
}
export default Login